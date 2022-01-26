import { faShieldAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { AppBarButton } from '../../../utils/utlils';
import { SafariProps } from './safari.d';
import styles from './safari.module.scss';
export const Safari = (props: SafariProps) => {
  const [address, setAddress] = useState('');
  const onKeyPress = (event: React.KeyboardEvent) => {
    switch (event.key) {
      case 'Enter':
        window.open(`https://` + address, '_blank');
        return;
      default:
        return;
    }
  };
  const onAddressInput = (event: React.FormEvent<HTMLInputElement>) => {
    setAddress(event.currentTarget.value);
  };
  const setClosed = () => props.setApp('SAFARI_CLOSED');
  const setMinimized = () => props.setApp('SAFARI_MINIMIZED');
  const setMaximized = () => {
    if (props.state === 3) {
      props.setApp('SAFARI_OPENED');
    } else props.setApp('SAFARI_MAXIMIZED');
  };
  return (
    <div className={styles.safari} data-show={props.state}>
      <div className={styles.appBar}>
        <div className={styles.appBarBtnContainer}>
          <AppBarButton
            setClosed={setClosed}
            setMinimized={setMinimized}
            setMaximized={setMaximized}
          />
        </div>
        <input
          className={styles.searchbar}
          type="text"
          onKeyPress={onKeyPress}
          onInput={onAddressInput}
        />
      </div>
      <div className={styles.content}>
        <div className={styles.contentContainer}>
          <div className={styles.safariTitle}>Favorites</div>
          <div className={styles.linkImgBox}>
            <a
              href="https://www.apple.com/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img
                className={styles.linkImg}
                src="https://www.apple.com/apple-touch-icon.png"
                alt=""
              />
            </a>
            <div className={styles.linkName}>Apple</div>
          </div>
        </div>
        <div className={styles.contentContainer}>
          <div className={styles.safariTitle}>Privacy Report</div>
          <div className={styles.privacyContainer}>
            <FontAwesomeIcon
              className={styles.privacyIcon}
              icon={faShieldAlt}
            />
            <div className={styles.textContainer}>
              Safari has not encountered any trackers in the last seven days.
              Your IP address is hidden from any known trakcers.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
