#!/bin/bash

echo "Stopping any existing Zola processes..."
pkill -f "zola" || true
sleep 1

echo "Starting Zola server on port 1024..."
zola serve --port 1024 --interface 127.0.0.1
