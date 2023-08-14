# Bookmark Landing Page

Response to the [Frontend Mentor Bookmark landing page](https://www.frontendmentor.io/challenges/bookmark-landing-page-5d0b588a9edda32581d29158) challenge.

**Note**: 'Login', 'More info', 'Sign Up', 'email us', _Facebook_ and _Twitter_ are dummy links.

## Problems

The 'shadows' (to the right of the main header and to the left of the 'Features' tab items) only work at certain screen sizes.

## Fonts

Self-hosted Google Font, _Rubik_.

## CSS

- `grid` is used for the overall page layout, as well as for smaller regions.
- `flex` is used throughout.
- Text is responsive (using `font-size: clamp(...)`).
- [CSS Nesting](https://developer.chrome.com/articles/css-nesting/) is used to group styles. (This wreaks havoc in the Chrome Inspector -- no doubt this will soon be fixed. )
  - Browsers that don't support nesting display a link to a 'normal' style sheet.

## Javascript

- ES6 modules (no transpilation to ES5)
- Accessible tabs
- Accessible accordion
- Mobile navigation
- Dark mode theme switching
- Client-side form validation

## Accessibility

### Keyboard navigation

- All items are navigable via the keyboard.
- There is a 'skip to main content' link at the top of the page. This becomes visible when using keyboard navigation.

### Screen readers

- `ARIA` and `role` attributes are used where required.
- Descriptive labels are visually hidden (but available to screen readers).

### Dark mode

- The page style can be toggled between 'Light' (default) and 'Dark' mode.

## Testing

- Tested on:
  - Windows 10
    - Chrome
    - Microsoft Edge
    - Firefox (fails currently, but users can load a 'normal' stylesheet)

## Credits

- The tabs code, used in the 'Features' section, is lifted from the accessibility section of
  [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/tab_role).
