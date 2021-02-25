## Switch

Defaultly, you can define your toggler ui with `<Switch>`.

```tsx
/**
 * defaultShowCode: true
 */
import React from 'react';
import { Switch, useDarkreader } from 'react-darkreader';

export default () => {
  const [isDark, { toggle }] = useDarkreader(false);

  return <Switch checked={isDark} onChange={toggle} />;
};
```

You can also define your toggler ui style with `styling` in props.

```tsx
/**
 * defaultShowCode: true
 */
import React from 'react';
import { Switch, useDarkreader } from 'react-darkreader';

export default () => {
  const [isDark, { toggle }] = useDarkreader(false);

  return (
    <>
      <Switch checked={isDark} onChange={toggle} styling="docusaurus" />
      <p>Facebook Docusaurus</p>
      <Switch checked={isDark} onChange={toggle} styling="fluent" />
      <p>Microsoft Fluent UI</p>
      <Switch checked={isDark} onChange={toggle} styling="material" />
      <p>Google Material Design</p>
      <Switch checked={isDark} onChange={toggle} styling="github" />
      <p>Github</p>
      <p>...</p>
    </>
  );
};
```

All styling of Switch

```ts | pure
interface SwitchProps extends ReactSwitchProps {
  styling?: 'docusaurus' | 'material' | 'fluent' | 'github';
}
```

### API

Please Refer to the 📦 [markusenglund/react-switch](https://github.com/markusenglund/react-switch).

| Prop                                  | Type              | Default                                                                                  | Description                                                                                                                                                                                                               |
| ------------------------------------- | ----------------- | ---------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| checked                               | bool              | **Required**                                                                             | If true, the switch is set to checked. If false, it is not checked.                                                                                                                                                       |
| onChange _([checked], [event], [id])_ | func              | **Required**                                                                             | Invoked when the user clicks or drags the switch. It is passed three arguments: _checked_, which is a boolean that describes the presumed future state of the checked prop (1), the event object (2) and the id prop (3). |
| disabled                              | bool              | false                                                                                    | When disabled, the switch will no longer be interactive and its colors will be greyed out.                                                                                                                                |
| offColor                              | string            | '#888'                                                                                   | The switch will take on this color when it is _not_ checked. Only accepts hex-colors.                                                                                                                                     |
| onColor                               | string            | '#080'                                                                                   | The switch will take on this color when it is checked. Only accepts hex-colors.                                                                                                                                           |
| offHandleColor                        | string            | '#fff'                                                                                   | The handle of the switch will take on this color when it is _not_ checked. Only accepts hex-colors.                                                                                                                       |
| onHandleColor                         | string            | '#fff'                                                                                   | The handle of the switch will take on this color when it is checked. Only accepts hex-colors.                                                                                                                             |
| handleDiameter                        | number            | _undefined_                                                                              | The diameter of the handle, measured in pixels. By default it will be 2 pixels smaller than the height of the switch.                                                                                                     |
| uncheckedIcon                         | element _or_ bool | [Default value](https://github.com/markusenglund/react-switch/blob/master/src/icons.jsx) | An icon that will be shown on the switch when it is **not** checked. Pass in _false_ if you don't want any icon.                                                                                                          |
| checkedIcon                           | element _or_ bool | [Default value](https://github.com/markusenglund/react-switch/blob/master/src/icons.jsx) | An icon that will be shown on the switch when it is checked. Pass in _false_ if you don't want any icon.                                                                                                                  |
| uncheckedHandleIcon                   | element           | _undefined_                                                                              | An icon that will be shown on **the handle** of the switch when it is **not** checked.                                                                                                                                    |
| checkedHandleIcon                     | element           | _undefined_                                                                              | An icon that will be shown on **the handle** of the switch when it is checked.                                                                                                                                            |
| boxShadow                             | string            | _undefined_                                                                              | The default box-shadow of the handle. You can read up on the box-shadow syntax [on MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow?v=b).                                                                 |
| activeBoxShadow                       | string            | '0 0 2px 3px #3bf'                                                                       | The box-shadow of the handle when it is active or focused. Do not set this to null, since it is important for accessibility.                                                                                              |
| height                                | number            | 28                                                                                       | The height of the background of the switch, measured in pixels.                                                                                                                                                           |
| width                                 | number            | 56                                                                                       | The width of the background of the switch, measured in pixels.                                                                                                                                                            |
| className                             | string            | _undefined_                                                                              | Set as the className of the outer shell of the switch. Useful for positioning the switch.                                                                                                                                 |
| borderRadius                          | number            | _undefined_                                                                              | Border radius of the switch _and_ the handle.                                                                                                                                                                             |
| id                                    | string            | _undefined_                                                                              | Set as an attribute to the embedded checkbox. This is useful for the associated label, which can point to the id in its htmlFor attribute.                                                                                |
