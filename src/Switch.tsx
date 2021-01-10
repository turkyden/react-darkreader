import React from 'react';
import Toggle from 'react-toggle';
import './Switch.css';

export interface Switch {
  isDark: boolean;
  onToggle: () => void;
}

export default function Switch({
  isDark = false,
  onToggle = () => {},
}: Switch) {
  return (
    <Toggle
      checked={isDark}
      icons={{
        checked: (
          <span className="react-toggle-icon react-toggle-icon-night">🌜</span>
        ),
        unchecked: (
          <span className="react-toggle-icon react-toggle-icon-day">🌞</span>
        ),
      }}
      onChange={onToggle}
    />
  );
}
