## Changes Made

### Favicon and Title Improvements in `index.html` file

1. **Title tag in line 7**  
   - **Issue**: Spelling error — "Wortionary" instead of "Worctionary"  
   - **Fix**: Corrected spelling to "Worctionary"

2. **Favicon in line 5**  
   - **Issue**: Vite’s default favicon was still being used  
   - **Fix**: Updated to Worctionary’s custom logo

3. **Added Font (lines 8–10)**  
   - **Issue**: Default font used, inconsistent with design requirements  
   - **Fix**: Added Inter font link for improved visual consistency

### `index.css` file

1. **Integrated font family in line 118**  
   - **Issue**: Font family not explicitly set, leading to inconsistent text rendering  
   - **Fix**: Added `font-family: 'Inter', sans-serif` to ensure consistent typography

### `App.tsx` file

1. **Component structure**  
   - **Issue**: All components were cluttered inside `App.tsx`, reducing maintainability  
   - **Fix**: Split components into individual files under `components/common` for better structure and reusability

2. **useState not used properly in line 6**  
   - **Issue**: Declared `useState` as `[tags, setTags]`, but `setTags` was never used to update the state  
   - **Fix**: Removed the setter function and replaced state with a simple `const tags = [...]` since the tag list is static and doesn’t need to change dynamically

3. **Improved semantic HTML structure in layout**
    - **Issue**: `<Header />` and other elements were placed without semantic containers, affecting accessibility and layout clarity
    - **Fix**: Wrapped `<Header />`inside a semantic `<header>` tag with sticky positioning; added a centered `<section>` container to constrain and organize page content for better accessibility and visual hierarchy

4. **Extracted `Header` into a new component**
    - **Issue**: `Header` component was inside `App.tsx`, cluttering the main component
    - **Fix**: Created a new reusable `Header` component in `components/common/Header.tsx` for better code organization

5. **Extracted `TagList` into a new component**
    - **Issue**: `TagList` component was inside `App.tsx`, cluttering the main component
    - **Fix**: Created a new reusable `TagList` component in `components/common/TagList.tsx` for better code organization

6. **Extracted `BoxArea97` into a new component**
    - **Issue**: `BoxArea97` component was inside `App.tsx`, cluttering the main component and the name wasn't relevant
    - **Fix**: Created a new reusable `HeroSection` component in `components/common/HeroSection.tsx` for better code organization

6. **Extracted `BoxArea108` into a new component**
    - **Issue**: `BoxArea108` component was inside `App.tsx`, cluttering the main component and the name wasn't relevant
    - **Fix**: Created a new reusable `SearchBar` component in `components/common/SearchBar.tsx` for better code organization

### [Header] Component

1. **Corrected spelling**
    - **Issue**: “Wortionary” misspelled
    - **Fix**: Changed to Worctionary in line 13

2. **Logo Too Large**
    - **Issue**: Logo was not aligned with the Figma
    - **Fix**: Reduced the logo size

3. **Search Input Labeling**
    - **Issue**: Input had a lowercase "search" value directly inside
    - **Fix**: Replaced with a proper placeholder="Search"

4. **Search Icon Misaligned**
   - **Issue**: Search icon was not correct and vertically centered
   - **Fix**: Created a component `components/common/Logo.tsx` with the svg and centered the icon and added 16px padding

5. **Search Bar Padding**
   - **Issue**: Input padding didn’t match height
   - **Fix**: Adjusted padding for visual consistency

6. **Default Avatar used**
   - **Issue**: Avatar was using default styling/image
   - **Fix**: Replaced with custom image from `public/task1/profile.png`

7. **Border Radius Too Small**
   - **Issue**: Search bar border-radius was too rounded
   - **Fix**: Updated to 12px for a softer look
 
8. **Header Padding**
   - **Issue**: Default spacing caused layout imbalance
   - **Fix**: Updated header padding to 12px 40px

9. **Spacing Between Avatar and Search**
   - **Issue**: Insufficient spacing between elements
   - **Fix**: Increased spacing to 32px

10. **Border Bottom Color Too Subtle**
   - **Issue**: Border-bottom didn’t create enough separation
   - **Fix**: Adjusted to a more visible color from Figma

11. **Logo and Brand Name Too Close**
   - **Issue**: Logo and text had less gap
   - **Fix**: Increased spacing to 16px

12. **Missing Navigation and Context on Logo and Site title**
   - **Issue**: The `div` wrapping the logo and brand name lacked a link
   - **Fix**: Added `<a>` tag with `aria-label="Worctionary Home"` to describe that the link navigates to the homepage

13. **Unlabeled Search Input Field**
   - **Issue**: No accessible name for the search field
   - **Fix**: Added a visually hidden `<label>` with `className="sr-only"` and associated it using `htmlFor="header-search"`

14. **Search Region Not Marked**
   - **Issue**: The search form had no role or region description
   - **Fix**: Added `role="search"` and `aria-label="Site search"` to help screen readers identify the section

