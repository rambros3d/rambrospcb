## ADDED Requirements

### Requirement: Beginner collection maps to content/beginner/
The CMS SHALL define a `beginner` collection that maps to the `content/beginner/` directory. Posts in this collection SHALL be saved as Markdown files with TOML frontmatter.

#### Scenario: Creating a beginner tutorial
- **WHEN** a user creates a new post in the `beginner` collection with title "Part 3: Soldering"
- **THEN** a file is created at `content/beginner/part-3-soldering.md` with the correct frontmatter

#### Scenario: Editing beginner section page
- **WHEN** a user edits the `_index.md` in the `beginner` collection
- **THEN** the file `content/beginner/_index.md` is updated

### Requirement: Intermediate collection maps to content/intermediate/
The CMS SHALL define an `intermediate` collection that maps to the `content/intermediate/` directory.

#### Scenario: Creating an intermediate tutorial
- **WHEN** a user creates a new post in the `intermediate` collection
- **THEN** a file is created at `content/intermediate/<slug>.md`

### Requirement: Resources collection maps to content/resources/
The CMS SHALL define a `resources` collection that maps to the `content/resources/` directory.

#### Scenario: Creating a resource page
- **WHEN** a user creates a new post in the `resources` collection
- **THEN** a file is created at `content/resources/<slug>.md`

### Requirement: Frontmatter fields match Zola schema
Each collection SHALL define fields that match Zola's expected frontmatter:
- `title` (string, required)
- `description` (string)
- `template` (string, optional)
- `date` (datetime)
- `tags` (list of strings)
- `weight` (number, for ordering)
- `draft` (boolean, default false)

#### Scenario: Creating a post with all fields
- **WHEN** a user fills in title, description, tags, date, weight, and draft fields
- **THEN** the saved file has all fields in TOML frontmatter format

#### Scenario: Creating a minimal post
- **WHEN** a user only fills in the title field
- **THEN** the saved file has at least `title` in frontmatter, with other fields omitted or set to defaults

### Requirement: Media uploads go to static directory
The CMS SHALL configure `media_folder` to `static/uploads` and `public_folder` to `/uploads` so uploaded files are served by Zola's static file handling.

#### Scenario: Uploading an image
- **WHEN** a user uploads an image while editing a post
- **THEN** the file is saved to `static/uploads/<filename>` and referenced as `/uploads/<filename>` in the Markdown
