## Switch

You can define your darkmode with any thing.

```tsx
import React from 'react';
import { Switch, useDarkreader } from 'react-darkreader';

export default () => {
  const [isDark, toggle] = useDarkreader(false);

  return (
    <Switch isDark={isDark} onClick={toggle} />
  );
};
```

More skills for writing demo: https://d.umijs.org/guide/demo-principle
