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

You can define your darkmode with any thing.

```tsx | pure
import React from 'react';
import Darkreader from 'react-darkreader';

export default () => {
  return (
    <Darkreader defaultDarken />
  );
};
```

You can define your darkmode with any thing.

```tsx | pure
import React from 'react';
import { Switch, useDarkreader } from 'react-darkreader';

export default () => {
  const [isDark, toggle] = useDarkreader(false);

  return (
    <Switch isDark={isDark} onClick={toggle} />
  );
};
```

or you can created by the React Hook `useIcon`

```tsx | pure
import React, { useEffect, useState } from 'react';
import { useDarkreader } from 'react-darkreader';

export default () => {
  const [isDark, toggle] = useDarkreader(false);

  return (
    <button type="button" onClick={toggle}>
      Switch Theme {isDark ? '🌜' : '🌞'}
    </button>
  );
};
```

## 📔 API

```typescript | pure
const [isDark, toggle] = useDarkreader(defaultDarken: boolean, options?: Options);
```

### Result

| Params    | Description         | Type                                                 |
|---------|--------------|------------------------------------------------------|
| isDark  | The status of current darkmode, support `unset`, `loading`, `ready`, `error` | `string` |
| toggle  | The function for toggling the external resources | `() => void`  |

### Params

| Params     | Description                                  | Type     | Default |
|------------|----------------------------------------------|----------|---------|
| defaultDarken       | The url of the external resources           | `string` | -       |

### Options

| Params     | Description                                  | Type     | Default |
|------------|----------------------------------------------|----------|---------|
| brightness | The brightness properties of darkmode | `boolean` | true       |
| contrast | The contrast properties of darkmode, support `all`/`screen`/`print`/`handheld` | `string` | all       |
| sepia | The sepia properties of darkmode | `HTMLElement` \| `(() => HTMLElement)` \| `MutableRefObject` | -      |
| target | The DOM or Refs of container which need to load the `<img>` | `HTMLElement` \| `(() => HTMLElement)` \| `MutableRefObject` | -      |

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
