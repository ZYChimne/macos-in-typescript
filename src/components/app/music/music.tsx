import { faItunesNote } from '@fortawesome/free-brands-svg-icons';
import {
  faBackward,
  faForward,
  faPause,
  faPlay,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useRef, useState } from 'react';
import { MorandiColorList } from '../../../utils/utils.d';
import { AppBarButton } from '../../../utils/utlils';
import { MusicLineProps, MusicList, MusicProps } from './music.d';
import styles from './music.module.scss';

export const Music = (props: MusicProps) => {
  const player = useRef(
    new (window as any).QMplayer({ target: 'web', fliter: true, loop: true })
  );
  const [musicList, setMuicList] = useState<any>(null);
  const playerPlayPause = () => {
    console.log(player.current.data);
    setMuicList(player.current.data);
  };
  const musicPlay = () => {
    if (musicList) {
      if (musicList.state === 'playing') {
        player.current.pause();
      } else {
        player.current.play();
      }
    } else {
      player.current.play(MusicList);
    }
  };
  useEffect(() => {
    player.current.on('play', playerPlayPause);
    player.current.on('pause', playerPlayPause);
  }, []);
  const playOnIndex = (index: number) => {
    player.current.play(MusicList, { index: index });
  };
  return (
    <div
      className={styles.music}
      data-show={props.show}
      style={{
        background:
          MorandiColorList[musicList?.song.genre % MorandiColorList.length] +
          `CC`,
      }}
    >
      <div className={styles.appBar}>
        <div className={styles.appBarBtnContainer}>
          <AppBarButton setClose={() => props.setApp('Music')} />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.musicBar}>
          <div
            className={styles.albumIconBox}
            style={{
              background:
                MorandiColorList[
                  musicList?.song.genre % MorandiColorList.length
                ],
            }}
          >
            <FontAwesomeIcon className={styles.albumIcon} icon={faItunesNote} />
          </div>
          <div className={styles.musicInfoContainer}>
            <div className={styles.title}>{musicList?.song.title}</div>
            <div className={styles.subtitle}>
              {musicList?.song.singer[0].title +
                ` - ` +
                musicList?.song.album.title}
            </div>
          </div>
          <div className={styles.musicController}>
            <div
              className={styles.controllerIconBox}
              onClick={() => {
                player.current.playPrev();
              }}
            >
              <FontAwesomeIcon
                className={styles.controllerIcon}
                icon={faBackward}
              />
            </div>
            <div className={styles.controllerIconBox} onClick={musicPlay}>
              {musicList?.state === 'playing' ? (
                <FontAwesomeIcon
                  className={styles.controllerIcon}
                  icon={faPause}
                />
              ) : (
                <FontAwesomeIcon
                  className={styles.controllerIcon}
                  icon={faPlay}
                />
              )}
            </div>
            <div
              className={styles.controllerIconBox}
              onClick={() => {
                player.current.playNext();
              }}
            >
              <FontAwesomeIcon
                className={styles.controllerIcon}
                icon={faForward}
              />
            </div>
          </div>
        </div>
        <div className={styles.musicContent}>
          <div className={styles.musicListContainer}>
            {musicList
              ? Object.keys(musicList.songs).map((key, index) => {
                  return (
                    <MusicListLine
                      title={musicList.songs[key].title}
                      singers={musicList.songs[key].singer[0].title}
                      album={musicList.songs[key].album.title}
                      playing={false}
                      onClick={() => playOnIndex(index)}
                      key={index}
                    />
                  );
                })
              : null}
          </div>
        </div>
      </div>
    </div>
  );
};
const MusicListLine = (props: MusicLineProps) => {
  return (
    <div className={styles.musicLine} onClick={props.onClick}>
      {props.title + ' - ' + props.singers + ' - ' + props.album}
    </div>
  );
};
