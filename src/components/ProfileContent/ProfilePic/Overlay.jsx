import React from 'react';
import styles from './Overlay.module.css';
import { getImageUrl } from "../../../utils";

export const Overlay = ({ onClose }) => {
  return (
    <div className={styles.container}>
        <div className={styles.topBar}>
            <div className={styles.button}><img src={getImageUrl("buttons/xbutton.png")} className={styles.buttonImage} onClick={onClose}/></div>
        </div>
        <div className={styles.overlayContent}>
            <img src={getImageUrl("photos/chrisHero.JPEG")}></img>
        </div>
    </div>
  );
};