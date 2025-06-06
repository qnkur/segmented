# Segmented Display - React Component Monorepo

This is the official monorepo for the development of the `@qnkur/segmented` React component library and its documentation.

This project is built with [Turborepo](https://turbo.build/repo) and [pnpm](https://pnpm.io) to provide an efficient and pleasant development experience.

## The `@qnkur/segmented` Package

The primary product of this repository is the `@qnkur/segmented` component, which is published to npm.

- **For Users:** If you are looking to **use** the component library in your own project, please refer to the **[package `README.md` file](https://www.google.com/search?q=/packages/ui/README.md)** for installation and usage instructions.
- **For Contributors:** If you wish to contribute to the library, you can find the source code in the `packages/ui` directory.

## The `docs` Application

This monorepo also includes a `docs` application, which is a Next.js project that serves two purposes:

1.  **A live showcase** of the component's features and capabilities.
2.  **A development environment** for testing the component in a real-world application.

You can view the live showcase here: **[Live Demo](https://your-deployment-url.com)** _(replace with your deployment URL)_

## Getting Started with Development

The following instructions are for setting up the development environment for this monorepo.

### Prerequisites

- [Node.js](https://nodejs.org/) (version 18 or higher recommended)
- [pnpm](https://pnpm.io/installation)

### Setup

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/segmented.git
    cd segmented
    ```

2.  **Install dependencies from the root:**

    ```bash
    pnpm install
    ```

3.  **Run the development server:**

    ```bash
    pnpm dev
    ```

    This will start the `docs` application on `http://localhost:3001`.

## Available Scripts

The following scripts can be run from the root of the monorepo:

- `pnpm build`: Build all packages and apps, optimized by Turborepo.
- `pnpm dev`: Start the development servers for all apps.
- `pnpm lint`: Lint all code in the monorepo.
- `pnpm format`: Format all files with Prettier.
- `pnpm check-types`: Run TypeScript to check for type errors across all packages.

## Acknowledgements

- The DSEG fonts are created by **keshikan**. You can find more information on their [GitHub repository](https://github.com/keshikan/DSEG).

## License

This project is licensed under the MIT License.

The DSEG fonts are licensed under the **SIL Open Font License, Version 1.1**.
