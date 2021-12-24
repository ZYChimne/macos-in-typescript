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
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.contactsBar}></div>
        <div className={styles.contactsContent}>
          <div>Coming Soon</div>
        </div>
      </div>
    </div>
  );
};
