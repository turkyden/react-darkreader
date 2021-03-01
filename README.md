<p align="center">
  <img align="center" alt="react-darkreader" src="https://darkreader.org/images/darkreader-icon-256x256.png" />
</p>
<h1 align="center">React Darkreader</h1>

<p align="center">🌓 A React Hook for adding a dark / night mode to your site inspired by <a href="https://github.com/darkreader/darkreader" target="_blank">darkreader</a>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/react-darkreader" target="_blank"><img alt="npm" src="https://img.shields.io/npm/v/react-darkreader?color=orange" /></a> <img alt="npm" src="https://img.shields.io/npm/dt/react-darkreader" /> <a href="https://github.com/umijs/dumi" target="_blank"><img alt="dumi" src="https://img.shields.io/badge/docs%20by-dumi-blue" /></a> <img alt="license" src="https://img.shields.io/github/license/Turkyden/react-darkreader" /> <a href="https://www.jsdelivr.com/package/npm/react-darkreader" target="_blank"><img alt="jsdelivr" src="https://data.jsdelivr.com/v1/package/npm/react-darkreader/badge" /></a>
</p>

<p align="center">Live Demo ✨ <a href="https://react-darkreader.vercel.app" target="_blank">https://react-darkreader.vercel.app</a></p>

## Getting Started

Install with yarn

```bash
yarn add react-darkreader
```

Or you can

```bash
npm install react-darkreader
```

Or inject the script at your page by [jsdelivr CDN](https://www.jsdelivr.com/)

```html
<script src="https://cdn.jsdelivr.net/npm/react-darkreader@latest/dist/index.min.js"></script>
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
  const [isDark, { toggle }] = useDarkreader(false);

  return <Switch checked={isDark} onChange={toggle} />;
};
```

## 📔 API

### Component

```tsx | pure
<Darkreader
  defaultDarken
  theme={/** Theme options **/}
  fixes={/** Contains fixes for the generated theme **/}
  onChange={isDark => {
    /** Callback for change **/
  }}
/>
```

### Hook

```typescript | pure
const [isDark, { toggle, collectCSS }] = useDarkreader(defaultDarken, theme?, fixes?)
```

with a toggle button as ui.

```tsx | pure
<Switch checked={isDark} onChange={toggle} />
```

### Result

| Params     | Description                                             | Type                          |
| ---------- | ------------------------------------------------------- | ----------------------------- |
| isDark     | The status of current darkmode, support `true`, `false` | `boolean`                     |
| toggle     | The function for toggling the darkmode.                 | `() => void`                  |
| collectCSS | The async function for collecting the css of darkmode.  | `async () => Promise<string>` |

### Params

| Params        | Description                                                                                                                                                                   | Type              | Default |
| ------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------- | ------- |
| defaultDarken | The default status of the darkreader                                                                                                                                          | `boolean`         | false   |
| theme         | The options of darkreader Theme [refered to index.d.ts &rarr;](https://github.com/darkreader/darkreader/blob/13c93a995cde0b933580174106897bb1d13f53b4/index.d.ts#L41)         | `Partial<Theme>`  | -       |
| fixes         | Contains fixes for the generated theme [refered to index.d.ts &rarr;](https://github.com/darkreader/darkreader/blob/13c93a995cde0b933580174106897bb1d13f53b4/index.d.ts#L121) | `DynamicThemeFix` | -       |

## 🔢 Coming Soon

- [x] add the material design styling in switch
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

## 🥇 Who is using

| [Ant Design Pro Components Light](https://procomponents.ant.design/) | [Ant Design Pro Components Dark](https://procomponents.ant.design/) |
| :------------------------------------------------------------------: | :-----------------------------------------------------------------: |
|    ![Procomponents Light](./screenshot/pro-components_light.png)     |     ![Procomponents Dark](./screenshot/pro-components_dark.png)     |

## ❤️ Contributors

Thanks goes to these people (emoji key):

<table style="width: auto">
  <tr>
    <td align="center">
      <a href="https://github.com/Turkyden">
        <img src="https://avatars0.githubusercontent.com/u/24560160?s=460&u=36a6072b8220e6ad7c0c7f7dbf97cc3dd796a8d0&v=4" width="100px;" alt=""/><br />
        <sub><b>Turkyden</b></sub></a><br />
        💻📖🚇⚠️
    </td>
    <td align="center">
      <a href="https://github.com/chenshuai2144">
        <img src="https://avatars.githubusercontent.com/u/8186664?s=460&u=a583e7221b1be534d587185223cab48fe47cb74d&v=4" width="100px;" alt=""/><br />
        <sub><b>chenshuai2144</b></sub></a><br />
        💻🚇⚠️
    </td>
    <td align="center">
      <a href="https://github.com/KnowsCount">
        <img src="https://avatars3.githubusercontent.com/u/56480008?s=460&u=19d370371e9be3b09766a4dae4435de3593fd0a9&v=4" width="100px;" alt=""/><br />
        <sub><b>KnowsCount</b></sub></a><br />
        📖
    </td>
  </tr>
</table>

## License

[MIT](https://github.com/Turkyden/react-darkreader/blob/main/LICENSE)
