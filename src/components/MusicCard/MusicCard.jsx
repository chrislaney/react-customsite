import React from 'react';
import styles from "./MusicCard.module.css";

export const MusicCard = () => {
  return (
    <div className={styles.container}>
        <div className={styles.topBar}>
        <div className={styles.button}><img src="assets\buttons\expandButton.png" className={styles.buttonImage}/></div>
                <div className={styles.button}><img src="assets\buttons\minimizeButton.png" className={styles.buttonImage}/></div>
                <div className={styles.button}><img src="assets\buttons\xbutton.png" className={styles.buttonImage}/></div>
        </div>
        <div className={styles.content}>

        </div>
    </div>
  )
}
