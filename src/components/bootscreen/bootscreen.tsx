import { faApple } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import styles from './bootscreen.module.scss';

export const BootScreen = ({
  boot,
  setBoot,
}: {
  boot: boolean;
  setBoot: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [progress, setProgress] = useState(`0`);
  useEffect(() => {
    setProgress(`100%`);
    setTimeout(() => {
      setBoot(false);
    }, 1000);
  }, [setBoot]);
  return (
    <div className={styles.bootscreen} data-show={boot}>
      <FontAwesomeIcon className={styles.logo} icon={faApple} />
      <div className={styles.progressBar}>
        <div className={styles.progress} style={{ width: progress }} />
      </div>
    </div>
  );
};
