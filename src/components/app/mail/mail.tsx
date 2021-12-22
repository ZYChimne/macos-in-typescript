import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { AppBarButton } from '../../../utils/utlils';
import { MailProps } from './mail.d';
import styles from './mail.module.scss';
export const Mail = (props: MailProps) => {
  const [mailto, setMailTo] = useState('');
  const [mailcc, setMailcc] = useState('');
  const [mailSubject, setMailSubject] = useState('');
  const [mailBody, setMailBody] = useState('');
  const sendOnClick = () => {
    window.open(
      'mailto:' +
        mailto +
        '?cc=' +
        mailcc +
        '&subject=' +
        mailSubject +
        '&body=' +
        mailBody
    );
  };
  const updateMailto = (event: React.FormEvent<HTMLInputElement>) => {
    setMailTo(event.currentTarget.value);
  };
  const updateMailcc = (event: React.FormEvent<HTMLInputElement>) => {
    setMailcc(event.currentTarget.value);
  };
  const updateMailSubject = (event: React.FormEvent<HTMLInputElement>) => {
    setMailSubject(event.currentTarget.value);
  };
  const updateMailBody = (event: React.FormEvent<HTMLTextAreaElement>) => {
    setMailBody(event.currentTarget.value);
  };
  return (
    <div className={styles.mail} data-show={props.show}>
      <div className={styles.appBar}>
        <div className={styles.appBarLeft}>
          <AppBarButton setClose={() => props.setApp('Mail')} />
        </div>
        <div className={styles.appBarRight}>
          <FontAwesomeIcon
            className={styles.mailBtn}
            icon={faPaperPlane}
            onClick={sendOnClick}
          />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.contentInfoContainer}>
          <div className={styles.contentLine}>
            <div className={styles.contentLineTitle}>To:</div>
            <input
              className={styles.contentLineInput}
              type="email"
              value={mailto}
              onInput={updateMailto}
            />
          </div>
          <div className={styles.separator} />
          <div className={styles.contentLine}>
            <div className={styles.contentLineTitle}>Cc:</div>
            <input
              className={styles.contentLineInput}
              type="email"
              value={mailcc}
              onInput={updateMailcc}
            />
          </div>
          <div className={styles.separator} />
          <div className={styles.contentLine}>
            <div className={styles.contentLineTitle}>Subject:</div>
            <input
              className={styles.contentLineInput}
              type="text"
              value={mailSubject}
              onInput={updateMailSubject}
            />
          </div>
          <div className={styles.separator} />
        </div>
        <div className={styles.contentInputContainer}>
          <textarea
            className={styles.contentInput}
            value={mailBody}
            onInput={updateMailBody}
          />
        </div>
      </div>
    </div>
  );
};
