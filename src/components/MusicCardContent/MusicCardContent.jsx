import React from 'react';
import styles from "./MusicCardContent.module.css";
import { getImageUrl } from '../../utils';

export const MusicCardContent = () => {
  return (
    <div className={styles.container}>
        <div className={styles.leftSide}>
            <div className={styles.albumCover}>
                Album Cover
            </div>
        </div>
        <div className={styles.rightSide}>
            <h1>title</h1>
            <h2>Artist</h2>
            <div className={styles.playButton}>
                <img src={getImageUrl("buttons/playbutton.png")}></img>
            </div>
        </div>
    </div>
  )
}
