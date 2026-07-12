## 1. GitHub OAuth App Setup

- [x] 1.1 Create a GitHub OAuth App in repository Settings > Developer settings > OAuth Apps (note the Client ID)
- [x] 1.2 Set the OAuth callback URL to `https://pcb.rambros3d.com/` (or the Sveltia auth callback URL)
- [x] 1.3 Note the Client ID and generate a Client Secret

## 2. Sveltia Admin Panel

- [x] 2.1 Create `static/admin/index.html` that loads Sveltia CMS from CDN
- [x] 2.2 Create `static/admin/config.yml` with the GitHub backend configuration, OAuth App client ID, and site base URL

## 3. CMS Collection Definitions

- [x] 3.1 Define `beginner` collection in config.yml mapping to `content/beginner/` with Zola frontmatter fields (title, description, template, date, tags, weight, draft)
- [x] 3.2 Define `intermediate` collection in config.yml mapping to `content/intermediate/` with same field schema
- [x] 3.3 Define `resources` collection in config.yml mapping to `content/resources/` with same field schema
- [x] 3.4 Configure media_folder as `static/uploads` and public_folder as `/uploads`
- [x] 3.5 Add `_index.md` as a singleton collection for each section's index page

## 4. Testing & Verification

- [ ] 4.1 Test CMS login flow via GitHub OAuth in a browser
- [ ] 4.2 Test creating a new post in the beginner collection and verify the file is committed correctly
- [ ] 4.3 Test editing an existing post and verify changes commit to the repo
- [ ] 4.4 Verify Zola frontmatter format (TOML with `+++` delimiters) is produced correctly
- [ ] 4.5 Verify non-collaborator GitHub users are denied access
