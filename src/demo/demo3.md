## useDarkreader

You can define your darkmode with any thing.

```tsx
/**
 * defaultShowCode: true
 */
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
