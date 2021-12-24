import React from 'react';
import { AppBarButton } from '../../../utils/utlils';
import { CalendarProps } from './calendar.d';
import styles from './calendar.module.scss';
export const Calendar = (props: CalendarProps) => {
  return (
    <div className={styles.calendar} data-show={props.show}>
      <div className={styles.appBar}>
        <div className={styles.appBarBtnContainer}>
          <AppBarButton setClose={() => props.setApp('Calendar')} />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.calendarBar}></div>
        <div className={styles.calendarContent}>
          <div>Coming Soon</div>
        </div>
      </div>
    </div>
  );
};
