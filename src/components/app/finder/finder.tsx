import { faAppStore, faAppStoreIos } from '@fortawesome/free-brands-svg-icons';
import {
  faArrowCircleDown,
  faBroadcastTower,
  faClock,
  faCloud,
  faDesktop,
  faFile,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { AppBarButton } from '../../../utils/utlils';
import { FinderProps } from './finder.d';
import styles from './finder.module.scss';
export const Finder = (props: FinderProps) => {
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
        <div className={styles.finderBar}></div>
        <div className={styles.finderContent}></div>
      </div>
    </div>
  );
};
