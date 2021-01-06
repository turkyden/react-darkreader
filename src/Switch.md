## Switch

You can define your darkmode with any thing.

```tsx
import React from 'react';
import { Switch, useDarkreader } from 'react-darkreader';

export default () => {
  const [isDark, toggle] = useDarkreader(false);

  return <Switch isDark={isDark} onClick={toggle} />;
};
```

Or you can use the switch trigger with [Ant Design](https://ant.design/components/switch-cn/)

```tsx
import React from 'react';
import { useDarkreader } from 'react-darkreader';
import { Switch } from 'antd';
import 'antd/es/switch/style/index.css';

export default () => {
  const [isDark, toggle] = useDarkreader(false);

  return (
    <>
      <Switch checked={isDark} onChange={toggle} />
      <br />
      <br />
      <Switch
        checkedChildren="🌞"
        unCheckedChildren="🌜"
        checked={isDark}
        onChange={toggle}
      />
    </>
  );
};
```

More skills for writing demo: https://d.umijs.org/guide/demo-principle
