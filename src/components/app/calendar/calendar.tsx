import React, { useRef, useState } from 'react';
import { AppBarButton } from '../../../utils/utlils';
import { Calendar } from 'antd';
import { CalendarProps } from './calendar.d';
import styles from './calendar.module.scss';
import 'antd/dist/antd.css';
export const MCalendar = (props: CalendarProps) => {
  return (
    <div className={styles.calendar} data-show={props.show}>
      <div className={styles.appBarBtnContainer}>
        <AppBarButton setClose={() => props.setApp('Calendar')} />
      </div>
      <Calendar
        style={{
          maxHeight: `100%`,
          position: `absolute`,
          width: `100%`,
          overflowY: `scroll`,
        }}
      />
    </div>
  );
};
