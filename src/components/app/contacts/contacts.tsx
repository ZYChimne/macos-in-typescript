import {
  faBuilding,
  faComment,
  faEnvelope,
  faPhoneAlt,
  faVideo,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { AppStateAction } from '../../../utils/utils.d';
import { AppBarButton } from '../../../utils/utlils';
import { ContactsInfoList } from './contacts.d';
import styles from './contacts.module.scss';
const Contacts = ({
  state,
  setApp,
  curContact,
  setCurContact,
}: {
  state: number;
  setApp: React.Dispatch<AppStateAction>;
  curContact: string;
  setCurContact: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const setClosed = () => setApp('CONTACTS_CLOSED');
  const setMinimized = () => setApp('CONTACTS_MINIMIZED');
  const setMaximized = () => {
    if (state === 3) {
      setApp('CONTACTS_OPENED');
    } else setApp('CONTACTS_MAXIMIZED');
  };
  return (
    <div className={styles.contacts} data-show={state} draggable="true">
      <div className={styles.appBar}>
        <div className={styles.appBarBtnContainer}>
          <AppBarButton
            setClosed={setClosed}
            setMinimized={setMinimized}
            setMaximized={setMaximized}
          />
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
const ContactsContent = ({ id }: { id: string }) => {
  let contactsIcon;
  switch (ContactsInfoList[id].type) {
    case 'BUILDING':
      contactsIcon = (
        <FontAwesomeIcon className={styles.contactsIcon} icon={faBuilding} />
      );
      break;
    case 'NAME':
      contactsIcon = <div className={styles.contactsIcon}>{id[0]}</div>;
  }
  return (
    <div className={styles.contactsContent}>
      <div className={styles.iconContainer}>
        <div className={styles.contactsIconBox}>{contactsIcon}</div>
        <div className={styles.contactsIconText}>{id}</div>
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
        {ContactsInfoList[id].phone !== '' ? (
          <ContactsInfoLine title="phone" text={ContactsInfoList[id].phone} />
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
        {ContactsInfoList[id].email.length !== 0
          ? ContactsInfoList[id].email.map((item, index) => {
              return (
                <ContactsInfoLine
                  title={item.type}
                  text={item.content}
                  key={index}
                />
              );
            })
          : null}
        {ContactsInfoList[id].homepage !== '' ? (
          <ContactsInfoLine
            title="home page"
            text={ContactsInfoList[id].homepage}
          />
        ) : null}
        {ContactsInfoList[id].birthday !== '' ? (
          <ContactsInfoLine
            title="birthday"
            text={ContactsInfoList[id].birthday}
          />
        ) : null}
        {ContactsInfoList[id].address.length !== 0
          ? ContactsInfoList[id].address.map((item, index) => {
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
const ContactsInfoLine = ({ title, text }: { title: string; text: string }) => {
  return (
    <div className={styles.contactsInfoLine}>
      <div className={styles.contactsInfoLineTitle}>{title}</div>
      <div className={styles.contactsInfoLineText}>{text}</div>
    </div>
  );
};
export default Contacts;
