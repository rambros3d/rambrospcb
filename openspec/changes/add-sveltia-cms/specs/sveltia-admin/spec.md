## ADDED Requirements

### Requirement: Admin panel is served at /admin/
The site SHALL serve a Sveltia CMS admin panel at the `/admin/` path. The admin panel SHALL be implemented as static files in `static/admin/`.

#### Scenario: Accessing admin panel
- **WHEN** a user navigates to `https://pcb.rambros3d.com/admin/`
- **THEN** the Sveltia CMS login interface is displayed

### Requirement: Admin panel loads Sveltia from CDN
The admin panel SHALL load the Sveltia CMS JavaScript bundle from `cdn.jsdelivr.net`. No local npm build step SHALL be required.

#### Scenario: Admin panel loads successfully
- **WHEN** the admin page loads in a browser
- **THEN** the Sveltia CMS bundle is fetched from the CDN and the CMS UI initializes

### Requirement: Admin panel supports TOML frontmatter
The CMS SHALL be configured to use TOML (`+++` delimiters) as the frontmatter format, matching Zola's default.

#### Scenario: Creating content with TOML frontmatter
- **WHEN** a user creates or edits a post in the CMS
- **THEN** the saved file uses `+++` delimiters for frontmatter with TOML syntax

### Requirement: Admin panel supports Markdown editing
The CMS SHALL provide a Markdown editor for content body fields. The editor SHALL preserve Zola shortcode syntax (e.g., `{{ youtube(id="...") }}`) as raw text.

#### Scenario: Editing content with shortcodes
- **WHEN** a user edits a Markdown file containing `{{ youtube(id="abc123") }}`
- **THEN** the shortcode is preserved as-is in the editor and saved correctly
