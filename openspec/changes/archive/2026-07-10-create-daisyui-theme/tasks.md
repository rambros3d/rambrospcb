## 1. Setup & Configuration

- [x] 1.1 Remove `theme = "duckquill"` from `config.toml` to disable the third-party theme
- [x] 1.2 Clean up `styles = ["custom.css"]` in `config.toml` and reset `sass` or custom static overrides

## 2. Base Theme Templates

- [x] 2.1 Create `templates/partials/head.html` importing Tailwind CSS CDN (with Typography plugin) and DaisyUI CSS stylesheet
- [x] 2.2 Create `templates/partials/nav.html` with a DaisyUI navbar structure, including a brand logo, links, and theme controller dropdown
- [x] 2.3 Create `templates/partials/footer.html` containing a clean, centered copyright bar and social links using DaisyUI footer classes
- [x] 2.4 Create `templates/base.html` as the main shell combining the head, nav, body block, and footer

## 3. Page & Section Layouts

- [x] 3.1 Create `templates/page.html` (for lessons) that wraps `{{ page.content | safe }}` in a Tailwind `.prose lg:prose-xl dark:prose-invert` container
- [x] 3.2 Create `templates/section.html` (for course collections) displaying clean lists of pages using DaisyUI link and list utilities
- [x] 3.3 Create `templates/index.html` (homepage) incorporating a DaisyUI hero block, row-by-row card sections with placeholders, and modern clean spacing

## 4. Theme switcher JS

- [x] 4.1 Write a small script inside `nav.html` or `base.html` that toggles `data-theme` on the `<html>` root, reads/saves preferences in `localStorage`, and handles system defaults

## 5. Verification

- [x] 5.1 Run `zola build` to check for compilation or link resolving issues
- [x] 5.2 Launch development server with `zola serve` and visually verify layouts and theme toggling
