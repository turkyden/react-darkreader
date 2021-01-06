import { useState, useRef, useEffect } from 'react';
import { useUnmount } from 'ahooks';
import {
  enable as enableDarkMode,
  disable as disableDarkMode,
  auto as followSystemColorScheme,
  exportGeneratedCSS as collectCSS,
  setFetchMethod,
} from 'darkreader';
import { getTargetElement, BasicTarget } from './dom';

export type Options = {
  brightness?: number,
  contrast?: number,
  sepia?: number,
  target?: BasicTarget
};

const defaultOptions = {
  brightness: 100,
  contrast: 90,
  sepia: 10,
  target: document.body
};

export default function useDarkreader(
  defaultDarken: boolean = false,
  {
    brightness,
    contrast,
    sepia,
  }: Options = defaultOptions,
): [boolean, () => void] {
  const [isDark, setIsDark] = useState(defaultDarken);

  useEffect(() => {

    setFetchMethod(window.fetch);

    isDark
      ? enableDarkMode({
          brightness,
          contrast,
          sepia,
        })
      : disableDarkMode();

    // followSystemColorScheme();

    // const CSS = await collectCSS();

    // console.log(CSS);
  }, [isDark]);

  useUnmount(() => {
    disableDarkMode();
  })

  const toggle = () => setIsDark(isDark => !isDark);

  // const action = {
  //   toggle: () => setIsDark(isDark => !isDark),
  //   collectCSS: async () => await collectCSS()
  // }

  return [isDark, () => setIsDark(prevState => !prevState)];
}
