import React, { useMemo, useReducer, useState } from 'react';
import { Icon } from '../../utils/utlils';
import {
  IconLineContainerProps,
  IconPageContainerProps,
  LaunchpadApps,
  LaunchpadProps,
} from './launchpad.d';
import styles from './launchpad.module.scss';
export const Launchpad = (props: LaunchpadProps) => {
  const [page, setPage] = useState(0);
  const switchOnWheel = (event: React.WheelEvent) => {
    if (event.deltaY < 0 && page > 0) {
      setPage(page - 1);
    } else if (event.deltaY > 0 && page < 1) {
      setPage(page + 1);
    }
  };
  const switchOnPointerMove = (event: React.PointerEvent) => {
    if (event.movementX > 0 && page > 0) {
      setPage(page - 1);
    } else if (event.movementX < 0 && page < 1) {
      setPage(page + 1);
    }
  };
  const IconPageContainer = (props: IconPageContainerProps) => {
    return (
      <div className={styles.iconPageContainer} data-index={props.index}>
        <div className={styles.iconContainer}>
          <IconLineContainer start={props.start} setApp={props.setApp} />
          <IconLineContainer start={props.start + 7} setApp={props.setApp} />
          <IconLineContainer start={props.start + 14} setApp={props.setApp} />
          <IconLineContainer start={props.start + 21} setApp={props.setApp} />
          <IconLineContainer start={props.start + 28} setApp={props.setApp} />
        </div>
      </div>
    );
  };
  const IconLineContainer = (props: IconLineContainerProps) => {
    return (
      <div className={styles.iconLineContainer}>
        {LaunchpadApps.slice(props.start, props.start + 7).map((item, i) => {
          return (
            <Icon
              type="Launchpad"
              value={item}
              key={i}
              dispatch={props.setApp}
            />
          );
        })}
      </div>
    );
  };
  return (
    <div
      className={styles.launchpad}
      data-show={props.show}
      onWheel={(event) => switchOnWheel(event)}
      onPointerMove={(event) => switchOnPointerMove(event)}
    >
      <div className={styles.searchbarContainer}>
        <input className={styles.searchbar} type="text" placeholder="Search" />
      </div>
      <div className={styles.iconContainerTrack} data-page={page}>
        <IconPageContainer setApp={props.setApp} index={0} start={0} />
        <IconPageContainer setApp={props.setApp} index={1} start={35} />
      </div>
      <div className={styles.dotContainer}>
        <div
          className={styles.dot}
          data-active={page === 0 ? true : false}
          onClick={() => setPage(0)}
        />
        <div
          className={styles.dot}
          data-active={page === 1 ? true : false}
          onClick={() => setPage(1)}
        />
      </div>
    </div>
  );
};
