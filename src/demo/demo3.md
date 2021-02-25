## useDarkreader

You can define your darkmode with any thing.

```tsx
/**
 * defaultShowCode: true
 */
import React from 'react';
import { useDarkreader } from 'react-darkreader';

export default () => {
  const [isDark, { toggle }] = useDarkreader(false);

  return (
    <button type="button" onClick={toggle}>
      {isDark ? '🌜' : '🌞'}
    </button>
  );
};
```

Or you can import the switch trigger from [Ant Design](https://ant.design/components/switch-cn/)

```tsx
/**
 * defaultShowCode: true
 */
import React from 'react';
import { useDarkreader } from 'react-darkreader';
import { Switch } from 'antd';

export default () => {
  const [isDark, { toggle }] = useDarkreader(false);

  return (
    <>
      <Switch checked={isDark} onChange={toggle} />
      <br />
      <br />
      <Switch checked={isDark} onChange={toggle} size="small" />
    </>
  );
};
```
