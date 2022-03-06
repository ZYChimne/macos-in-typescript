import React, { useMemo, useState } from 'react';
import { AppBarButton } from '../../../utils/utlils';
import { NotesList } from './notes.d';
import { marked } from 'marked';
import styles from './notes.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolder } from '@fortawesome/free-regular-svg-icons';
import { AppStateAction, MonthNames } from '../../../utils/utils.d';
export const Notes = ({
  state,
  setApp,
}: {
  state: number;
  setApp: React.Dispatch<AppStateAction>;
}) => {
  const [curNote, setCurNote] = useState(NotesList[0].id);
  const content = useMemo(
    () => marked.parse(NotesList[curNote].content),
    [curNote]
  );
  const setClosed = () => setApp('NOTES_CLOSED');
  const setMinimized = () => setApp('NOTES_MINIMIZED');
  const setMaximized = () => {
    if (state === 3) {
      setApp('NOTES_OPENED');
    } else setApp('NOTES_MAXIMIZED');
  };
  return (
    <div className={styles.notes} data-show={state} draggable="true">
      <div className={styles.appBar}>
        <div className={styles.appBarHeader}>
          <div className={styles.appBarBtnContainer}>
            <AppBarButton
              setClosed={setClosed}
              setMinimized={setMinimized}
              setMaximized={setMaximized}
            />
          </div>
        </div>
        <div className={styles.appBarContent}>
          {NotesList.map((item) => {
            return (
              <div
                className={styles.appBarLine}
                key={item.id}
                onClick={() => setCurNote(item.id)}
                data-active={curNote === item.id}
              >
                <div className={styles.appBarLineTitle}>{item.title}</div>
                <div className={styles.appBarLineSubtitle}>
                  <div className={styles.appBarLineDate}>
                    {MonthNames[Number.parseInt(item.date.substring(4, 6)) - 1]}
                    , {Number.parseInt(item.date.substring(6, 8))}
                  </div>
                  <div className={styles.appBarLinePre}>{item.content}</div>
                </div>
                <div className={styles.appBarLineFolder}>
                  <FontAwesomeIcon
                    className={styles.appBarLineIcon}
                    icon={faFolder}
                  />
                  <div className={styles.appBarLineIcon}>{item.folder}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.notesBar}>
          <input className={styles.searchbar} type="text" />
        </div>
        <div
          className={styles.notesContent}
          dangerouslySetInnerHTML={{ __html: content }}
          style={{ fontSize: `14px` }}
        ></div>
      </div>
    </div>
  );
};
