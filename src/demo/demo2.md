## defaultDarken

You can set the defaultDarken properties to control status at first time.

```tsx
/**
 * defaultShowCode: true
 */
import React from 'react';
import Darkreader from 'react-darkreader';

export default () => {
  return <Darkreader defaultDarken />;
};
```

The darkmode is destroyed with the React Component when `unmount`.
