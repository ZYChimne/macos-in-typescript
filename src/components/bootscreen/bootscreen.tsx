import { faApple } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import styles from './bootscreen.module.scss';
export type BootScreenProps = {
  boot: boolean;
  setBoot: React.Dispatch<React.SetStateAction<boolean>>;
};
export const BootScreen = (props: BootScreenProps) => {
  const [progress, setProgress] = useState(`0`);
  useEffect(() => {
    setProgress(`100%`);
    setTimeout(() => {
      props.setBoot(false);
    }, 1000);
  }, [props]);
  return (
    <div className={styles.bootscreen} data-show={props.boot}>
      <FontAwesomeIcon className={styles.logo} icon={faApple} />
      <div className={styles.progressBar}>
        <div className={styles.progress} style={{ width: progress }} />
      </div>
    </div>
  );
};
