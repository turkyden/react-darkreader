# Getting Started

🌓 A React hook for adding a dark / night mode to your site inspired by [darkreader](https://github.com/darkreader/darkreader)

[![npm](https://img.shields.io/npm/v/react-darkreader?color=orange)](https://www.npmjs.com/package/react-image-dangling) ![npm](https://img.shields.io/npm/dt/react-darkreader) [![dumi](https://img.shields.io/badge/docs%20by-dumi-blue)](https://github.com/umijs/dumi) ![License](https://img.shields.io/github/license/Turkyden/react-darkreader) [![jsdelivr](https://data.jsdelivr.com/v1/package/npm/react-darkreader/badge)](https://www.jsdelivr.com/package/npm/react-darkreader)

Live Demo ✨ [https://react-darkreader.vercel.app](https://react-darkreader.vercel.app)

![darkreader](https://darkreader.org/images/darkreader-icon-256x256.png)

## 📦 Install

```bash
yarn add react-darkreader
```

Or you can:

```bash
npm install react-darkreader
```

## 🚀 Usage

You can import the darkmode as a react component.

```tsx | pure
import React from 'react';
import Darkreader from 'react-darkreader';

export default () => <Darkreader />;
```

You can also create darkmode by the react hook `useDarkreader`

```tsx | pure
import React from 'react';
import { Switch, useDarkreader } from 'react-darkreader';

export default () => {
  const [isDark, toggle] = useDarkreader(false);

  return <Switch isDark={isDark} onToggle={toggle} />;
};
```

## 📔 API

### Component

```tsx | pure
<Darkreader
  defaultDarken
  options={
    brightness: 100,
    contrast: 90,
    sepia: 10,
    target: document.body
  }
/>
```

### Hook

```typescript | pure
const [isDark, toggle, collectCSS] = useDarkreader(defaultDarken: boolean, options?: Options);
```

with a toggle button as ui.

```tsx | pure
<Switch isDark={isDark} onToggle={toggle} />
```

### Result

| Params     | Description                                             | Type                          |
| ---------- | ------------------------------------------------------- | ----------------------------- |
| isDark     | The status of current darkmode, support `true`, `false` | `boolean`                     |
| toggle     | The function for toggling the darkmode.                 | `() => void`                  |
| collectCSS | The async function for collecting the css of darkmode.  | `async () => Promise<string>` |

### Params

| Params        | Description                          | Type      | Default |
| ------------- | ------------------------------------ | --------- | ------- |
| defaultDarken | The default status of the darkreader | `boolean` | false   |

### Options

| Params     | Description                                                       | Type                                                         | Default |
| ---------- | ----------------------------------------------------------------- | ------------------------------------------------------------ | ------- |
| brightness | The brightness properties of darkmode                             | `number`                                                     | 100     |
| contrast   | The contrast properties of darkmode                               | `number`                                                     | 90      |
| sepia      | The sepia properties of darkmode                                  | `number`                                                     | 10      |
| target     | The container (DOM or Refs) which will be injected darkmode theme | `HTMLElement` \| `(() => HTMLElement)` \| `MutableRefObject` | -       |

## 🔢 Coming Soon

- [ ] followSystemColorScheme
- [ ] localstorge
- [ ] playground for editing the config online

## 🔨 Contribute

Install dependencies,

```bash
$ npm i
```

Start the dev server,

```bash
$ npm start
```

Build documentation,

```bash
$ npm run docs:build
```

Build library via `father-build`,

```bash
$ npm run build
```

## License

[MIT](https://github.com/Turkyden/react-darkreader/blob/main/LICENSE)
