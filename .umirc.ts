import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'rc-darkreader',
  logo: '/logo.svg',
  favicon: '/logo.svg',
  hash: true,
  outputPath: 'docs-dist',
  base: `/react-darkreader/`,
  publicPath:
    process.env.NODE_ENV === 'production' ? '/react-darkreader/' : '/',
  // publicPath:
  //   process.env.NODE_ENV === 'production'
  //     ? 'https://cdn.jsdelivr.net/gh/turkyden/react-darkreader@gh-pages/'
  //     : '/',
  // more config: https://d.umijs.org/config
  theme: {
    '@c-primary': '#8B5CF6',
  },
  headScripts: [
    `window.onload = () => {
      document.querySelector('.__dumi-default-menu-logo').innerHTML = '<div class="circles"><div></div><div></div><div></div><span></span></div>'
    }`,
  ],
  styles: [
    `/** Logo Style **/
    .__dumi-default-menu-header .__dumi-default-menu-logo{
      background: none !important;
    }
    .circles {
      width: 64px;
      height: 64px;
      position: relative;
      perspective: 50000px;
      color: #8B5CF6;
    }
    .circles span {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      display: block;
      width: 18.4%;
      height: 18.4%;
      border-radius: 100%;
      background: currentColor;
    }
    .circles div {
      position: absolute;
      width: 100%;
      height: 100%;
      border-left: 0.4vmin solid;
      border-top: 0.4vmin solid transparent;
      border-radius: 100%;
    }
    .circles div:nth-child(1) {
      -webkit-animation: anim-1 1s linear infinite;
              animation: anim-1 1s linear infinite;
    }
    .circles div:nth-child(2) {
      -webkit-animation: anim-2 1s linear infinite;
              animation: anim-2 1s linear infinite;
    }
    .circles div:nth-child(3) {
      -webkit-animation: anim-3 1s linear infinite;
              animation: anim-3 1s linear infinite;
    }

    @-webkit-keyframes anim-1 {
      from {
        transform: rotateZ(120deg) rotateX(66deg) rotateZ(0deg);
      }
      to {
        transform: rotateZ(120deg) rotateX(66deg) rotateZ(360deg);
      }
    }

    @keyframes anim-1 {
      from {
        transform: rotateZ(120deg) rotateX(66deg) rotateZ(0deg);
      }
      to {
        transform: rotateZ(120deg) rotateX(66deg) rotateZ(360deg);
      }
    }
    @-webkit-keyframes anim-2 {
      from {
        transform: rotateZ(240deg) rotateX(66deg) rotateZ(0deg);
      }
      to {
        transform: rotateZ(240deg) rotateX(66deg) rotateZ(360deg);
      }
    }
    @keyframes anim-2 {
      from {
        transform: rotateZ(240deg) rotateX(66deg) rotateZ(0deg);
      }
      to {
        transform: rotateZ(240deg) rotateX(66deg) rotateZ(360deg);
      }
    }
    @-webkit-keyframes anim-3 {
      from {
        transform: rotateZ(360deg) rotateX(66deg) rotateZ(0deg);
      }
      to {
        transform: rotateZ(360deg) rotateX(66deg) rotateZ(360deg);
      }
    }
    @keyframes anim-3 {
      from {
        transform: rotateZ(360deg) rotateX(66deg) rotateZ(0deg);
      }
      to {
        transform: rotateZ(360deg) rotateX(66deg) rotateZ(360deg);
      }
    }
    `,
  ],
});