14. **Avatar Without Context**
   - **Issue**: `Avatar` was visually clear but not semantically labeled
   - **Fix**: Wrapped it in a `div` with `aria-label="User profile"` to convey its purpose to assistive tech

14. **Decorative Images Could Be Misread by Screen Readers**
   - **Issue**: Profile and logo images could have been interpreted as content
   - **Fix**: Ensured meaningful alt attributes `(e.g., alt="User profile image" and alt="Worctionary logo")`

### [SearchBar] Component

1. **Component Naming**
    - **Issue**: `BoxArea108` is a non-semantic, unclear name.
    - **Fix**: Renamed to `SearchBar` for semantic clarity and better maintainability.

2. **Typing and Prop Handling**
    - **Issue**: Inline prop types used `({ initialValue: string; onSearch: (search: string) => void; })`
    - **Fix**: Replaced with a strongly typed and reusable `SearchBarProps` type from `/@types`.

3. **Form Semantics**
    - **Issue**: It used a `<div>` for search instead of a semantic `<form>`
    - **Fix**: Wrapped the `input` and `button` in a proper `<form>` element and handled submission with `onSubmit`.

4. **Controlled Behavior Consistency**
    - **Issue**: It did not trigger search explicitly on submit (only via effect).
    - **Fix**: Added a proper submit handler to control when Search is clicked.

5. **Styling Improvements**
    - **Issue**: The styling were not aligned with the Figma design.
    - **Fix**: 
      - Used a more accessible color palette (e.g., #1C2126 for better contrast).
      - Improved spacing `(pl-4 pr-1.5 py-1.5)` and `border` consistency.- - Replaced lucid icon with modular `<SearchIcon />`.

6. **Visual and Placeholder Enhancement**
    - **Issue**: Placeholder used generic text and was inconsistent in color.
    - **Fix**: Updated `placeholder` to `"Type to search..."` and applied consistent styling via Tailwind classes `(placeholder:text-[#9EABB8])`.

7. **Accessibility Enhancements**
    - **Issue**: It lacked accessibility roles and labels.
    - **Fix**:
      - Added `role="search"` to indicate the purpose of the `<form>` to screen readers.
      - Added `aria-label="Keyword search"` for descriptive context
      - Included a visually hidden `<label>` associated with the input `(htmlFor="search-input")`.
      - Added `aria-hidden="true"` to the icon to prevent screen readers from reading decorative content.

### [Header] Component

1. **Component Naming**
    - **Issue**: `BoxArea97` is a non-descriptive and confusing name.
    - **Fix**: Renamed to `HeroSection`, which clearly describes the purpose of the component.

2. **Component Structure**
    - **Issue**: `BoxArea97` uses inline `BoxArea108`, which is ambiguously named and doesn't communicate function.
    - **Fix**: Renamed to `SearchBar` for semantic clarity and better maintainability.

3. **Semantic HTML**
    - **Issue**: Root container used a plain `<div>`, which lacks semantic meaning.
    - **Fix**: Replaced with a `<section>` and added `aria-label="Hero search section"` for better semantic structure and accessibility.'

4. **Image Accessibility**
    - **Issue**: The background image lacked `alt` text and accessibility handling..
    - **Fix**: Added `alt=""` with `role="presentation"` to explicitly mark it as decorative.

5. **Improved Visual Styling**
    - **Issue**: Layout had limited spacing and inconsistent typography.
    - **Fix**: Applied responsive padding `(px-4 md:px-28) `and refined typography `(tracking-[-2px], font-black, text-3xl md:text-5xl)` for better readability and design polish.

6. **Overlay and Contrast**
    - **Issue**: The dark overlay in `BoxArea97` `(bg-black/50)` could reduce text contrast or visual clarity.
    - **Fix**: Removed the overlay

7. **Responsive Text Styling**
    - **Issue**:  The heading in `BoxArea97` is bold but not particularly customized.
    - **Fix**: `HeroSection` uses `tracking-[-2px]`, `font-black`, and responsive `text-3xl md:text-5xl` for visually impactful typography and figma alignment.


### [TagList] component 
1. **Added TypeScript typings**
    - **Issue**: Props were untyped, risking runtime errors and less developer support
    - **Fix**: Added `TagListProps` type in `@types/index.ts` and used `Readonly<TagListProps>` for prop definitions

2. **Improved semantic HTML structure**
    - **Issue**: Used generic `<div>` instead of semantic elements, reducing accessibility
    - **Fix**: Wrapped the list in a `<section>` with `aria-labelledby` and used a `<ul>` for the tags list

3. **Enhanced accessibility features**
    - **Issue**: Missing ARIA attributes and proper headings for screen readers
    - **Fix**: Added visually hidden `<h2>` with corresponding `id` referenced by `aria-labelledby`

4. **Updated styling and roles for tags with improved `Badge` component**
    - **Issue**: Previous badge styling was inconsistent and didn't align with the figma and lacked accessibility roles
    - **Fix**: Improved `Badge` styles for better color contrast and hover effects, added `role="list-items"` for accessibility compliance



### Responsiveness

1. `useMobile` is used in `Header` component to hide the search bar
