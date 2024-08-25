import React, { useState } from 'react';
import styles from "./Overlay.module.css";
import { getImageUrl } from "../../utils";
import { Mosaic } from '../Mosaic/Mosaic';

export const Overlay = ({ isVisible, content, onClose }) => {
    if (!isVisible) return null;

  return (
    <div className={styles.overlayBlur}>
        <div className={styles.container}>
            <div className={styles.topBar}> 
              <div className={styles.button}><img src={getImageUrl("buttons/xbutton.png")} className={styles.buttonImage} onClick={onClose}/></div>
            </div>
          <div className={styles.overlayContent}>
          
            <Mosaic photos={content}/>

          </div>
        </div>
    </div>
  )
}
