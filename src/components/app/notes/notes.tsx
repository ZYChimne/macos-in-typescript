import React from 'react';
import { AppBarButton } from '../../../utils/utlils';
import { NotesProps } from './notes.d';
import styles from './notes.module.scss';
export const Notes = (props: NotesProps) => {
  return (
    <div className={styles.notes} data-show={props.show}>
      <div className={styles.appBar}>
        <div className={styles.appBarBtnContainer}>
          <AppBarButton setClose={() => props.setApp('Notes')} />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.notesBar}></div>
        <div className={styles.notesContent}>
          <div>Coming Soon</div>
        </div>
      </div>
    </div>
  );
};
