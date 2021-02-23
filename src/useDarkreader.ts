import { useState, useEffect, useMemo } from 'react';
import {
  enable as enableDarkMode,
  disable as disableDarkMode,
  auto as followSystemColorScheme,
  exportGeneratedCSS as collectCSS,
  setFetchMethod,
} from 'darkreader';
import { Result } from 'antd';

export type Options = {
  brightness?: number;
  contrast?: number;
  sepia?: number;
};

export type Action = {
  toggle: () => void;
  collectCSS: () => Promise<string>;
};

export type Result = [boolean, Action];

const defaultOptions = {
  brightness: 100,
  contrast: 90,
  sepia: 10,
};

export default function useDarkreader(
  defaultDarken: boolean = false,
  options: Options = defaultOptions,
): Result {
  const [isDark, setIsDark] = useState(defaultDarken);

  useEffect(() => {
    setFetchMethod(window.fetch);

    isDark ? enableDarkMode(options) : disableDarkMode();

    // unmount
    return () => {
      disableDarkMode();
    };

    // TODO: followSystemColorScheme();
  }, [isDark]);

  const action = useMemo(() => {
    const toggle = () => setIsDark(prevState => !prevState);

    return { toggle, collectCSS };
  }, [isDark]);

  return [isDark, action];
}
