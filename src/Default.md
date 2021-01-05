## Default

You can define your darkmode with any thing.

```tsx
import React, { useEffect, useState } from 'react';
import { useDarkreader } from 'react-darkreader';

export default () => {
  const [isDark, toggle] = useDarkreader(document.querySelector('body'), {});

  return (
    <button type="button" onClick={toggle}>
      Switch Theme {isDark ? '🌜' : '🌞'}
    </button>
  );
};
```

More skills for writing demo: https://d.umijs.org/guide/demo-principle
