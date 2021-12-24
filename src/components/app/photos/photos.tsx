import React from 'react';
import { AppBarButton } from '../../../utils/utlils';
import { PhotosProps } from './photos.d';
import styles from './photos.module.scss';
export const Photos = (props: PhotosProps) => {
  return (
    <div className={styles.photos} data-show={props.show}>
      <div className={styles.appBar}>
        <div className={styles.appBarBtnContainer}>
          <AppBarButton setClose={() => props.setApp('Photos')} />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.photosBar}></div>
        <div className={styles.photosContent}>
          <div>Coming Soon</div>
        </div>
      </div>
    </div>
  );
};
