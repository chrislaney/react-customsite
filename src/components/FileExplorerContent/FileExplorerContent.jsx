import React, { useState } from 'react';
import styles from "./FileExplorerContent.module.css";
import { getImageUrl } from "../../utils";

export const FileExplorerContent = ({ navOptionsJson, onNavOptionClick }) => {

  return (
    <div className={styles.container}>
        <div key={navOptionsJson} className={styles.content}>
            <div className={styles.navOptionsContainer}>
            {console.log('Rendering with navOptionsJson:', navOptionsJson)} {/* Debugging render */}
            {navOptionsJson.map((navoption, id) => {
                return (
                <div key={id} className={styles.navOptionItem} onClick={() => {
                  console.log('Item clicked'); // Check if this logs
                  onNavOptionClick(navoption.nextOptions);
                }}>
                    <div className={styles.navImageContainer}>
                    <img src={getImageUrl(navoption.imageSrc)} alt={navoption.title}  />
                    </div>
                    <p>{navoption.title}</p>
                </div>
                );
            })}
            </div>
        </div>

    </div>
  )
};

