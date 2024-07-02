import React from 'react';
import styles from "./MusicCard.module.css";
import { getImageUrl } from "../../utils";
import { MusicCardContent } from '../MusicCardContent/MusicCardContent';

export const MusicCard = () => {
  return (
    <div className={styles.container}>
        <div className={styles.topBar}>
          <div className={styles.button}><img src={getImageUrl("buttons/expandButton.png")} className={styles.buttonImage}/></div>
          <div className={styles.button}><img src={getImageUrl("buttons/minimizeButton.png")} className={styles.buttonImage}/></div>
          <div className={styles.button}><img src={getImageUrl("buttons/xbutton.png")} className={styles.buttonImage}/></div>
        </div>
        <div className={styles.content}>
          <MusicCardContent></MusicCardContent>
        </div>
    </div>
  )
}
