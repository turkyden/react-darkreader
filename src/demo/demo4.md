## Switch

Defaultly, you can define your toggler ui with `<Switch>`.

```tsx
/**
 * defaultShowCode: true
 */
import React from 'react';
import { Switch, useDarkreader } from 'react-darkreader';

export default () => {
  const [isDark, toggle] = useDarkreader(false);

  return <Switch isDark={isDark} onToggle={toggle} />;
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
  const [isDark, toggle] = useDarkreader(false);

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

More skills for writing demo: https://d.umijs.org/guide/demo-principle
