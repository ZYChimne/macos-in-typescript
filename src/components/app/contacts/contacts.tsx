import {
  faBuilding,
  faComment,
  faEnvelope,
  faPhoneAlt,
  faVideo,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { AppBarButton } from '../../../utils/utlils';
import { ContactsProps } from './contacts.d';
import styles from './contacts.module.scss';
export const Contacts = (props: ContactsProps) => {
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
          <div className={styles.contactsBarTitle}>Apple</div>
        </div>
        <div className={styles.contactsContent}>
          <div className={styles.iconContainer}>
            <div className={styles.contactsIconBox}>
              <FontAwesomeIcon
                className={styles.contactsIcon}
                icon={faBuilding}
              />
            </div>
            <div className={styles.contactsIconText}>Apple</div>
          </div>
          <div className={styles.methodContainer}>
            <div className={styles.methodIconBox}>
              <FontAwesomeIcon className={styles.methodIcon} icon={faComment} />
            </div>
            <div className={styles.methodIconBox}>
              <FontAwesomeIcon
                className={styles.methodIcon}
                icon={faPhoneAlt}
              />
            </div>
            <div className={styles.methodIconBox}>
              <FontAwesomeIcon className={styles.methodIcon} icon={faVideo} />
            </div>
            <div className={styles.methodIconBox}>
              <FontAwesomeIcon
                className={styles.methodIcon}
                icon={faEnvelope}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
