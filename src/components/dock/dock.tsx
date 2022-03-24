import React from 'react';
import { AppState, AppStateAction } from '../../utils/utils.d';
import { activeAppMapper, Icon } from '../../utils/utlils';
import { DockApps } from './dock.d';
import styles from './dock.module.scss';
const Dock = ({
  appState,
  setApp,
}: {
  appState: AppState;
  setApp: React.Dispatch<AppStateAction>;
}) => {
  return (
    <div className={styles.dock}>
      <Icon
        type="Dock"
        value="finder"
        dispatch={setApp}
        active={appState.finder !== 0}
      />
      <Icon type="Dock" value="launchpad" dispatch={setApp} active={false} />
      {DockApps.map((item, i) => {
        return (
          <Icon
            type="Dock"
            value={item}
            key={i}
            dispatch={setApp}
            active={activeAppMapper(appState, item) !== 0}
          />
        );
      })}
    </div>
  );
};
export default Dock;
