import {
  faCalendarAlt,
  faCalendarDay,
  faFlag,
  faInbox,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { AppBarButton } from '../../../utils/utlils';
import { RemindersEvents, RemindersProps, TagColors } from './reminders.d';
import styles from './reminders.module.scss';
export const Reminders = ({
  state,
  setApp,
  curTag,
  setCurTag,
}: RemindersProps) => {
  const setClosed = () => setApp('REMINDERS_CLOSED');
  const setMinimized = () => setApp('REMINDERS_MINIMIZED');
  const setMaximized = () => {
    if (state === 3) {
      setApp('REMINDERS_OPENED');
    } else setApp('REMINDERS_MAXIMIZED');
  };
  return (
    <div className={styles.reminders} data-show={state} draggable="true">
      <div className={styles.appBar}>
        <div className={styles.appBarBtnContainer}>
          <AppBarButton
            setClosed={setClosed}
            setMinimized={setMinimized}
            setMaximized={setMaximized}
          />
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
const TagContainer = ({
  id,
  curTag,
  setCurTag,
}: {
  id: string;
  curTag: string;
  setCurTag: (value: React.SetStateAction<string>) => void;
}) => {
  let tagIcon,
    tagNum: number = 0;
  const active = id === curTag;
  if (id === 'All') {
    Object.keys(RemindersEvents).forEach((x) => {
      tagNum += RemindersEvents[x].length;
    });
  } else tagNum = RemindersEvents[id].length;
  switch (id) {
    case 'Today':
      tagIcon = (
        <FontAwesomeIcon
          className={styles.tagIcon}
          icon={faCalendarDay}
          style={{
            color: active ? TagColors[id] : `#FFFFFF`,
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
            color: active ? TagColors[id] : `#FFFFFF`,
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
            color: active ? TagColors[id] : `#FFFFFF`,
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
            color: active ? TagColors[id] : `#FFFFFF`,
          }}
        />
      );
      break;
  }
  return (
    <div
      className={styles.tagContainer}
      onClick={() => setCurTag(id)}
      style={{
        background: active ? TagColors[id] : `rgba(207, 206, 206, 1)`,
      }}
    >
      <div className={styles.tagLeftContainer}>
        <div
          className={styles.tagIconBox}
          style={{ background: active ? `#FFFFFF` : TagColors[id] }}
        >
          {tagIcon}
        </div>
        <div className={styles.tagText} data-active={active}>
          {id}
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
const EventContent = ({ tag }: { tag: string }) => {
  const date = new Date(
    Number.parseInt(RemindersEvents[tag][0].date.substring(0, 4)),
    Number.parseInt(RemindersEvents[tag][0].date.substring(4, 6)) - 1,
    Number.parseInt(RemindersEvents[tag][0].date.substring(6, 8))
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
      {RemindersEvents[tag].map((item, index) => {
        return (
          <EventLine title={item.title} subtitle={item.subtitle} key={index} />
        );
      })}
    </div>
  );
};
const EventLine = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) => {
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
        <div className={styles.contentText}>{title}</div>
        <div className={styles.contentText}>{subtitle}</div>
      </div>
    </div>
  );
};
