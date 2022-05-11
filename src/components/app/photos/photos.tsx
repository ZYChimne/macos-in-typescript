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
import React, { useState } from 'react';
import { AppStateAction, MonthNames } from '../../../utils/utils.d';
import { AppBarButton } from '../../../utils/utlils';
import { ImageState, PhotosContentProps, PhotosList } from './photos.d';
import styles from './photos.module.scss';
const InitialImageState = {
  width: 108,
  height: 108,
  left: 0,
  top: 0,
};
const Photos = ({
  state,
  setApp,
}: {
  state: number;
  setApp: React.Dispatch<AppStateAction>;
}) => {
  const [id, setId] = useState(-1);
  const [fit, setFit] = useState(false);
  const [folder, setFolder] = useState('Library');
  const [prevImageState, setPrevImageState] =
    useState<ImageState>(InitialImageState);
  const [curImageState, setCurImageState] =
    useState<ImageState>(InitialImageState);
  const switchOnWheel = (event: React.WheelEvent) => {
    if (id !== -1) {
      if (id < PhotosList.length - 1 && event.deltaY > 0) {
        setId(id + 1);
      } else if (id > 0 && event.deltaY < 0) {
        setId(id - 1);
      }
    }
  };
  const switchOnTouch = (event: React.PointerEvent) => {
    if (id !== -1 && event.pointerType === 'touch') {
      if (id < PhotosList.length - 1 && event.movementX < -1) {
        setId(id + 1);
      } else if (id > 0 && event.movementX > 1) {
        setId(id - 1);
      }
    }
  };
  const zoomInOnClick = (event: React.MouseEvent, id: number) => {
    const initialWidth = event.currentTarget.clientWidth;
    const initialHeight = event.currentTarget.clientHeight;
    const finalHeight =
      event.currentTarget.parentElement!.parentElement!.parentElement!
        .clientHeight;
    const finalWidth =
      event.currentTarget.parentElement!.parentElement!.parentElement!
        .clientWidth;
    const initialLeft =
      event.currentTarget.getBoundingClientRect().left -
      event.currentTarget.parentElement!.parentElement!.parentElement!.parentElement!.parentElement!.getBoundingClientRect()
        .left;
    const initialTop =
      event.currentTarget.getBoundingClientRect().top -
      event.currentTarget.parentElement!.parentElement!.parentElement!.parentElement!.parentElement!.getBoundingClientRect()
        .top;
    const finalLeft =
      event.currentTarget.parentElement!.parentElement!.parentElement!.getBoundingClientRect()
        .left -
      event.currentTarget.parentElement!.parentElement!.parentElement!.parentElement!.parentElement!.getBoundingClientRect()
        .left;
    const finalTop =
      event.currentTarget.parentElement!.parentElement!.parentElement!.getBoundingClientRect()
        .top -
      event.currentTarget.parentElement!.parentElement!.parentElement!.parentElement!.parentElement!.getBoundingClientRect()
        .top;
    setId(id);
    setCurImageState({
      left: initialLeft,
      top: initialTop,
      height: initialHeight,
      width: initialWidth,
    });
    setFit(true);
    setPrevImageState({
      left: initialLeft,
      top: initialTop,
      height: initialHeight,
      width: initialWidth,
    });
    setTimeout(() => {
      setCurImageState({
        left: finalLeft,
        top: finalTop,
        height: finalHeight,
        width: finalWidth,
      });
    }, 0);
  };
  const zoomOutOnClick = () => {
    setCurImageState(prevImageState);
    setFit(false);
    setTimeout(() => setId(-1), 250);
  };
  const setClosed = () => setApp('PHOTOS_CLOSED');
  const setMinimized = () => setApp('PHOTOS_MINIMIZED');
  const setMaximized = () => {
    if (state === 3) {
      setApp('PHOTOS_OPENED');
    } else setApp('PHOTOS_MAXIMIZED');
  };
  return (
    <div className={styles.photos} data-show={state}>
      <div className={styles.appBar}>
        <div className={styles.appBarBtnContainer}>
          <AppBarButton
            setClosed={setClosed}
            setMinimized={setMinimized}
            setMaximized={setMaximized}
          />
        </div>
        <div className={styles.photosSubtitle}>Photos</div>
        <div
          className={styles.appBarLine}
          data-active={folder === 'Library'}
          onClick={() => setFolder('Library')}
        >
          <div className={styles.appBarIconBox}>
            <FontAwesomeIcon className={styles.appBarIcon} icon={faImages} />
          </div>
          <div className={styles.appBarTitle}>Library</div>
        </div>
        <div
          className={styles.appBarLine}
          data-active={folder === 'Memories'}
          onClick={() => setFolder('Memories')}
        >
          <div className={styles.appBarIconBox}>
            <FontAwesomeIcon
              className={styles.appBarIcon}
              icon={faPlayCircle}
            />
          </div>
          <div className={styles.appBarTitle}>Memories</div>
        </div>
        <div
          className={styles.appBarLine}
          data-active={folder === 'People'}
          onClick={() => setFolder('People')}
        >
          <div className={styles.appBarIconBox}>
            <FontAwesomeIcon className={styles.appBarIcon} icon={faUser} />
          </div>
          <div className={styles.appBarTitle}>People</div>
        </div>
        <div
          className={styles.appBarLine}
          data-active={folder === 'Favorites'}
          onClick={() => setFolder('Favorites')}
        >
          <div className={styles.appBarIconBox}>
            <FontAwesomeIcon className={styles.appBarIcon} icon={faHeart} />
          </div>
          <div className={styles.appBarTitle}>Favorites</div>
        </div>
        <div
          className={styles.appBarLine}
          data-active={folder === 'Recents'}
          onClick={() => setFolder('Recents')}
        >
          <div className={styles.appBarIconBox}>
            <FontAwesomeIcon className={styles.appBarIcon} icon={faClock} />
          </div>
          <div className={styles.appBarTitle}>Recents</div>
        </div>
        <div
          className={styles.appBarLine}
          data-active={folder === 'Deleted'}
          onClick={() => setFolder('Deleted')}
        >
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
              <div className={styles.photosBarText}>
                {MonthNames[
                  Number.parseInt(PhotosList[id].time.substring(4, 6)) - 1
                ] +
                  ` ` +
                  PhotosList[id].time.substring(6) +
                  `, ` +
                  PhotosList[id].time.substring(0, 4)}
              </div>
            ) : null}
          </div>
          <div
            className={styles.photosBarContainer}
            style={{ justifyContent: `flex-end` }}
          >
            <input className={styles.searchbar} type="text" />
          </div>
        </div>
        <PhotosContent
          id={id}
          zoomOnClick={zoomInOnClick}
          imgState={curImageState}
          imgFit={fit}
          switchOnWheel={switchOnWheel}
          switchOnTouch={switchOnTouch}
        />
      </div>
    </div>
  );
};
const PhotosContent = (props: PhotosContentProps) => {
  const all = props.id === -1;
  let curI = 0,
    preI = 0;
  let contentByDateArr: JSX.Element[] = [];
  while (curI < PhotosList.length) {
    const temp = preI,
      curDate = PhotosList[curI].time.substring(0, 6);
    const year = curDate.substring(0, 4),
      month = curDate.substring(4, 6);
    while (curI < PhotosList.length)
      if (PhotosList[curI++].time.substring(0, 6) !== curDate) break;
    const contentByDate = (
      <div className={styles.contentByDate} key={curI}>
        <div className={styles.contentDate}>
          {MonthNames[Number.parseInt(month) - 1]}, {year}
        </div>
        <div className={styles.contentImgContainer}>
          {PhotosList.slice(preI, curI).map((item, index) => {
            return (
              <div
                className={styles.imgContainer}
                key={index}
                onClick={(event) => {
                  props.zoomOnClick(event, index + temp);
                }}
              >
                <img
                  className={styles.img}
                  src={item.src}
                  alt=""
                  loading="lazy"
                />
              </div>
            );
          })}
        </div>
      </div>
    );
    contentByDateArr.push(contentByDate);
    preI = curI;
  }
  return (
    <div
      className={styles.photosContent}
      onWheel={props.switchOnWheel}
      onPointerMove={props.switchOnTouch}
    >
      {contentByDateArr}
      <img
        className={styles.fullImg}
        src={all ? 'data:,' : PhotosList[props.id].src}
        alt=""
        loading="lazy"
        style={{
          top: props.imgState.top,
          left: props.imgState.left,
          display: all ? `none` : 'block',
          width: `${props.imgState.width}px`,
          height: `${props.imgState.height}px`,
        }}
      />
    </div>
  );
};
export default Photos;
