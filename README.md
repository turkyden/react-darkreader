# Getting Started

[![npm](https://img.shields.io/npm/v/react-darkreader?color=orange)](https://www.npmjs.com/package/react-image-dangling)&nbsp;
[![dumi](https://img.shields.io/badge/docs%20by-dumi-blue)](https://github.com/umijs/dumi)&nbsp;
[![jsdelivr](https://data.jsdelivr.com/v1/package/npm/react-darkreader/badge)](https://www.jsdelivr.com/package/npm/react-darkreader)&nbsp;
![License](https://img.shields.io/npm/l/react-darkreader?style=flat-square&color=red)&nbsp;

An darkreader cpmponent deved with react. Inspire by the [darkreader](https://github.com/darkreader/darkreader)

## 📦 Install

```bash
yarn add react-darkreader
```

or you can:

```bash
npm install react-darkreader
```

## 🚀 Usage

```jsx | pure
import React from 'react';
import Switch, { useDarkreader } from 'react-darkreader';

export default () => {
  const [isDark, toggle] = useDarkreader(ref);

  return (
    <>
      <Switch isDark={isDark} onChange={toggle} />
      <div ref={ref}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tincidunt
        vehicula mi, sed cursus dui pharetra quis.
      </div>
    </>
  );
};
```

or you can created by the React Hook `useIcon`

```jsx | pure
import React from 'react';
import { useDarkreader } from 'react-darkreader';

export default () => {
  const [isDark, toggle] = useDarkreader(ref);

  return (
    <>
      <button onClick={toggle}>{isDark ? "🌜" : "🌞"}<button>
      <div ref={ref}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tincidunt vehicula mi, sed cursus dui pharetra quis.
      </div>
    </>
  )
}
```

## 📔 API

| Params   | Description                                                                                    | Type                                                         | Default |
| -------- | :--------------------------------------------------------------------------------------------- | :----------------------------------------------------------- | :------ |
| type     | The media properties of extarnal resources `<link>`, support `all`/`screen`/`print`/`handheld` | `string`                                                     | all     |
| src      | The async properties of extarnal resources `<script>`                                          | `string`                                                     | 'ai'    |
| size     | The DOM or Refs of container which need to load the `<img>`                                    | `HTMLElement` \| `(() => HTMLElement)` \| `MutableRefObject` | -       |
| interval | The DOM or Refs of container which need to load the `<img>`                                    | `HTMLElement` \| `(() => HTMLElement)` \| `MutableRefObject` | -       |
| frame    | The DOM or Refs of container which need to load the `<img>`                                    | `HTMLElement` \| `(() => HTMLElement)` \| `MutableRefObject` | 20      |

### 🔢 Coming Soon

- autoPlay

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

MIT
