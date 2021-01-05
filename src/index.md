
## Default

You can define your darkmode with any thing.

```css | pure
.Card {
  padding: 2rem;
  border: 1px solid gainsboro;
}

.Card > h1 {
  color: blueviolet;
}
```

You can ignore the darkmode with className `.darkmode-ignore`.

```tsx
import React from 'react';
import { useDarkmode } from 'react-darkmode';

export default () => {
  const ref = React.useRef(null);

  const [isDark, toggle] = useDarkmode(document.querySelector("body"));

  //const [isDark, toggle] = useDarkmode(ref, {});

  return (
    <>
      <br />
      <b className="darkmode-ignore">{isDark ? "🌜" : "🌞"}</b>
      <h2>@ahooks/useDarkmode </h2>
      <p>A react hook for adding a dark or night mode in any way</p>
      <button
        type="button"
        className="darkmode-ignore"
        onClick={() => toggle()}
      >
        Switch Theme
      </button>
      <br />
      <br />
      <div className="Card" ref={ref}>
        <h1>Lorem Ipsum</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          tincidunt vehicula mi, sed cursus dui pharetra quis. Nam molestie
          porttitor velit et mattis. Sed tempor lobortis urna id dignissim. Sed
          erat massa, rutrum non nibh at, mollis vehicula mauris. Sed semper
          interdum est, eu aliquam arcu semper eu. Sed viverra sapien et leo
          vehicula scelerisque. Maecenas rutrum sit amet nisl ac commodo. Sed ac
          efficitur lorem, eget tincidunt urna. Morbi vel fermentum leo, eget
          blandit nunc. Curabitur ultrices facilisis elit vel hendrerit. Aenean
          tristique aliquet velit quis venenatis. Sed vitae quam pulvinar,
          commodo mi eu, varius ante. Quisque vel magna justo. Integer tempus
          sapien quis consectetur interdum. Quisque vel nulla rhoncus, hendrerit
          massa nec, tincidunt risus. Etiam auctor ante et rhoncus maximus.
        </p>
        <img src="https://picsum.photos/200/100" alt="random" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          tincidunt vehicula mi, sed cursus dui pharetra quis. Nam molestie
          porttitor velit et mattis. Sed tempor lobortis urna id dignissim. Sed
          erat massa, rutrum non nibh at, mollis vehicula mauris. Sed semper
          interdum est, eu aliquam arcu semper eu. Sed viverra sapien et leo
          vehicula scelerisque. Maecenas rutrum sit amet nisl ac commodo. Sed ac
          efficitur lorem, eget tincidunt urna. Morbi vel fermentum leo, eget
          blandit nunc. Curabitur ultrices facilisis elit vel hendrerit. Aenean
          tristique aliquet velit quis venenatis. Sed vitae quam pulvinar,
          commodo mi eu, varius ante. Quisque vel magna justo. Integer tempus
          sapien quis consectetur interdum. Quisque vel nulla rhoncus, hendrerit
          massa nec, tincidunt risus. Etiam auctor ante et rhoncus maximus.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          tincidunt vehicula mi, sed cursus dui pharetra quis. Nam molestie
          porttitor velit et mattis. Sed tempor lobortis urna id dignissim. Sed
          erat massa, rutrum non nibh at, mollis vehicula mauris. Sed semper
          interdum est, eu aliquam arcu semper eu. Sed viverra sapien et leo
          vehicula scelerisque. Maecenas rutrum sit amet nisl ac commodo. Sed ac
          efficitur lorem, eget tincidunt urna. Morbi vel fermentum leo, eget
          blandit nunc. Curabitur ultrices facilisis elit vel hendrerit. Aenean
          tristique aliquet velit quis venenatis. Sed vitae quam pulvinar,
          commodo mi eu, varius ante. Quisque vel magna justo. Integer tempus
          sapien quis consectetur interdum. Quisque vel nulla rhoncus, hendrerit
          massa nec, tincidunt risus. Etiam auctor ante et rhoncus maximus.
        </p>
      </div>
    </>
  );
}
```

More skills for writing demo: https://d.umijs.org/guide/demo-principle
