import { faApple } from '@fortawesome/free-brands-svg-icons';
import { faGlassWhiskey, faTv } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { AppBarButton } from '../../../utils/utlils';
import {
  AboutContent,
  PreferencesContentProps,
  PreferencesContentType,
  PreferencesProps,
  SupportImportant,
  SupportText,
} from './preferences.d';
import styles from './preferences.module.scss';

export const Preferences = (props: PreferencesProps) => {
  const [contentType, setContentType] =
    useState<PreferencesContentType>('Overview');
  return (
    <div className={styles.preferences} data-show={props.show}>
      <div className={styles.appBar}>
        <div className={styles.appBarLeft}>
          <AppBarButton setClose={() => props.setApp('Preferences')} />
        </div>
        <div className={styles.appBarCenter}>
          <div
            className={styles.appBarBtn}
            data-active={contentType === 'Overview'}
            onClick={() => setContentType('Overview')}
          >
            Overview
          </div>
          <div
            className={styles.appBarBtn}
            data-active={contentType === 'Displays'}
            onClick={() => setContentType('Displays')}
          >
            Displays
          </div>
          <div
            className={styles.appBarBtn}
            data-active={contentType === 'Storage'}
            onClick={() => setContentType('Storage')}
          >
            Storage
          </div>
          <div
            className={styles.appBarBtn}
            data-active={contentType === 'Support'}
            onClick={() => setContentType('Support')}
          >
            Support
          </div>
          <div
            className={styles.appBarBtn}
            data-active={contentType === 'About'}
            onClick={() => setContentType('About')}
          >
            About
          </div>
        </div>
      </div>
      <PreferenceContent contentType={contentType} />
    </div>
  );
};
const Overview = () => {
  return (
    <div className={styles.overview}>
      <div className={styles.overviewContent}>
        <div className={styles.overviewLeft}>
          <img
            className={styles.overviewImg}
            src="/assets/icons/macos.png"
            alt=""
            loading="lazy"
          />
        </div>
        <div className={styles.overviewRight}>
          <div className={styles.overviewRightLine1}>
            <div className={styles.overviewRightLine}>
              <div className={styles.overviewTitle}>macOS</div>
              <div className={styles.overviewSubtitle}>Big Sur</div>
            </div>
            <div className={styles.overviewRightLineValue}>Version 11.0</div>
          </div>
          <div className={styles.overviewRightLine2}>
            <div className={styles.overviewRightLine}>
              <div className={styles.overviewRightLineName}>
                MacBook Pro (16-inch, 2021)
              </div>
            </div>
            <div className={styles.overviewRightLine}>
              <div className={styles.overviewRightLineName}>Processor</div>
              <div className={styles.overviewRightLineValue}>Apple M1 MAX</div>
            </div>
            <div className={styles.overviewRightLine}>
              <div className={styles.overviewRightLineName}>Memory</div>
              <div className={styles.overviewRightLineValue}>64 GB DDR5</div>
            </div>
            <div className={styles.overviewRightLine}>
              <div className={styles.overviewRightLineName}>Graphics</div>
              <div className={styles.overviewRightLineValue}>Apple M1 MAX</div>
            </div>
            <div className={styles.overviewRightLine}>
              <div className={styles.overviewRightLineName}>Serial Number</div>
              <div className={styles.overviewRightLineValue}>20001006</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.overviewFooter}>
        ™ and © 1983-2021 Apple Inc. All rights reserved. License and Warranty
      </div>
    </div>
  );
};
const Displays = () => {
  return (
    <div className={styles.displays}>
      <FontAwesomeIcon className={styles.displaysImg} icon={faTv} />
      <div className={styles.displaysTitle}>Built-in Renita Display</div>
      <div className={styles.displaysSubtitle}>16 inch (3072 * 1920)</div>
    </div>
  );
};
const StorageStatusBar = (props: any) => {
  return (
    <div className={styles.storageStatusBar}>
      <div
        className={styles.storageStatusItem}
        style={{ width: `20%`, background: `rgb(235, 69, 90)` }}
      >
        Apps
      </div>
      <div
        className={styles.storageStatusItem}
        style={{ width: `10%`, background: `rgb(99, 201, 86)` }}
      />
      <div
        className={styles.storageStatusItem}
        style={{ width: `5%`, background: `rgb(234, 60, 247)` }}
      />
      <div
        className={styles.storageStatusItem}
        style={{ width: `5%`, background: `rgb(154, 84, 185)` }}
      />
      <div
        className={styles.storageStatusItem}
        style={{ width: `5%`, background: `rgb(121, 121, 121)` }}
      />
      <div
        className={styles.storageStatusItem}
        style={{ width: `5%`, background: `rgb(157, 133, 99)` }}
      />
      <div
        className={styles.storageStatusItem}
        style={{ width: `10%`, background: `rgb(192, 192, 192)` }}
      />
      <div
        className={styles.storageStatusItem}
        style={{ width: `20%`, background: `rgb(146, 146, 146)` }}
      />
      <div
        className={styles.storageStatusItem}
        style={{ width: `20%`, background: `white` }}
      />
    </div>
  );
};
const Storage = () => {
  return (
    <div className={styles.storage}>
      <div className={styles.storageConstraint}>
        <div className={styles.storageLeft}>
          <FontAwesomeIcon
            className={styles.storageImg}
            icon={faGlassWhiskey}
          />
          <div className={styles.storageText}>16 TB</div>
          <div className={styles.storageText}>Flash Storage</div>
        </div>
        <div className={styles.storageRight}>
          <div className={styles.storageTitle}>Macintosh HD</div>
          <div className={styles.storageText}>
            12.8 TB available out of 16 TB
          </div>
          <StorageStatusBar />
        </div>
      </div>
    </div>
  );
};
const Support = () => {
  return (
    <div className={styles.support}>
      <div className={styles.supportLeft}>
        <div className={styles.supportImgBox}>
          <FontAwesomeIcon className={styles.supportImg} icon={faApple} />
        </div>
        <div className={styles.supportTitle}>Limited Warranty</div>
        <div className={styles.supportSubtitle}>Expires Dec 30, 2030</div>
      </div>
      <div className={styles.supportRight}>
        <div className={styles.supportRightLine1}>
          <div className={styles.supportText}>{SupportText}</div>
        </div>
        <div className={styles.supportRightLine2}>
          <div className={styles.supportText}>{SupportImportant}</div>
        </div>
      </div>
    </div>
  );
};
const About = () => {
  return (
    <div className={styles.about}>
      <div className={styles.aboutContent}>
        {AboutContent}
        <a href="https://github.com/ZYChimne/macos-in-typescript">{`https://github.com/ZYChimne/macos-in-typescript`}</a>
      </div>
    </div>
  );
};
const PreferenceContent = (props: PreferencesContentProps) => {
  switch (props.contentType) {
    case 'Overview':
      return <Overview />;
    case 'Displays':
      return <Displays />;
    case 'Storage':
      return <Storage />;
    case 'Support':
      return <Support />;
    case 'About':
      return <About />;
  }
};
