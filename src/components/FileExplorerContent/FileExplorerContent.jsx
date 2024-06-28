import React from 'react';
import styles from "./FileExplorerContent.module.css";
import navoptionsjson from "../../data/navoptions.json";
import { getImageUrl } from "../../utils";

export const FileExplorerContent = () => {
  return (
    <div className={styles.container}>



        <div className={styles.content}>
            <div className={styles.navOptionsContainer}>
            {navoptionsjson.map((navoption, id) => {
                return (
                <div key={id} className={styles.navOptionItem}>
                    <div className={styles.navImageContainer}>
                    <img src={getImageUrl(navoption.imageSrc)} alt={navoption.title} />
                    </div>
                    <p>{navoption.title}</p>
                </div>
                );
            })}
            </div>
        </div>



    </div>
  )
}
