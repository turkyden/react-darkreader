import React from 'react';
import './Switch.css';

interface Switch {
  isDark: boolean,
  size?: string,
  border?: string,
  onClick: () => void
}

export default function Switch ({
  isDark = false,
  onClick
}: Switch) {
  const className = isDark ? 'slide toggle' : 'slide';

  return (
    <div className={className} onClick={onClick}></div>
  )
}
