# ArtRace Interactive Features

This project includes two key interactive features designed to enhance accessibility and user engagement across all pages of the **ArtRace** site.

---

## Lightbox Gallery View

**Feature Description:**  
The Lightbox feature allows users to click on artwork thumbnails and view a larger version in an overlaid gallery-style modal.

**Expected Behavior:**

- Clicking on a painting (image element) opens a full-screen lightbox with a centered enlarged image.
- The background is dimmed to emphasize the artwork.
- Users can close the lightbox by:
  - Clicking the **X** close button in the corner.
- Navigation buttons (left and right arrows) are present in the modal to move through a gallery of all the images in enlarged size

**Accessibility:**

- The lightbox traps focus while open.
- The close button is keyboard-accessible and screen-reader friendly.

## Font Size Adjuster

**Feature Description:**  
Users can adjust the font size of the main content using controls located just below the navigation bar on each page in the header.

**Expected Behavior:**

- Two buttons are provided:
  - **A−**: Decreases font size.
  - **A+**: Increases font size.
- These buttons adjust the font size of text on the page dynamically, without reloading.
- Font size preferences persist across pages during the session.

**Accessibility:**

- Buttons are accessible via keyboard and screen readers.
- Improves readability for users with low vision or other visual needs.
- This feature is available on all pages:
  - `index.html`
  - `game.html`
  - `instructions.html`
  - `about.html`

# ArtRace Interactive Features

This project includes two key interactive features designed to enhance accessibility and user engagement across all pages of the **ArtRace** site.

---

## 🎨 Lightbox Gallery View

**Feature Description:**  
The Lightbox feature allows users to click on artwork thumbnails and view a larger version in an overlaid gallery-style modal.

**Expected Behavior:**

- Clicking on a painting (image element) opens a full-screen lightbox with a centered enlarged image.
- The background is dimmed to emphasize the artwork.
- Users can close the lightbox by:
  - Clicking the **×** close button in the corner.
  - Pressing the **Escape** key (if implemented).
- Navigation buttons may be present to move through a gallery of images (if multiple are loaded).

**Accessibility:**

- The lightbox traps focus while open.
- The close button is keyboard-accessible and screen-reader friendly.

---

## Font Size Adjuster

**Feature Description:**  
Users can adjust the font size of the main content using controls located just below the navigation bar on each page.

**Expected Behavior:**

- Two buttons are provided:
  - **A−**: Decreases font size.
  - **A+**: Increases font size.
- These buttons adjust the font size of text on the page dynamically, without reloading.
- Font size preferences persist across pages during the session using `localStorage`.

**Accessibility:**

- Buttons are accessible via keyboard and screen readers.
- Improves readability for users with low vision or other visual needs.
- Theis feature is available on all pages:
  - `index.html`
  - `game.html`
  - `instructions.html`
  - `about.html`
# Art-Race
