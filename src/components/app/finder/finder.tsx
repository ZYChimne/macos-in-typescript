import {
  faItunesNote,
  faAppStoreIos,
} from '@fortawesome/free-brands-svg-icons';
import {
  faArrowCircleDown,
  faBroadcastTower,
  faClock,
  faCloud,
  faDesktop,
  faFile,
  faFolder,
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import {
  faFileAlt,
  faFileAudio,
  faFileImage,
  faFileVideo,
} from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { AppBarButton } from '../../../utils/utlils';
import { FinderProps, FinderIconProps, FinderData } from './finder.d';
import styles from './finder.module.scss';
export const Finder = (props: FinderProps) => {
  const [finderData, setFinderData] = useState<any>(FinderData);
  const [prevChildren, setPrevChildren] = useState<any>(null);
  const [nextChildren, setNextChildren] = useState<any>(null);
  const [prevPath, setPrevPath] = useState('Macintosh HD');
  const [nextPath, setNextPath] = useState('');
  const [path, setPath] = useState('Macintosh HD');
  const setFinderContent = (finderData: any, path: string) => {
    setFinderData(finderData);
    setPath(path);
  };
  return (
    <div className={styles.finder} data-show={props.show}>
      <div className={styles.appBar}>
        <div className={styles.appBarBtnContainer}>
          <AppBarButton setClose={() => props.setApp('Finder')} />
        </div>
        <div className={styles.finderSubtitle}>Favorites</div>
        <div className={styles.appBarLine}>
          <div className={styles.appBarIconBox}>
            <FontAwesomeIcon
              className={styles.appBarIcon}
              icon={faBroadcastTower}
            />
          </div>
          <div className={styles.appBarTitle}>AirDrop</div>
        </div>
        <div className={styles.appBarLine}>
          <div className={styles.appBarIconBox}>
            <FontAwesomeIcon className={styles.appBarIcon} icon={faClock} />
          </div>
          <div className={styles.appBarTitle}>Recents</div>
        </div>
        <div className={styles.appBarLine}>
          <div className={styles.appBarIconBox}>
            <FontAwesomeIcon
              className={styles.appBarIcon}
              icon={faAppStoreIos}
            />
          </div>
          <div className={styles.appBarTitle}>Applications</div>
        </div>
        <div className={styles.appBarLine}>
          <div className={styles.appBarIconBox}>
            <FontAwesomeIcon className={styles.appBarIcon} icon={faDesktop} />
          </div>
          <div className={styles.appBarTitle}>Desktop</div>
        </div>
        <div className={styles.appBarLine}>
          <div className={styles.appBarIconBox}>
            <FontAwesomeIcon className={styles.appBarIcon} icon={faFile} />
          </div>
          <div className={styles.appBarTitle}>Documents</div>
        </div>
        <div className={styles.appBarLine}>
          <div className={styles.appBarIconBox}>
            <FontAwesomeIcon
              className={styles.appBarIcon}
              icon={faArrowCircleDown}
            />
          </div>
          <div className={styles.appBarTitle}>Downloads</div>
        </div>
        <div className={styles.appBarLine}>
          <div className={styles.appBarIconBox}>
            <FontAwesomeIcon className={styles.appBarIcon} icon={faCloud} />
          </div>
          <div className={styles.appBarTitle}>iCloud Drive</div>
        </div>
        <div className={styles.finderSubtitle}>Tags</div>
        <div className={styles.appBarLine}>
          <div
            className={styles.appBarCircle}
            style={{ background: `rgb(239, 43, 32)` }}
          />
          <div className={styles.appBarTitle}>Red</div>
        </div>
        <div className={styles.appBarLine}>
          <div
            className={styles.appBarCircle}
            style={{ background: `rgb(234, 128, 0)` }}
          />
          <div className={styles.appBarTitle}>Orange</div>
        </div>
        <div className={styles.appBarLine}>
          <div
            className={styles.appBarCircle}
            style={{ background: `rgb(234, 183, 0)` }}
          />
          <div className={styles.appBarTitle}>Yellow</div>
        </div>
        <div className={styles.appBarLine}>
          <div
            className={styles.appBarCircle}
            style={{ background: `rgb(19, 185, 44)` }}
          />
          <div className={styles.appBarTitle}>Green</div>
        </div>
        <div className={styles.appBarLine}>
          <div
            className={styles.appBarCircle}
            style={{ background: `rgb(2, 114, 247)` }}
          />
          <div className={styles.appBarTitle}>Blue</div>
        </div>
        <div className={styles.appBarLine}>
          <div
            className={styles.appBarCircle}
            style={{ background: `rgb(159, 75, 201)` }}
          />
          <div className={styles.appBarTitle}>Purple</div>
        </div>
        <div className={styles.appBarLine}>
          <div
            className={styles.appBarCircle}
            style={{ background: `rgb(112, 112, 117)` }}
          />
          <div className={styles.appBarTitle}>Grey</div>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.finderBar}>
          <div className={styles.finderBarIconBox}>
            <FontAwesomeIcon
              className={styles.finderBarIcon}
              icon={faChevronLeft}
            />
          </div>
          <div className={styles.finderBarIconBox}>
            <FontAwesomeIcon
              className={styles.finderBarIcon}
              icon={faChevronRight}
            />
          </div>
          <div className={styles.finderBarText}>{path}</div>
        </div>
        <div className={styles.finderContent}>
          {finderData.map((item: FinderIconProps, index: React.Key) => {
            return (
              <FinderIcon
                name={item.name}
                type={item.type}
                children={item.children}
                setFinderContent={setFinderContent}
                key={index}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
const FinderIcon = (props: FinderIconProps) => {
  let Icon;
  switch (props.type) {
    case 'FOLDER':
      Icon = (
        <FontAwesomeIcon
          className={styles.finderIcon}
          style={{ color: `rgb(138, 207, 247)` }}
          icon={faFolder}
        />
      );
      break;
    case 'DOC':
      Icon = (
        <FontAwesomeIcon
          className={styles.finderIcon}
          style={{ color: `rgb(92, 93, 93)` }}
          icon={faFileAlt}
        />
      );
      break;
    case 'MUSIC':
      Icon = (
        <FontAwesomeIcon
          className={styles.finderIcon}
          style={{ color: `rgb(92, 93, 93)` }}
          icon={faFileAudio}
        />
      );
      break;
    case 'PIC':
      Icon = (
        <FontAwesomeIcon
          className={styles.finderIcon}
          style={{ color: `rgb(92, 93, 93)` }}
          icon={faFileImage}
        />
      );
      break;
    case 'VIDEO':
      Icon = (
        <FontAwesomeIcon
          className={styles.finderIcon}
          style={{ color: `rgb(92, 93, 93)` }}
          icon={faFileVideo}
        />
      );
      break;
  }
  return (
    <div
      className={styles.finderIconContainer}
      onClick={() => props.setFinderContent(props.children, props.name)}
    >
      <div className={styles.finderIconBox}>{Icon}</div>
      <div className={styles.finderIconText}>{props.name}</div>
    </div>
  );
};
