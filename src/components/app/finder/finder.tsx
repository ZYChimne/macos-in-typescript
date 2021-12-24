import React from 'react';
import { AppBarButton } from '../../../utils/utlils';
import { FinderProps } from './finder.d';
import styles from './finder.module.scss';
export const Finder = (props: FinderProps) => {
  return (
    <div className={styles.finder} data-show={props.show}>
      <div className={styles.appBar}>
        <div className={styles.appBarBtnContainer}>
          <AppBarButton setClose={() => props.setApp('Finder')} />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.finderBar}></div>
        <div className={styles.finderContent}>
          <div>Coming Soon</div>
        </div>
      </div>
    </div>
  );
};
