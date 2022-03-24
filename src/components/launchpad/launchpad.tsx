import React, { useState } from 'react';
import { AppList } from '../../utils/AppList';
import { AppStateAction } from '../../utils/utils.d';
import { Icon } from '../../utils/utlils';
import { LaunchpadApps } from './launchpad.d';
import styles from './launchpad.module.scss';
const Launchpad = ({
  show,
  setApp,
  page,
  setPage,
}: {
  show: boolean;
  setApp: React.Dispatch<AppStateAction>;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const [launchpadApps, setLaunchpadApps] = useState(LaunchpadApps);
  const pageMax = Math.floor(launchpadApps.length / 35);
  const onInput = (event: React.FormEvent<HTMLInputElement>) => {
    const temp = event.currentTarget.value;
    if (temp.length > 0)
      setLaunchpadApps(
        LaunchpadApps.filter((x) =>
          AppList[x].name.toLowerCase().includes(temp)
        )
      );
    else setLaunchpadApps(LaunchpadApps);
  };
  const switchOnWheel = (event: React.WheelEvent) => {
    if (event.deltaY < 0 && page > 0) {
      setPage(page - 1);
    } else if (event.deltaY > 0 && page < pageMax) {
      setPage(page + 1);
    }
  };
  const switchOnPointerMove = (event: React.PointerEvent) => {
    if (event.pointerType === 'touch') {
      if (event.movementX > 0 && page > 0) {
        setPage(page - 1);
      } else if (event.movementX < 0 && page < pageMax) {
        setPage(page + 1);
      }
    }
  };
  const IconPageContainer = ({
    start,
    index,
    setApp,
  }: {
    start: number;
    index: number;
    setApp: React.Dispatch<AppStateAction>;
  }) => {
    return (
      <div className={styles.iconPageContainer} data-index={index}>
        <div className={styles.iconContainer}>
          <IconLineContainer start={start} setApp={setApp} />
          <IconLineContainer start={start + 7} setApp={setApp} />
          <IconLineContainer start={start + 14} setApp={setApp} />
          <IconLineContainer start={start + 21} setApp={setApp} />
          <IconLineContainer start={start + 28} setApp={setApp} />
        </div>
      </div>
    );
  };
  const IconLineContainer = ({
    start,
    setApp,
  }: {
    start: number;
    setApp: React.Dispatch<AppStateAction>;
  }) => {
    return (
      <div className={styles.iconLineContainer}>
        {launchpadApps.slice(start, start + 7).map((item, i) => {
          return (
            <Icon
              type="Launchpad"
              value={item}
              key={i}
              dispatch={setApp}
              active={false}
            />
          );
        })}
      </div>
    );
  };
  return (
    <div
      className={styles.launchpad}
      data-show={show}
      onWheel={(event) => switchOnWheel(event)}
      onPointerMove={(event) => switchOnPointerMove(event)}
    >
      <div className={styles.searchbarContainer}>
        <input
          className={styles.searchbar}
          type="text"
          placeholder="Search"
          onInput={onInput}
        />
      </div>
      <div className={styles.iconContainerTrack} data-page={page}>
        <IconPageContainer setApp={setApp} index={0} start={0} />
        {launchpadApps.length > 35 ? (
          <IconPageContainer setApp={setApp} index={1} start={35} />
        ) : null}
      </div>
      <div className={styles.dotContainer}>
        {launchpadApps.length > 0 ? (
          <div
            className={styles.dot}
            data-active={page === 0 ? true : false}
            onClick={() => setPage(0)}
          />
        ) : null}
        {launchpadApps.length > 35 ? (
          <div
            className={styles.dot}
            data-active={page === 1 ? true : false}
            onClick={() => setPage(1)}
          />
        ) : null}
      </div>
    </div>
  );
};
export default Launchpad;
