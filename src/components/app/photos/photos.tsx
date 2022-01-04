import {
  faClock,
  faHeart,
  faImages,
  faPlayCircle,
  faTrashAlt,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
        <div className={styles.photosSubtitle}>Photos</div>
        <div className={styles.appBarLine}>
          <div className={styles.appBarIconBox}>
            <FontAwesomeIcon className={styles.appBarIcon} icon={faImages} />
          </div>
          <div className={styles.appBarTitle}>Library</div>
        </div>
        <div className={styles.appBarLine}>
          <div className={styles.appBarIconBox}>
            <FontAwesomeIcon
              className={styles.appBarIcon}
              icon={faPlayCircle}
            />
          </div>
          <div className={styles.appBarTitle}>Memories</div>
        </div>
        <div className={styles.appBarLine}>
          <div className={styles.appBarIconBox}>
            <FontAwesomeIcon className={styles.appBarIcon} icon={faImages} />
          </div>
          <div className={styles.appBarTitle}>Library</div>
        </div>
        <div className={styles.appBarLine}>
          <div className={styles.appBarIconBox}>
            <FontAwesomeIcon className={styles.appBarIcon} icon={faUser} />
          </div>
          <div className={styles.appBarTitle}>People</div>
        </div>
        <div className={styles.appBarLine}>
          <div className={styles.appBarIconBox}>
            <FontAwesomeIcon className={styles.appBarIcon} icon={faHeart} />
          </div>
          <div className={styles.appBarTitle}>Favorites</div>
        </div>
        <div className={styles.appBarLine}>
          <div className={styles.appBarIconBox}>
            <FontAwesomeIcon className={styles.appBarIcon} icon={faClock} />
          </div>
          <div className={styles.appBarTitle}>Recents</div>
        </div>
        <div className={styles.appBarLine}>
          <div className={styles.appBarIconBox}>
            <FontAwesomeIcon className={styles.appBarIcon} icon={faTrashAlt} />
          </div>
          <div className={styles.appBarTitle}>Recently Deleted</div>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.photosBar}></div>
        <div className={styles.photosContent}></div>
      </div>
    </div>
  );
};
