import React from 'react';
import useDarkreader, { Options } from './useDarkreader';
import Switch from './Switch';

export interface DarkreaderProps {
  defaultDarken?: boolean;
  options?: Options;
}

export default function Darkreader({
  defaultDarken = false,
  options,
}: DarkreaderProps) {
  const [isDark, toggle] = useDarkreader(defaultDarken, options);

  return <Switch isDark={isDark} onToggle={toggle} />;
}
