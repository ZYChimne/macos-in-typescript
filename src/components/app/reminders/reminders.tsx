import {
  faCalendarAlt,
  faCalendarDay,
  faFlag,
  faInbox,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { AppBarButton } from '../../../utils/utlils';
import { RemindersProps, TagColors, TagContainerProps } from './reminders.d';
import styles from './reminders.module.scss';
export const Reminders = (props: RemindersProps) => {
  const [curTag, setCurTag] = useState('Today');
  return (
    <div className={styles.reminders} data-show={props.show}>
      <div className={styles.appBar}>
        <div className={styles.appBarBtnContainer}>
          <AppBarButton setClose={() => props.setApp('Reminders')} />
        </div>
        <input className={styles.searchbar} type="text" />
        <div className={styles.appBarLine}>
          <TagContainer id="Today" curTag={curTag} setCurTag={setCurTag} />
          <TagContainer id="Scheduled" curTag={curTag} setCurTag={setCurTag} />
        </div>
        <div className={styles.appBarLine}>
          <TagContainer id="All" curTag={curTag} setCurTag={setCurTag} />
          <TagContainer id="Flagged" curTag={curTag} setCurTag={setCurTag} />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.remindersBar}></div>
        <div className={styles.remindersContent}>
          <div
            className={styles.remindersContentTitle}
            style={{ color: TagColors[curTag] }}
          >
            {curTag}
          </div>
        </div>
      </div>
    </div>
  );
};
const TagContainer = (props: TagContainerProps) => {
  let tagIcon;
  const active = props.id === props.curTag;
  switch (props.id) {
    case 'Today':
      tagIcon = (
        <FontAwesomeIcon
          className={styles.tagIcon}
          icon={faCalendarDay}
          style={{
            color: active ? TagColors[props.id] : `#FFFFFF`,
          }}
        />
      );
      break;
    case 'Scheduled':
      tagIcon = (
        <FontAwesomeIcon
          className={styles.tagIcon}
          icon={faCalendarAlt}
          style={{
            color: active ? TagColors[props.id] : `#FFFFFF`,
          }}
        />
      );
      break;
    case 'All':
      tagIcon = (
        <FontAwesomeIcon
          className={styles.tagIcon}
          icon={faInbox}
          style={{
            color: active ? TagColors[props.id] : `#FFFFFF`,
          }}
        />
      );
      break;
    case 'Flagged':
      tagIcon = (
        <FontAwesomeIcon
          className={styles.tagIcon}
          icon={faFlag}
          style={{
            color: active ? TagColors[props.id] : `#FFFFFF`,
          }}
        />
      );
      break;
  }
  return (
    <div
      className={styles.tagContainer}
      onClick={() => props.setCurTag(props.id)}
      style={{
        background: active ? TagColors[props.id] : `rgba(207, 206, 206, 1)`,
      }}
    >
      <div className={styles.tagLeftContainer}>
        <div
          className={styles.tagIconBox}
          style={{ background: active ? `#FFFFFF` : TagColors[props.id] }}
        >
          {tagIcon}
        </div>
        <div className={styles.tagText} data-active={active}>
          {props.id}
        </div>
      </div>
      <div className={styles.tagRightContainer}>
        <div className={styles.tagNumber} data-active={active}>
          0
        </div>
      </div>
    </div>
  );
};
