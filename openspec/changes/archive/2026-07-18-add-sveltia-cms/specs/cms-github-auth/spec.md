## ADDED Requirements

### Requirement: GitHub OAuth App registration
The CMS SHALL authenticate via a GitHub OAuth App registered in the repository's developer settings. The OAuth App SHALL use the `implicit` grant type for client-side authentication.

#### Scenario: First-time CMS login
- **WHEN** a user navigates to `/admin/` and clicks "Login with GitHub"
- **THEN** they are redirected to GitHub's OAuth authorization page for the repository's OAuth App

#### Scenario: Successful authentication
- **WHEN** a GitHub user who is a repository collaborator authorizes the OAuth App
- **THEN** they are redirected back to the CMS admin panel with write access to the repository

### Requirement: Access restricted to repository collaborators
The CMS SHALL only grant access to GitHub users who are collaborators on the repository. Non-collaborators SHALL be rejected by GitHub's OAuth flow.

#### Scenario: Non-collaborator attempts login
- **WHEN** a GitHub user who is NOT a repository collaborator authorizes the OAuth App
- **THEN** GitHub denies access and the CMS shows an authentication error

### Requirement: CMS commits via GitHub API
The CMS SHALL use the GitHub API (authenticated via the OAuth token) to commit changes directly to the repository. Commits SHALL target the configured branch (default: `main`).

#### Scenario: Saving content via CMS
- **WHEN** a user edits a post and clicks "Save"
- **THEN** a commit is created on the configured branch via the GitHub API with the updated file content

#### Scenario: Creating new content via CMS
- **WHEN** a user creates a new post and clicks "Publish"
- **THEN** a new file is committed to the repository via the GitHub API
