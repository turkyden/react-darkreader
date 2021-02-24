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

export type DarkreaderTheme = Partial<Theme>;

export type DarkreaderFix = DynamicThemeFix;

export default function useDarkreader(
  defaultDarken: boolean = false,
  theme: DarkreaderTheme,
  fixes?: DarkreaderFix,
): Result {
  const [isDark, setIsDark] = useState(defaultDarken);

  const defaultFixes = {
    invert: [],
    css: '',
    ignoreInlineStyle: ['.react-switch-handle'],
    ignoreImageAnalysis: [],
  };

  useEffect(() => {
    setFetchMethod(window.fetch);

    isDark
      ? enableDarkMode(theme, { ...defaultFixes, ...fixes })
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
