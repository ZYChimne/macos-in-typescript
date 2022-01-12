import {
  faCalendarAlt,
  faCalendarDay,
  faFlag,
  faInbox,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { AppBarButton } from '../../../utils/utlils';
import {
  EventContentProps,
  EventLineProps,
  RemindersEvents,
  RemindersProps,
  TagColors,
  TagContainerProps,
} from './reminders.d';
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
          {curTag === 'All' ? (
            Object.keys(RemindersEvents).map((item, index) => {
              return <EventContent tag={item} key={index} />;
            })
          ) : (
            <EventContent tag={curTag} />
          )}
        </div>
      </div>
    </div>
  );
};
const TagContainer = (props: TagContainerProps) => {
  let tagIcon,
    tagNum: number = 0;
  const active = props.id === props.curTag;
  if (props.id === 'All') {
    Object.keys(RemindersEvents).forEach((x) => {
      tagNum += RemindersEvents[x].length;
    });
  } else tagNum = RemindersEvents[props.id].length;
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
          {tagNum}
        </div>
      </div>
    </div>
  );
};
const EventContent = (props: EventContentProps) => {
  const date = new Date(
    Number.parseInt(RemindersEvents[props.tag][0].date.substring(0, 4)),
    Number.parseInt(RemindersEvents[props.tag][0].date.substring(4, 6)) - 1,
    Number.parseInt(RemindersEvents[props.tag][0].date.substring(6, 8))
  );
  return (
    <div className={styles.dateContainer}>
      <div className={styles.dateLine}>
        <div className={styles.eventWeek}>
          {date.toLocaleDateString('en-CN', { weekday: 'short' })}
        </div>
        <div
          className={styles.eventDate}
          style={{ color: `rgb(128, 128, 128)` }}
        >
          {date.toLocaleDateString('en-CN', {
            month: 'short',
            day: 'numeric',
          })}
        </div>
      </div>
      {RemindersEvents[props.tag].map((item, index) => {
        return (
          <EventLine title={item.title} subtitle={item.subtitle} key={index} />
        );
      })}
    </div>
  );
};
const EventLine = (props: EventLineProps) => {
  const [check, setCheck] = useState(false);
  return (
    <div className={styles.contentLine}>
      <div className={styles.circleContainer}>
        <input
          className={styles.activeCircle}
          type="radio"
          checked={check}
          onClick={() => setCheck(!check)}
          onChange={() => {}}
        />
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.contentText}>{props.title}</div>
        <div className={styles.contentText}>{props.subtitle}</div>
      </div>
    </div>
  );
};
