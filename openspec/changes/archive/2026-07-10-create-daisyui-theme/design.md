## Context

The current static website relies on a third-party Zola theme named `duckquill`. This theme uses custom Sass stylesheet components and custom JS structures, which are hard to modify. We want to remove `duckquill` and replace it with our own native template structure built on top of **Tailwind CSS** and **DaisyUI**. 

To preserve Zola's simplicity and zero-dependency build setup, we will use the **Tailwind Play CDN** and **pre-compiled DaisyUI stylesheet** rather than establishing a local Node.js/Tailwind CLI compiler.

## Goals / Non-Goals

**Goals:**
- Deactivate the third-party `duckquill` theme in `config.toml`.
- Create custom root templates in `templates/` for the layout, pages, sections, and partial components (header/navbar, footer, head).
- Import Tailwind CSS (via CDN script) and DaisyUI (via stylesheet) in the `<head>` of the site.
- Rebuild the homepage layout, navigation menu, and lists using DaisyUI native components (e.g., `navbar`, `card`, `badge`).
- Style article markdown outputs (beginner/intermediate lessons) using Tailwind's Typography plugin (`prose` classes).
- Set up a client-side theme switcher to toggle DaisyUI themes (like `dark`, `light`, `synthwave`) and persist the selection.

**Non-Goals:**
- Setting up a local Node.js environment, `package.json`, or a Tailwind CSS compiler watcher.
- Writing custom CSS/Sass styling sheets from scratch (we will leverage DaisyUI utility classes as much as possible, only writing minimal CSS overrides when needed).

## Decisions

### Decision 1: CDN-Based Tailwind CSS + DaisyUI Stylesheet
- **Rationale**: Using the CDN scripts and precompiled styles avoids introducing local npm dependencies, Node.js files, and background CLI watchers. Zola remains a single-command Rust compiler (`zola serve`) with sub-200ms build speeds.
- **Alternatives Considered**: 
  - *Tailwind CLI Watcher*: Requires npm packages and running a concurrent watcher shell script. Rejected to keep the development toolchain simple.

### Decision 2: Typography Styling via Tailwind Typography Plugin
- **Rationale**: Zola compiles markdown files into plain HTML tags (like `<h1>`, `<p>`, `<ul>`) which we cannot easily annotate with individual Tailwind utility classes. Wrapping the compiled page output in `<div class="prose dark:prose-invert">` automatically styles these tags beautifully and responsively.
- **Alternatives Considered**: 
  - *Custom CSS stylesheet*: Writing individual styles for `h1`, `p`, `blockquote`, etc. Rejected due to the high maintenance overhead compared to `.prose`.

### Decision 3: DaisyUI Native Theme Controller
- **Rationale**: DaisyUI provides 30+ built-in themes which are toggled by changing the `data-theme` attribute on the `<html>` or `<body>` tag. We will implement a small script to read/write this attribute and store the choice in browser local storage.
- **Alternatives Considered**: 
  - *Custom CSS variables toggler*: Creating a custom light/dark class. Rejected as it re-invents DaisyUI's built-in theme mechanism.

## Risks / Trade-offs

- **[Risk] CDN Loading Speed / Flash of Unstyled Content (FOUC)**: Because the Tailwind Play CDN compiler runs in the browser, there can be a brief flash of unstyled page content on slower connections.
  - *Mitigation*: We can include basic reset styles in a small local stylesheet to minimize layout shift, or download the compiled files locally to `static/` if FOUC becomes noticeable.
- **[Risk] File Size**: The pre-compiled DaisyUI CSS file is larger than a custom purged Tailwind file.
  - *Mitigation*: For a content-focused tutorial site, the browser caches the CSS file after the first load, keeping subsequent page loads extremely fast.
