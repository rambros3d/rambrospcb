## ADDED Requirements

### Requirement: DaisyUI Base Layout
The website shell SHALL import Tailwind CSS and DaisyUI stylesheet dependencies inside the `<head>` tag. It SHALL render a responsive, styled navbar and footer using DaisyUI component classes.

#### Scenario: Rendering the base website shell
- **WHEN** a user visits any page on the website
- **THEN** the page header contains the DaisyUI CSS dependency link
- **THEN** the website navbar is rendered using DaisyUI classes
- **THEN** the footer is rendered using DaisyUI classes

### Requirement: Homepage Layout
The homepage SHALL render a custom hero section and a course listing row-by-row layout using DaisyUI classes.

#### Scenario: Viewing the homepage
- **WHEN** a user visits the root page `/`
- **THEN** the hero section is displayed using a DaisyUI hero layout card
- **THEN** the course series links are rendered as DaisyUI horizontal card rows containing placeholders, titles, and descriptions

### Requirement: Client-Side Theme Selection
The theme SHALL support toggling dark, light, and other custom color schemes. The selection SHALL be applied using DaisyUI's native `data-theme` attribute on the page root.

#### Scenario: Changing the site theme
- **WHEN** a user clicks the navbar theme selector and clicks a new theme option
- **THEN** the `data-theme` attribute on the page root is updated to the chosen theme
- **THEN** the theme choice is saved in browser local storage
