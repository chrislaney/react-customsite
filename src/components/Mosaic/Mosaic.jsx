import React, { useState, useEffect } from 'react';
import { getImageUrl } from "../../utils";
import styles from './Mosaic.module.css';
import navoptionsjson1 from "../../data/navoptions.json";

export const Mosaic = ({photos}) => {

  return (
    <div className={styles.container}>
      <div className={styles.mosaicGrid}>
        {photos.map((src, index) => (
            <div className={styles.mosaicItem} key={index}>
              <img src={src} alt={`Mosaic item ${index + 1}`} />
            </div>
          ))}
      </div>
    </div>
  )
}
