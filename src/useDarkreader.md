## useDarkreader

You can define your darkmode with any thing.

```tsx
import React, { useEffect, useState } from 'react';
import { useDarkreader } from 'react-darkreader';

export default () => {
  const [isDark, toggle, collectCSS] = useDarkreader(false);

  const logCSS = async () => {
    const CSS = await collectCSS();
    console.log(CSS);
  };

  return (
    <>
      <button type="button" onClick={toggle}>
        Switch Theme {isDark ? '🌜' : '🌞'}
      </button>
      <br />
      <br />
      <button type="button" onClick={logCSS}>
        CollectCSS
      </button>
    </>
  );
};
```

More skills for writing demo: https://d.umijs.org/guide/demo-principle
