## Context

This is a Zola static site using the Duckquill theme, deployed to GitHub Pages. Content is organized into `content/beginner/`, `content/intermediate/`, and `content/resources/` directories, each with `_index.md` section pages. The site owner is the sole content author who wants browser-based editing without requiring a local development environment.

The site uses Zola's TOML frontmatter (`+++` delimiters) with fields like `title`, `description`, `template`, and `tags`. Content includes YouTube shortcodes (`{{ youtube(id="...") }}`) and table shortcodes.

## Goals / Non-Goals

**Goals:**
- Provide a browser-based admin panel for editing all site content
- Restrict CMS access to repository collaborators via GitHub OAuth
- Map Zola's content structure (beginner, intermediate, resources) into CMS collections
- Support Zola-specific content: TOML frontmatter, YouTube shortcodes, tables, DXF file attachments
- Keep the CMS self-contained in static files — no external service dependency

**Non-Goals:**
- Real-time collaborative editing
- Image/media management beyond file uploads (Zola handles static assets directly)
- Building/deploying the site from the CMS (commits go to repo, CI/CD or manual build handles deployment)
- Supporting non-Markdown content types (HTML, JSON, etc.)
- Multi-user roles or permissions beyond collaborator access

## Decisions

### 1. Self-hosted Sveltia CMS via CDN bundle

**Decision**: Include `static/admin/index.html` that loads Sveltia CMS from the official CDN (`cdn.jsdelivr.net`). No npm build step required.

**Rationale**: Sveltia CMS is distributed as a single JS bundle. Loading from CDN keeps the setup trivial — just an HTML file and config YAML. Self-hosting the bundle would require a build pipeline that adds complexity for no real benefit on a personal project.

**Alternative considered**: Copy the full Sveltia bundle into `static/admin/`. Rejected because it requires periodic manual updates and adds ~500KB to the repo.

### 2. GitHub OAuth for authentication

**Decision**: Use Sveltia's built-in GitHub backend with OAuth. The owner registers a GitHub OAuth App in repo settings, and the CMS uses it to authenticate API calls.

**Rationale**: Sveltia has native GitHub OAuth support. Since only repo collaborators need access, this naturally restricts CMS access to authorized GitHub users. No external auth provider needed.

**Alternative considered**: Git Gateway + Netlify Identity. Rejected because it requires a Netlify account and adds an unnecessary dependency.

### 3. Collection structure mirrors content directory

**Decision**: Define three CMS collections matching the existing directory structure:
- `beginner` → `content/beginner/` (posts with frontmatter)
- `intermediate` → `content/intermediate/` (posts with frontmatter)
- `resources` → `content/resources/` (posts with frontmatter)

Each collection allows creating/editing `_index.md` section pages and individual tutorial posts.

**Rationale**: Maps 1:1 to Zola's expected structure. No migration needed. Content created in CMS goes exactly where Zola expects it.

### 4. Zola frontmatter schema in CMS fields

**Decision**: Define CMS field schemas that match Zola's TOML frontmatter:
- `title` (string, required)
- `description` (string)
- `template` (string, optional)
- `date` (datetime, for ordering)
- `tags` (list of strings, for taxonomy)
- `weight` (number, for ordering within sections)

YouTube embeds and other shortcodes will be entered as raw Markdown in the body field.

**Rationale**: Zola uses TOML frontmatter. Sveltia CMS supports TOML frontmatter natively. The field definitions ensure the CMS produces valid Zola-compatible frontmatter.

### 5. No workflow/deploy automation in CMS

**Decision**: CMS commits go directly to the configured branch (e.g., `main` or `master`). Deployment is handled separately (GitHub Actions, manual `zola build`, etc.) — not by the CMS.

**Rationale**: The site already has a deployment process. Adding CMS-triggered deploys would require configuring webhook endpoints or GitHub Actions, which is out of scope.

## Risks / Trade-offs

- **CDN dependency**: Sveltia loads from jsDelivr CDN. If CDN is down, CMS admin is inaccessible (site itself is unaffected). → Mitigation: Low risk for personal use; CDN has high availability.
- **No draft support in CMS**: Zola supports `draft = true` in frontmatter. Sveltia can be configured to include this field but draft/publish workflow is limited. → Mitigation: Add a `draft` boolean field to the CMS config.
- **Zola shortcodes as raw text**: YouTube embeds and tables are entered as shortcode syntax in the body editor. The CMS won't render a preview of these. → Mitigation: Acceptable trade-off; the site owner knows the shortcode syntax.
- **File uploads**: DXF files and other static assets need to be uploaded to the correct path. Sveltia can handle media files but the path mapping needs to be correct. → Mitigation: Configure `media_folder` and `public_folder` in the CMS config.
