import React from 'react';
import { AppBarButton } from '../../../utils/utlils';
import { RemindersProps } from './reminders.d';
import styles from './reminders.module.scss';
export const Reminders = (props: RemindersProps) => {
  return (
    <div className={styles.reminders} data-show={props.show}>
      <div className={styles.appBar}>
        <div className={styles.appBarBtnContainer}>
          <AppBarButton setClose={() => props.setApp('Reminders')} />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.remindersBar}></div>
        <div className={styles.remindersContent}>
          <div>Coming Soon</div>
        </div>
      </div>
    </div>
  );
};
