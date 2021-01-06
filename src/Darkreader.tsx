import React from 'react';
import './Switch.css';
import useDarkreader, { Options } from './useDarkreader';
import Switch from './Switch';

export default function Darkreader (defaultDarken: boolean, options: Options) {

  const [isDark, toggle] = useDarkreader(defaultDarken, options);

  return (
    <Switch isDark={isDark} onClick={toggle} />
  )
}
