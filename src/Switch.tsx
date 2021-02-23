import React from 'react';
import ReactSwitch, { ReactSwitchProps } from 'react-switch';
import './Switch.css';
export interface SwitchProps extends ReactSwitchProps {
  styling?: 'docusaurus' | 'material';
}

export default function Switch(SwitchProps: SwitchProps) {
  if (SwitchProps.styling === 'docusaurus') {
    return <DocusaurusSwitch {...SwitchProps} />;
  } else if (SwitchProps.styling === 'material') {
    return <MaterialDesignSwitch {...SwitchProps} />;
  } else {
    return <DocusaurusSwitch {...SwitchProps} />;
  }
}

function DocusaurusSwitch(reactSwitchProps: ReactSwitchProps) {
  return (
    <ReactSwitch
      className="react-switch"
      id="docusaurus-switch"
      handleDiameter={20}
      onColor="#4d4d4d"
      offColor="#4d4d4d"
      onHandleColor="#ffffff !important"
      width={50}
      height={24}
      uncheckedIcon={
        <span className="react-switch-icon react-switch-icon-day">🌞</span>
      }
      checkedIcon={
        <span className="react-switch-icon react-switch-icon-night">🌜</span>
      }
      {...reactSwitchProps}
    />
  );
}

function MaterialDesignSwitch(reactSwitchProps: ReactSwitchProps) {
  return (
    <ReactSwitch
      className="react-switch"
      id="material-switch"
      onColor="#2c89a0"
      onHandleColor="#2c89a0"
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
