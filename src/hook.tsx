import { useState, useRef, useEffect } from 'react';

import { getTargetElement, BasicTarget } from './dom';

import {
  enable as enableDarkMode,
  disable as disableDarkMode,
  auto as followSystemColorScheme,
  exportGeneratedCSS as collectCSS,
} from 'darkreader';

export type Options = {
  mixColor?: string;
  backgroundColor?: string;
};

const defaultOptions = {
  mixColor: '#fff',
  backgroundColor: '#fff',
};

export default function useDarkreader(
  target: BasicTarget,
  { mixColor, backgroundColor }: Options = defaultOptions,
): [boolean, () => void] {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    isDark
      ? enableDarkMode({
          brightness: 100,
          contrast: 90,
          sepia: 10,
        })
      : disableDarkMode();

    // followSystemColorScheme();

    // const CSS = await collectCSS();

    // console.log(CSS);
  }, [isDark]);

  const toggle = () => setIsDark(isDark => !isDark);

  return [isDark, () => setIsDark(prevState => !prevState)];
}
