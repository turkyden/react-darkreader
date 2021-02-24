import React from 'react';
import useDarkreader, { Options } from './useDarkreader';
import Switch from './Switch';

export interface DarkreaderProps {
  defaultDarken?: boolean;
  options?: Options;
  onChange?: (checked: boolean) => void;
}

export default function Darkreader({
  defaultDarken = false,
  options,
  onChange,
}: DarkreaderProps) {
  const [isDark, { toggle }] = useDarkreader(defaultDarken, options);

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
