## useDarkreader

You can define your darkmode with any thing.

```tsx
import React from 'react';
import { useDarkreader } from 'react-darkreader';

export default () => {
  const [isDark, toggle] = useDarkreader(false);

  return (
    <button type="button" onClick={toggle}>
      {isDark ? '🌜' : '🌞'}
    </button>
  );
};
```

And you can export the CSS of darkmode with `collectCSS` action.

```tsx
import React, { useState } from 'react';
import { useDarkreader } from 'react-darkreader';

export default () => {
  const [isDark, toggle, collectCSS] = useDarkreader(false);

  const [CSS, setCSS] = useState('');

  const logCSS = async () => {
    const CSS = await collectCSS();
    setCSS(CSS);
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
      <br />
      <br />
      <textarea rows="10" cols="80" value={CSS} />
    </>
  );
};
```
