import React from 'react'
import styles from "./PhotoSection.module.css";
import { getImageUrl } from "../../utils";



export const PhotoSection = () => {
  return (
    <div className={styles.contentTextBox}>
        <div className={styles.square}><img src={getImageUrl("photos/2.jpg")} className={styles.photocovers}/></div>
        <div className={styles.square}><img src={getImageUrl("photos/42.JPEG")} className={styles.photocovers}/></div>
        <div className={styles.square}><img src={getImageUrl("photos/68.JPEG")} className={styles.photocovers}/></div>
        <div className={styles.square}><img src={getImageUrl("photos/20.JPEG")} className={styles.photocovers}/></div>
    </div>

  )
}
