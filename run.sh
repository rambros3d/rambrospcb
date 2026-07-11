#!/bin/bash

cleanup() {
    echo ""
    echo "Shutting down..."
    [ -n "$ZOLA_PID" ] && kill "$ZOLA_PID" 2>/dev/null
    [ -n "$WATCHER_PID" ] && kill "$WATCHER_PID" 2>/dev/null
    exit 0
}
trap cleanup SIGINT SIGTERM SIGHUP

echo "Stopping any existing Zola processes..."
pkill -f "zola serve" 2>/dev/null || true
sleep 1

echo "Starting Zola server on port 1024..."
zola serve --port 1024 --interface 127.0.0.1 &
ZOLA_PID=$!

# Use inotifywait to watch data/ for changes and trigger a rebuild.
# Zola's serve command doesn't watch the data/ directory,
# so we touch a content file when a data file changes.
echo "Watching data/ for changes with inotifywait..."

inotifywait -m -e modify,create,delete --format '%e %f' data/ 2>/dev/null |
while read -r EVENT FILE; do
    case "$FILE" in
        *.yaml|*.yml)
            echo "  data file changed ($EVENT $FILE), triggering rebuild..."
            # Must actually change file content — touch only updates metadata
            # (IN_ATTRIB), which Zola's inotify watcher ignores.
            # Use a timestamped HTML comment to force a real content change.
            sed -i '/^<!-- data-refresh /d' content/_index.md
            echo "<!-- data-refresh $(date +%s) -->" >> content/_index.md
            ;;
    esac
done &
WATCHER_PID=$!

# Wait for Zola to finish
wait "$ZOLA_PID"
echo "  Zola process exited, cleaning up..."
kill "$WATCHER_PID" 2>/dev/null
wait "$WATCHER_PID" 2>/dev/null
