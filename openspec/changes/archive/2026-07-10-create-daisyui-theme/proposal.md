## Why

The current theme (`duckquill`) is a third-party theme written using a custom Sass system. Creating our own custom theme from scratch using DaisyUI and Tailwind CSS (via CDN hybrid approach) allows us to design beautiful, modern, responsive layouts rapidly while maintaining Zola's native simplicity (no local Node.js/Tailwind CLI compiler required). We will take full ownership and maintain the theme ourselves.

## What Changes

- **Theme Configuration**: Disable the `duckquill` theme in `config.toml`.
- **Root Templates**: Create custom templates in `templates/` (like `base.html`, `index.html`, `page.html`, `section.html`, `partials/head.html`, `partials/nav.html`, `partials/footer.html`) to replace the theme's default templates.
- **DaisyUI Stylesheet Integration**: Link Tailwind CSS Play CDN and DaisyUI pre-compiled styles in the root `<head>` section.
- **DaisyUI Layouts**: Rebuild the site header/navbar, course listings, resources page, and article page layout using DaisyUI components (`navbar`, `card`, `badge`, `prose`, etc.).
- **Theme switching**: Re-implement dark/light theme switching natively using DaisyUI's `data-theme` attribute.

## Capabilities

### New Capabilities
- `daisyui-theme`: A Zola theme built entirely on top of Tailwind CSS and DaisyUI utility classes.

### Modified Capabilities
<!-- None -->

## Impact

- **Build/Dev Complexity**: Remains extremely low (no local Node/npm build dependencies required).
- **Styling Files**: Replaces duckquill sass assets with a simple, standard stylesheet to customize DaisyUI defaults.
- **Third-Party Dependency**: Removes dependency on `themes/duckquill`.
