import {
  faChevronLeft,
  faClock,
  faHeart,
  faImages,
  faPlayCircle,
  faTrashAlt,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useRef, useState } from 'react';
import { AppBarButton } from '../../../utils/utlils';
import {
  ImageState,
  PhotosContentProps,
  PhotosList,
  PhotosProps,
} from './photos.d';
import styles from './photos.module.scss';
export const Photos = (props: PhotosProps) => {
  const [id, setId] = useState(-1);
  const [imgLeft, setImgLeft] = useState(0);
  const [imgTop, setImgTop] = useState(0);
  const [imgWidth, setImgWidth] = useState(108);
  const [imgHeight, setImgHeight] = useState(108);
  const [folder, setFolder] = useState('Library');
  const [imageState, setImageState] = useState<ImageState>({
    initialWidth: 108,
    initialHeight: 108,
    finalWidth: 0,
    finalHeight: 0,
    initialLeft: 0,
    initialTop: 0,
    finalLeft: 0,
    finalTop: 0,
  });
  const zoomInOnClick = (event: React.MouseEvent, id: number) => {
    const initialWidth = event.currentTarget.clientWidth;
    const initialHeight = event.currentTarget.clientHeight;
    const finalHeight = event.currentTarget.parentElement!!.clientHeight;
    const finalWidth = event.currentTarget.parentElement!!.clientWidth;
    const initialLeft =
      event.currentTarget.getBoundingClientRect().left -
      event.currentTarget.parentElement!!.parentElement!!.parentElement!!.getBoundingClientRect()
        .left;
    const initialTop =
      event.currentTarget.getBoundingClientRect().top -
      event.currentTarget.parentElement!!.parentElement!!.parentElement!!.getBoundingClientRect()
        .top;
    const finalLeft =
      event.currentTarget.parentElement!!.getBoundingClientRect().left -
      event.currentTarget.parentElement!!.parentElement!!.parentElement!!.getBoundingClientRect()
        .left;
    const finalTop =
      event.currentTarget.parentElement!!.getBoundingClientRect().top -
      event.currentTarget.parentElement!!.parentElement!!.parentElement!!.getBoundingClientRect()
        .top;
    setId(id);
    setImgLeft(initialLeft);
    setImgTop(initialTop);
    setImgHeight(initialHeight);
    setImgWidth(initialWidth);
    setImageState({
      initialWidth: initialWidth,
      initialHeight: initialHeight,
      finalHeight: finalHeight,
      finalWidth: finalWidth,
      initialLeft: initialLeft,
      initialTop: initialTop,
      finalLeft: finalLeft,
      finalTop: finalTop,
    });
    setTimeout(() => {
      setImgHeight(finalHeight);
      setImgWidth(finalWidth);
      setImgTop(finalTop);
      setImgLeft(finalLeft);
    }, 0);
  };
  const zoomOutOnClick = () => {
    setImgLeft(imageState.initialLeft);
    setImgTop(imageState.initialTop);
    setImgHeight(imageState.initialHeight);
    setImgWidth(imageState.initialWidth);
    setTimeout(() => setId(-1), 250);
  };
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
        <div className={styles.photosBar}>
          <div className={styles.photosBarContainer}>
            {id !== -1 ? (
              <div
                className={styles.photosBarIconBox}
                style={{ marginLeft: `12px` }}
                onClick={zoomOutOnClick}
              >
                <FontAwesomeIcon
                  className={styles.photosBarIcon}
                  icon={faChevronLeft}
                />
              </div>
            ) : null}
          </div>
          <div className={styles.photosBarContainer}>
            {id !== -1 ? (
              <div className={styles.photosBarText}>{PhotosList[id].time}</div>
            ) : null}
          </div>
          <div
            className={styles.photosBarContainer}
            style={{ justifyContent: `flex-end` }}
          >
            <div className={styles.photosBarIconBox}>
              <FontAwesomeIcon
                className={styles.photosBarIcon}
                icon={faHeart}
              />
            </div>
            <input className={styles.searchbar} type="text" />
          </div>
        </div>
        <PhotosContent
          id={id}
          zoomOnClick={zoomInOnClick}
          imgLeft={imgLeft}
          imgTop={imgTop}
          imgHeight={imgHeight}
          imgWidth={imgWidth}
        />
      </div>
    </div>
  );
};
const PhotosContent = (props: PhotosContentProps) => {
  const all = props.id === -1;
  return (
    <div className={styles.photosContent}>
      {PhotosList.map((item, index) => {
        return (
          <div
            className={styles.imgContainer}
            key={index}
            onClick={(event) => props.zoomOnClick(event, index)}
          >
            <img className={styles.img} src={item.src} alt="" loading="lazy" />
          </div>
        );
      })}
      <img
        className={styles.fullImg}
        src={all ? 'data:,' : PhotosList[props.id].src}
        alt=""
        loading="lazy"
        style={{
          top: props.imgTop,
          left: props.imgLeft,
          display: all ? `none` : 'block',
          width: props.imgWidth + `px`,
          height: props.imgHeight + `px`,
          animation: ``,
        }}
      />
    </div>
  );
};
