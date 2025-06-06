# @qnkur/segmented

A React component for creating stunning, retro-style segmented displays. This package provides a flexible `<SegmentedDisplay>` component built with Tailwind CSS that leverages the [DSEG font family](https://github.com/keshikan/DSEG) by Keshikan.

**[Live Demo](https://your-deployment-url.com)** _(replace with your docs app deployment URL)_

## Features

- **Built with Tailwind CSS:** Easily customizable using Tailwind utility classes.
- **Multiple Font Styles:** Supports all 48 font variations from the DSEG font family.
- **7 & 14 Segments:** Includes both 7-segment and 14-segment font styles.
- **Unlit Segments:** Renders "unlit" segments for a more realistic display effect.
- **TypeScript Support:** Fully typed for a better developer experience.

## Prerequisites

This component is built using Tailwind CSS. For the styles to be applied correctly, your project must also be set up with Tailwind CSS.

## Installation

Install the package and its peer dependencies from npm:

```bash
npm install @qnkur/segmented dseg
```

or using pnpm:

```bash
pnpm add @qnkur/segmented dseg
```

## Usage

1.  **Configure Tailwind CSS**

    You need to add the path to the `@qnkur/segmented` package in your `tailwind.config.js` file. This allows Tailwind to scan the component for CSS classes and include them in your final stylesheet.

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

2.  **Import CSS and Component**

    In your main application file (e.g., `layout.tsx` or `App.tsx`), import the `dseg` font styles.

    ```tsx
    import "dseg/css/dseg.css"
    import { SegmentedDisplay, type FontName } from "@qnkur/segmented"

    function MyComponent() {
      return (
        <SegmentedDisplay
          fontFamily="DSEG7Classic"
          fontWeight="bold"
          className="text-red-500" // Style with Tailwind classes!
        >
          12:34:56
        </SegmentedDisplay>
      )
    }
    ```

## Component Props

The `<SegmentedDisplay>` component accepts the following props:

| Prop                  | Type                                       | Default               | Description                                                                                                                                                            |
| :-------------------- | :----------------------------------------- | :-------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `children`            | `React.ReactNode`                          | **Required**          | The content to display.                                                                                                                                                |
| `fontFamily`          | `FontName`                                 | `'DSEG14ClassicMini'` | The font family to use. See available [FontName types](https://www.google.com/search?q=https://github.com/your-username/segmented/blob/main/packages/ui/src/fonts.ts). |
| `fontStyle`           | `'normal' \| 'italic'`                     | `'normal'`            | The font style.                                                                                                                                                        |
| `fontWeight`          | `'light' \| 'normal' \| 'bold'`            | `'normal'`            | The font weight.                                                                                                                                                       |
| `className`           | `string`                                   | `undefined`           | Additional Tailwind or CSS classes to apply to the component for custom styling (e.g., text color, size).                                                              |
| `unlitSegmentOpacity` | `number`                                   | `15`                  | The opacity of the unlit segments, from 0 to 100.                                                                                                                      |
| `unlitSegmentCount`   | `number`                                   | `undefined`           | The number of characters for the unlit background. Defaults to the length of the children.                                                                             |
| `variant`             | `'light' \| 'dark' \| 'colored' \| string` | `'light'`             | The color variant of the display (to be implemented).                                                                                                                  |

## Acknowledgements

- The DSEG fonts are created by **keshikan**.

## License

This package is licensed under the MIT License.

The DSEG fonts are licensed under the **SIL Open Font License, Version 1.1**.
