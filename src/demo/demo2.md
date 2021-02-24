## defaultDarken

You can set the defaultDarken properties to control status at first time.

```tsx
/**
 * defaultShowCode: true
 */
import React, { useState } from 'react';
import Darkreader from 'react-darkreader';

export default () => {
  const [message, setMessage] = useState('Current theme mode is what');

  return (
    <>
      <Darkreader
        defaultDarken
        theme={{
          brightness: 100,
          contrast: 90,
          sepia: 10,
        }}
        onChange={isDark =>
          setMessage(`Current theme mode is ${isDark ? '🌜' : '🌞'}`)
        }
      />
      <br />
      <br />
      <p>{message}</p>
    </>
  );
};
```

The darkmode is destroyed with the React Component when `unmount`.
