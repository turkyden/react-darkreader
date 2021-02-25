import React from 'react';
import ReactSwitch, { ReactSwitchProps } from 'react-switch';
import './Switch.css';
export interface SwitchProps extends ReactSwitchProps {
  styling?: 'docusaurus' | 'material' | 'github' | 'fluent';
}

export default function Switch(SwitchProps: SwitchProps) {
  if (SwitchProps.styling === 'docusaurus') {
    return <DocusaurusSwitch {...SwitchProps} />;
  } else if (SwitchProps.styling === 'material') {
    return <MaterialSwitch {...SwitchProps} />;
  } else if (SwitchProps.styling === 'github') {
    return <GithubSwitch {...SwitchProps} />;
  } else if (SwitchProps.styling === 'fluent') {
    return <FluentSwitch {...SwitchProps} />;
  } else {
    return <DocusaurusSwitch {...SwitchProps} />;
  }
}

function DocusaurusSwitch(reactSwitchProps: ReactSwitchProps) {
  return (
    <ReactSwitch
      className="react-switch react-switch-docusaurus"
      handleDiameter={20}
      onColor="#4d4d4d"
      offColor="#4d4d4d"
      onHandleColor="#ffffff"
      offHandleColor="#ffffff"
      boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
      activeBoxShadow="0 0 2px 3px #2c89a0"
      width={50}
      height={24}
      uncheckedIcon={<span className="react-switch-icon">🌞</span>}
      checkedIcon={<span className="react-switch-icon">🌜</span>}
      {...reactSwitchProps}
    />
  );
}

function MaterialSwitch(reactSwitchProps: ReactSwitchProps) {
  return (
    <ReactSwitch
      className="react-switch react-switch-material"
      onColor="#ee80a7"
      onHandleColor="#dc004e"
      handleDiameter={18}
      uncheckedIcon={false}
      checkedIcon={false}
      boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
      activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
      height={12}
      width={34}
      {...reactSwitchProps}
    />
  );
}

function GithubSwitch(reactSwitchProps: ReactSwitchProps) {
  const svg_month = (
    <span className="react-switch-icon">
      <svg
        fill="#ffdf5d"
        aria-hidden="true"
        width="14"
        height="13"
        viewBox="0 0 14 13"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4.52208 7.71754C7.5782 7.71754 10.0557 5.24006 10.0557 2.18394C10.0557 1.93498 10.0392 1.68986 10.0074 1.44961C9.95801 1.07727 10.3495 0.771159 10.6474 0.99992C12.1153 2.12716 13.0615 3.89999 13.0615 5.89383C13.0615 9.29958 10.3006 12.0605 6.89485 12.0605C3.95334 12.0605 1.49286 10.001 0.876728 7.24527C0.794841 6.87902 1.23668 6.65289 1.55321 6.85451C2.41106 7.40095 3.4296 7.71754 4.52208 7.71754Z"
        ></path>
      </svg>
    </span>
  );
  return (
    <ReactSwitch
      className={`react-switch react-switch-github react-switch-github__${
        reactSwitchProps?.checked ? 'dark' : 'light'
      }`}
      onColor="#271052"
      offColor="#ffffff"
      onHandleColor="#6e40c9"
      offHandleColor="#2f363d"
      handleDiameter={28}
      uncheckedIcon={false}
      checkedIcon={false}
      uncheckedHandleIcon={svg_month}
      checkedHandleIcon={svg_month}
      boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
      activeBoxShadow="0px 0px 1px 4px rgba(0, 0, 0, 0.2)"
      height={24}
      width={42}
      {...reactSwitchProps}
    />
  );
}

function FluentSwitch(reactSwitchProps: ReactSwitchProps) {
  return (
    <ReactSwitch
      className={`react-switch react-switch-fluent react-switch-fluent__${
        reactSwitchProps?.checked ? 'dark' : 'light'
      }`}
      handleDiameter={12}
      onColor="#0078d4"
      offColor="#ffffff"
      onHandleColor="#ffffff"
      offHandleColor="#605e5c"
      activeBoxShadow="0 0 2px 3px #2c89a0"
      width={40}
      height={20}
      uncheckedIcon={false}
      checkedIcon={false}
      {...reactSwitchProps}
    />
  );
}
