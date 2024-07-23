import React from 'react';
import styles from "./MusicCardContent.module.css";
import { getImageUrl } from '../../utils';
// import { NowPlaying } from '../NowPlaying/NowPlaying.jsx';

export const MusicCardContent = () => {
  return (
    <div className={styles.container}>
        <div className={styles.leftSide}>
            <div className={styles.albumCover}>
                Album Cover
            </div>
        </div>
        <div className={styles.rightSide}>
            {/* <h1> song title</h1>
            <h4> Artist </h4>
            <div> music bar animation? </div> */}

            {/* <NowPlaying></NowPlaying> */}

            <div className={styles.playButton}>
                <img src={getImageUrl("buttons/playbutton.png")}></img>
            </div>
        </div>
    </div>
  )
}
