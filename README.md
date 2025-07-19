# Learn React

A modern React learning application built with TypeScript, Vite, and Tailwind CSS. This project serves as a comprehensive guide to React concepts, CSS patterns, and performance optimizations.

## Features

- 🚀 React Performance Optimization Examples
  - React.memo usage
  - useCallback implementation
  - useMemo examples
- 🎨 CSS Pattern Examples
  - Responsive Design
  - Grid & Flexbox layouts
  - Positions & Display properties
  - Transitions & Animations
  - Loading Skeletons

- ⚡ Performance Examples
  - Debouncing & Throttling with HOCs
  - Custom React Hooks

## Tech Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS
- ESLint & Prettier
- Husky for Git hooks

## Getting Started

1. Clone the repository

```bash
git clone <repository-url>
cd learn-react
```

2. Install dependencies

```bash
npm install
```

3. Start the development server

```bash
npm run dev
```

4. Build for production

```bash
npm run build
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run format` - Run Prettier formatting
- `npm run type-check` - Run TypeScript type checking

## Project Structure

```
src/
  ├── components/
  │   ├── layout/       # Layout components
  │   └── ui/           # Reusable UI components
  ├── pages/
  │   ├── css-patterns/ # CSS example pages
  │   └── performance/  # Performance example pages
  └── main.tsx         # Application entry point
```

---

# Development Setup Commands

This section documents all the commands used to set up this project from scratch.

## Initial Project Setup

1. Create Vite project with React and TypeScript

```bash
npm create vite@latest learn-react -- --template react-ts
cd learn-react
npm install
```

2. Install and configure Tailwind CSS

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

Add to tailwind.config.js:

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

Add to src/index.css:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## Adding ESLint and Prettier

1. Install ESLint and related packages

```bash
npm install --save-dev eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-plugin-react eslint-plugin-react-hooks prettier eslint-config-prettier eslint-plugin-prettier
```

2. Create ESLint configuration (.eslintrc.json)

```bash
{
  "env": {
    "browser": true,
    "es2021": true,
    "node": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:prettier/recommended"
  ],
  "parser": "@typescript-eslint/parser",
  "plugins": ["react", "@typescript-eslint", "prettier"],
  "rules": {
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "react-hooks/exhaustive-deps": "warn",
    "prettier/prettier": "error"
  }
}
```

3. Create Prettier configuration (.prettierrc)

```json
{
  "semi": true,
  "tabWidth": 2,
  "printWidth": 100,
  "singleQuote": true,
  "trailingComma": "es5",
  "bracketSpacing": true,
  "jsxBracketSameLine": false
}
```

## Setting up Git Hooks with Husky

1. Install Husky and lint-staged

```bash
npm install --save-dev husky lint-staged
```

2. Initialize Husky

```bash
npx husky-init && npm install
```

3. Create lint-staged configuration (.lintstagedrc)

```json
{
  "*.{js,jsx,ts,tsx}": ["eslint --fix", "prettier --write"],
  "*.{json,md,yml,yaml}": ["prettier --write"]
}
```

4. Update package.json scripts

```json
{
  "scripts": {
    "lint": "eslint \"src/**/*.{ts,tsx}\" --fix",
    "format": "prettier --write \"**/*.{ts,tsx,js,jsx,json,md}\"",
    "type-check": "tsc --noEmit",
    "prepare": "husky install",
    "precommit": "lint-staged",
    "prepush": "npm run type-check"
  }
}
```

## Running the Project

1. Development server

```bash
npm run dev
```

2. Lint and format code

```bash
npm run lint
npm run format
```

3. Type checking

```bash
npm run type-check
```

## Common Issues and Solutions

1. If ESLint configuration conflicts occur:

```bash
rm eslint.config.js  # Remove new-style config if it exists
```

2. If Husky hooks need to be made executable:

```bash
chmod +x .husky/pre-commit
chmod +x .husky/pre-push
```

3. If you need to skip Husky hooks temporarily:

```bash
git commit -m "message" --no-verify
```

# Testing

This project uses Jest and React Testing Library for unit testing. Here's how to run the tests:

```bash
# Run all tests
npm test

# Run tests in watch mode (for development)
npm run test:watch

# Run tests with coverage report
npm run test:coverage
```

## Test File Structure

Tests are co-located with their components and follow the naming pattern `*.test.tsx`. For example:

```
src/
  components/
    Button/
      Button.tsx
      Button.test.tsx
  pages/
    FormValidation/
      FormValidation.tsx
      FormValidation.test.tsx
```

## Testing Best Practices

1. **Component Testing**
   - Test rendering
   - Test user interactions
   - Test different states (loading, error, success)
   - Test prop variations

2. **Form Testing**
   - Test validation rules
   - Test error messages
   - Test submission behavior
   - Test loading states

3. **Async Testing**
   - Use `async/await` with user events
   - Use `waitFor` for async operations
   - Test loading and success states

4. **Test Organization**
   - Group related tests with `describe`
   - Use clear test descriptions
   - Keep tests focused and isolated

## Example Test

```typescript
import { render, screen } from '@testing-library/react';
import Button from './Button';

describe('Button Component', () => {
  test('renders with text', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  test('handles click events', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);

    fireEvent.click(screen.getByText('Click me'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
```

## Setting Up Tests

1. Install dependencies:

```bash
npm install --save-dev jest @types/jest @testing-library/react @testing-library/jest-dom @testing-library/user-event jest-environment-jsdom ts-jest identity-obj-proxy
```

2. Create Jest config (jest.config.ts):

```typescript
export default {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
};
```

3. Add test scripts to package.json:

```json
{
  "scripts": {
    "test": "jest",
    "test:watch": "jest --watch",
    "test:coverage": "jest --coverage"
  }
}
```
