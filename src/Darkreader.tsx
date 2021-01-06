import React from 'react';
import './Switch.css';
import useDarkreader from './useDarkreader';
import Switch from './Switch';

export default function Darkreader () {

  const [isDark, toggle] = useDarkreader(false, {});

  return (
    <Switch isDark={isDark} onClick={toggle} />
  )
}
