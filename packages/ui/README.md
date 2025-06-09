# @qnkur/segmented

A React component for creating stunning, retro-style segmented displays. This package provides a flexible `<SegmentedDisplay>` component that leverages the [DSEG font family](https://github.com/keshikan/DSEG) by Keshikan.

**[Docs & Live Demo](https://qnkur.github.io/segmented/)**

## Features

- **Flexible Styling:** Easily customize with Tailwind CSS or standard CSS classes.
- **Multiple Font Styles:** Supports all 48 font variations from the DSEG font family.
- **7 & 14 Segments:** Includes both 7-segment and 14-segment font styles.
- **Realistic Effect:** Renders "unlit" segments in the background for a more authentic display appearance.
- **TypeScript Support:** Fully typed for a superior developer experience.

## Prerequisites

This component is designed to be styled with utility classes. For the best experience, your project should be set up with Tailwind CSS.

## Installation

To get started, install the component and its peer dependencies using your preferred package manager:

```bash
# pnpm
pnpm install @qnkur/segmented dseg

# npm
npm install @qnkur/segmented dseg

# yarn
yarn add @qnkur/segmented dseg

# bun
bun install @qnkur/segmented dseg
```

## Usage

### 1. Configure Tailwind CSS

You need to add the path to the `@qnkur/segmented` package in your `tailwind.config.js` file. This allows Tailwind to discover the component's classes and include them in your final stylesheet.

```js
// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    // Add the path to the component library
    "./node_modules/@qnkur/segmented/dist/**/*.js",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

### 2. Import CSS and Component

In your root layout or main application file (e.g., `layout.tsx` or `App.tsx`), import the `dseg` font styles. Then, import the component where you want to use it.

```tsx
import { SegmentedDisplay } from "@qnkur/segmented"
import "dseg/css/dseg.css"

function MyComponent() {
  return <SegmentedDisplay>Hello World</SegmentedDisplay>
}
```

### 3. Advanced Usage

Combine props to create a more customized display. You can control the font family, weight, style, and more.

```tsx
<SegmentedDisplay
  fontFamily="DSEG7Classic"
  fontWeight="bold"
  fontStyle="italic"
  unlitSegmentOpacity={10}
  className="text-2xl text-red-500"
>
  -45.6°C
</SegmentedDisplay>
```

## Component Props

The `<SegmentedDisplay>` component accepts the following props:

| Prop                  | Type                            | Default               | Description                                                                      |
| :-------------------- | :------------------------------ | :-------------------- | :------------------------------------------------------------------------------- |
| `children`            | `React.ReactNode`               | **Required**          | The content to display inside the component.                                     |
| `fontFamily`          | `FontName`                      | `'DSEG14ClassicMini'` | The DSEG [font family](https://www.google.com/search?q=dseg+font+family) to use. |
| `fontStyle`           | `'normal' \| 'italic'`          | `'normal'`            | The font style.                                                                  |
| `fontWeight`          | `'light' \| 'normal' \| 'bold'` | `'normal'`            | The font weight.                                                                 |
| `className`           | `string`                        | `undefined`           | Additional CSS classes for custom styling.                                       |
| `unlitSegmentOpacity` | `number`                        | `15`                  | The opacity of the unlit background segments (from 0 to 100).                    |

## Acknowledgements

- The DSEG fonts are created by **keshikan** and are licensed under the SIL Open Font License, Version 1.1.

## License

This package is licensed under the MIT License.
