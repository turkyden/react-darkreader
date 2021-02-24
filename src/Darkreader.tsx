import React from 'react';
import useDarkreader, {
  DarkreaderTheme,
  DarkreaderFixes,
} from './useDarkreader';
import Switch from './Switch';

export interface DarkreaderProps {
  defaultDarken?: boolean;
  theme?: DarkreaderTheme;
  fixes?: DarkreaderFixes;
  onChange?: (checked: boolean) => void;
}

export default function Darkreader({
  defaultDarken = false,
  theme,
  fixes,
  onChange,
}: DarkreaderProps) {
  const [isDark, { toggle }] = useDarkreader(defaultDarken, theme, fixes);

  return (
    <Switch
      checked={isDark}
      onChange={checked => {
        toggle();
        onChange?.(checked);
      }}
    />
  );
}
