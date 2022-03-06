import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { AppStateAction } from '../../../utils/utils.d';
import { AppBarButton } from '../../../utils/utlils';
import styles from './mail.module.scss';
export const Mail = ({
  state,
  setApp,
}: {
  state: number;
  setApp: React.Dispatch<AppStateAction>;
}) => {
  const [mailto, setMailTo] = useState('');
  const [mailcc, setMailcc] = useState('');
  const [mailSubject, setMailSubject] = useState('');
  const [mailBody, setMailBody] = useState('');
  const sendOnClick = () => {
    window.open(
      `mailto:${mailto}?cc=${mailcc}&subject=${mailSubject}&body=${mailBody}`
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
  const setClosed = () => setApp('MAIL_CLOSED');
  const setMinimized = () => setApp('MAIL_MINIMIZED');
  const setMaximized = () => {
    if (state === 3) {
      setApp('MAIL_OPENED');
    } else setApp('MAIL_MAXIMIZED');
  };
  return (
    <div className={styles.mail} data-show={state} draggable="true">
      <div className={styles.appBar}>
        <div className={styles.appBarLeft}>
          <AppBarButton
            setClosed={setClosed}
            setMaximized={setMaximized}
            setMinimized={setMinimized}
          />
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
          <div className={styles.contentLine}>
            <div className={styles.contentLineTitle}>Cc:</div>
            <input
              className={styles.contentLineInput}
              type="email"
              value={mailcc}
              onInput={updateMailcc}
            />
          </div>
          <div className={styles.contentLine}>
            <div className={styles.contentLineTitle}>Subject:</div>
            <input
              className={styles.contentLineInput}
              type="text"
              value={mailSubject}
              onInput={updateMailSubject}
            />
          </div>
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
