import React, { useMemo, useState } from 'react';
import { AppBarButton } from '../../../utils/utlils';
import { NotesList, NotesProps } from './notes.d';
import { marked } from 'marked';
import styles from './notes.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolder } from '@fortawesome/free-solid-svg-icons';
export const Notes = (props: NotesProps) => {
  const [curNote, setCurNote] = useState(NotesList[0].id);
  const content = useMemo(() => marked.parse(NotesList[0].content), []);
  return (
    <div className={styles.notes} data-show={props.show}>
      <div className={styles.appBar}>
        <div className={styles.appBarHeader}>
          <div className={styles.appBarBtnContainer}>
            <AppBarButton setClose={() => props.setApp('Notes')} />
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
                  <div className={styles.appBarLineTime}>{item.time}</div>
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
        <div className={styles.notesBar}></div>
        <div
          className={styles.notesContent}
          dangerouslySetInnerHTML={{ __html: content }}
          style={{ fontSize: `14px` }}
        ></div>
      </div>
    </div>
  );
};
