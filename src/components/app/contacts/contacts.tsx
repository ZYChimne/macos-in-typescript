import {
  faBuilding,
  faComment,
  faEnvelope,
  faPhoneAlt,
  faVideo,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { AppBarButton } from '../../../utils/utlils';
import {
  ContactsContentProps,
  ContactsInfoList,
  ContactsLineProps,
  ContactsProps,
} from './contacts.d';
import styles from './contacts.module.scss';
export const Contacts = (props: ContactsProps) => {
  const [curContact, setCurContact] = useState(
    Object.keys(ContactsInfoList)[0]
  );
  return (
    <div className={styles.contacts} data-show={props.show}>
      <div className={styles.appBar}>
        <div className={styles.appBarBtnContainer}>
          <AppBarButton setClose={() => props.setApp('Contacts')} />
          <div className={styles.appBarTitle}>All Contacts</div>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.contactsBar}>
          <input className={styles.searchbar} type="text" />
          {Object.keys(ContactsInfoList).map((item, index) => {
            return (
              <div
                className={styles.contactsBarTitle}
                key={index}
                data-active={item === curContact}
                onClick={() => setCurContact(item)}
              >
                {item}
              </div>
            );
          })}
        </div>
        <ContactsContent id={curContact} />
      </div>
    </div>
  );
};
const ContactsContent = (props: ContactsContentProps) => {
  let contactsIcon;
  switch (ContactsInfoList[props.id].type) {
    case 'BUILDING':
      contactsIcon = (
        <FontAwesomeIcon className={styles.contactsIcon} icon={faBuilding} />
      );
      break;
    case 'NAME':
      contactsIcon = <div className={styles.contactsIcon}>{props.id[0]}</div>;
  }
  return (
    <div className={styles.contactsContent}>
      <div className={styles.iconContainer}>
        <div className={styles.contactsIconBox}>{contactsIcon}</div>
        <div className={styles.contactsIconText}>{props.id}</div>
      </div>
      <div className={styles.methodContainer}>
        <div className={styles.methodIconBox}>
          <FontAwesomeIcon className={styles.methodIcon} icon={faComment} />
        </div>
        <div className={styles.methodIconBox}>
          <FontAwesomeIcon className={styles.methodIcon} icon={faPhoneAlt} />
        </div>
        <div className={styles.methodIconBox}>
          <FontAwesomeIcon className={styles.methodIcon} icon={faVideo} />
        </div>
        <div className={styles.methodIconBox}>
          <FontAwesomeIcon className={styles.methodIcon} icon={faEnvelope} />
        </div>
      </div>
      <div className={styles.contactsInfoContainer}>
        {ContactsInfoList[props.id].phone !== '' ? (
          <ContactsInfoLine
            title="phone"
            text={ContactsInfoList[props.id].phone}
          />
        ) : null}
        <div className={styles.contactsInfoLine}>
          <div className={styles.contactsInfoLineTitle}>Facetime</div>
          <div className={styles.contactsInfoLineText}>
            <FontAwesomeIcon
              className={styles.contactsInfoLineIcon}
              icon={faVideo}
            />
            <FontAwesomeIcon
              className={styles.contactsInfoLineIcon}
              icon={faPhoneAlt}
            />
          </div>
        </div>
        {ContactsInfoList[props.id].email.length !== 0
          ? ContactsInfoList[props.id].email.map((item, index) => {
              return (
                <ContactsInfoLine
                  title={item.type}
                  text={item.content}
                  key={index}
                />
              );
            })
          : null}
        {ContactsInfoList[props.id].homepage !== '' ? (
          <ContactsInfoLine
            title="home page"
            text={ContactsInfoList[props.id].homepage}
          />
        ) : null}
        {ContactsInfoList[props.id].birthday !== '' ? (
          <ContactsInfoLine
            title="birthday"
            text={ContactsInfoList[props.id].birthday}
          />
        ) : null}
        {ContactsInfoList[props.id].address.length !== 0
          ? ContactsInfoList[props.id].address.map((item, index) => {
              return (
                <ContactsInfoLine
                  title={item.type}
                  text={item.content}
                  key={index}
                />
              );
            })
          : null}
      </div>
    </div>
  );
};
const ContactsInfoLine = (props: ContactsLineProps) => {
  return (
    <div className={styles.contactsInfoLine}>
      <div className={styles.contactsInfoLineTitle}>{props.title}</div>
      <div className={styles.contactsInfoLineText}>{props.text}</div>
    </div>
  );
};
