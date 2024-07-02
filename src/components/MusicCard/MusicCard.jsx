import React from 'react';
import styles from "./MusicCard.module.css";
import { getImageUrl } from "../../utils";

export const MusicCard = () => {
  return (
    <div className={styles.container}>
        <div className={styles.topBar}>
          <div className={styles.button}><img src={getImageUrl("buttons/expandButton.png")} className={styles.buttonImage}/></div>
          <div className={styles.button}><img src={getImageUrl("buttons/minimizeButton.png")} className={styles.buttonImage}/></div>
          <div className={styles.button}><img src={getImageUrl("buttons/xbutton.png")} className={styles.buttonImage}/></div>
        </div>
        <div className={styles.content}>
        Hopefully will hook up to Spotify API eventually and display album cover and title of song - Test 3
        </div>
    </div>
  )
}
