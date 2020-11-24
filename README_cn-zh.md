# React Darkmode

## Install

```yarn
yarn add react-darkmode
```

## 🚀 Usage

React Component

```tsx
import Darkmode, { useDarkmode } from 'react-darkmode';

function App() {
  const [ dark, setDark ] = useDarkmode(false);
  return (
    <div>
      <Darkmode
        dark={dark}
        disabled={false}
        className="rc-darkmode"
        size='small'
        onChange={(dark, event) => setDark(dark)}
        onClick={(dark, event) => console.log('Clicked Me!')}
        darkChildren={(<span>🌜</span>)}
        lightChildren={<span>🌞</span>}
      />
    </div>
  )
}
```

React Hooks

```tsx
import { useDarkmode } from 'react-darkmode';

function App() {
  const [ dark, setDark ] = useDarkmode(false);

  return (
    <div>
      <Button onClick={() => setDark(!dark)}>
        {dark ? '🌜' : '🌞'}
      </Button>
    </div>
  )
}
```
