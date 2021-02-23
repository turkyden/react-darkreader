import React, { useState } from 'react';
import '@testing-library/jest-dom';
import { render, fireEvent, screen } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks/dom/pure';
import Switch from '../Switch';

test('shows status when the switch is checked', () => {
  const { result } = renderHook(() => useState(false));

  const [isDark, setIsDark] = result.current;

  const toggle = () => setIsDark(preState => !preState);

  render(<Switch checked={isDark} onChange={toggle} />);

  expect(result.current[0]).toBe(false);

  fireEvent.click(screen.getByText('🌜'));

  expect(result.current[0]).toBe(true);

  fireEvent.click(screen.getByText('🌞'));
  fireEvent.click(screen.getByText('🌜'));

  expect(result.current[0]).toBe(true);
});
