## Why

The site currently requires editing Markdown files locally and pushing via Git to update content. This creates friction for quick edits and prevents the owner from making changes from any device without a local dev setup. Adding Sveltia CMS provides a browser-based admin panel for editing all site content — tutorials, resources, and metadata — while keeping the Git-based workflow and static site architecture intact.

## What Changes

- Add a self-hosted Sveltia CMS admin panel at `/admin/` that allows editing all content through a browser UI
- Add `config.yml` for Sveltia/Decap CMS that maps Zola's content structure (beginner, intermediate, resources) to CMS collections
- Configure GitHub OAuth so only repository collaborators can authenticate
- Add frontmatter schema support for all content types (title, description, tags, date, YouTube embeds)
- Content authored in the CMS commits directly to the repo via GitHub API

## Capabilities

### New Capabilities

- `sveltia-admin`: Self-hosted Sveltia CMS admin panel with GitHub OAuth authentication, served as static files in `/admin/`
- `cms-collections`: CMS collection definitions mapping Zola's content structure (beginner, intermediate, resources sections) to editable collections with appropriate field schemas
- `cms-github-auth`: GitHub OAuth integration for CMS authentication, restricted to repository collaborators only

### Modified Capabilities

(none — no existing specs to modify)

## Impact

- **Files added**: `static/admin/index.html`, `static/admin/config.yml`
- **Files modified**: `.gitignore` (may need adjustments for admin assets)
- **Dependencies**: Sveltia CMS JS bundle (loaded from CDN for self-hosted approach), GitHub OAuth App registration required
- **GitHub setup**: Requires creating a GitHub OAuth App in repo settings for CMS authentication
- **No changes to**: Zola config, theme, content files, or build process — the CMS edits commit directly to the repo and Zola builds as usual
