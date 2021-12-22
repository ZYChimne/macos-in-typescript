import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { AppBarButton } from '../../../utils/utlils';
import { MailProps } from './mail.d';
import styles from './mail.module.scss';
export const Mail = (props: MailProps) => {
  return (
    <div className={styles.mail} data-show={props.show}>
      <div className={styles.appBar}>
        <div className={styles.appBarLeft}>
          <AppBarButton setClose={() => props.setApp('Mail')} />
        </div>
        <div className={styles.appBarRight}>
          <FontAwesomeIcon className={styles.mailBtn} icon={faPaperPlane} />
        </div>
      </div>
    </div>
  );
};
