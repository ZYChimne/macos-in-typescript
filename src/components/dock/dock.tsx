import React from 'react';
import { activeAppMapper, Icon } from '../../utils/utlils';
import { DockApps, DockProps } from './dock.d';
import styles from './dock.module.scss';
export const Dock = (props: DockProps) => {
  return (
    <div className={styles.dock}>
      <Icon
        type="Dock"
        value="finder"
        dispatch={props.setApp}
        active={props.appState.finder !== 0}
      />
      <Icon
        type="Dock"
        value="launchpad"
        dispatch={props.setApp}
        active={false}
      />
      {DockApps.map((item, i) => {
        return (
          <Icon
            type="Dock"
            value={item}
            key={i}
            dispatch={props.setApp}
            active={activeAppMapper(props.appState, item) !== 0}
          />
        );
      })}
    </div>
  );
};
