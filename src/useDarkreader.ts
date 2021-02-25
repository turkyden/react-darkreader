import { useState, useEffect, useMemo } from 'react';
import {
  enable as enableDarkMode,
  disable as disableDarkMode,
  auto as followSystemColorScheme,
  exportGeneratedCSS as collectCSS,
  setFetchMethod,
  Theme,
  DynamicThemeFix,
} from 'darkreader';
import { Result } from 'antd';

export type Action = {
  toggle: () => void;
  collectCSS: () => Promise<string>;
};

export type Result = [boolean, Action];

export default function useDarkreader(
  defaultDarken: boolean = false,
  theme?: Partial<Theme>,
  fixes?: DynamicThemeFix,
): Result {
  const [isDark, setIsDark] = useState(defaultDarken);

  const defaultTheme = {
    brightness: 100,
    contrast: 90,
    sepia: 10,
  };

  const defaultFixes = {
    invert: [],
    css: '',
    ignoreInlineStyle: ['.react-switch-handle'],
    ignoreImageAnalysis: [],
  };

  useEffect(() => {
    setFetchMethod(window.fetch);

    isDark
      ? enableDarkMode(
          { ...defaultTheme, ...theme },
          { ...defaultFixes, ...fixes },
        )
      : disableDarkMode();

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
