import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'rc-darkreader',
  favicon: 'https://turkyden.com/img/logo.svg',
  logo: 'https://turkyden.com/img/logo.svg',
  hash: true,
  outputPath: 'docs-dist',
  base: `/react-darkreader/`,
  // publicPath:
  //   process.env.NODE_ENV === 'production'
  //     ? 'https://cdn.jsdelivr.net/gh/turkyden/react-darkreader@gh-pages/'
  //     : '/',
  // more config: https://d.umijs.org/config
});
