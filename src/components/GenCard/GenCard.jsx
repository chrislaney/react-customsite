import React from 'react'
import styles from "./GenCard.module.css";

export const GenCard = () => {
  return (
    <div className={styles.parentFrame}>
        <div className={styles.topBar}>
            <div className={styles.button}><img src="src\assets\buttons\expandButton.png" className={styles.buttonImage}/></div>
            <div className={styles.button}><img src="src\assets\buttons\minimizeButton.png" className={styles.buttonImage}/></div>
            <div className={styles.button}><img src="src\assets\buttons\xbutton.png" className={styles.buttonImage}/></div>
        </div>
        <div className={styles.childFrame}>
            <div className={styles.contentSection}>
                {/* this is where the file icons will sit */}
                <div className={styles.square}></div>

            </div>
            <div className={styles.scrollSection}>
                <div className={styles.scrollBar}></div>
            </div>
        </div>
    </div>
  )
}
