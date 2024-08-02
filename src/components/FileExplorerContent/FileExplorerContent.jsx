import React, { useState } from 'react';
import styles from "./FileExplorerContent.module.css";
import navoptionsjson1 from "../../data/navoptions.json";
import { getImageUrl } from "../../utils";

export const FileExplorerContent = () => {

  const [navOptionsJson, setNavOptionsJson] = useState(navoptionsjson1);

  // Function to handle click and switch to nested JSON options or open a link
  const handleJsonSwitch = (nextOptions) => {
    console.log(nextOptions);
    if (Array.isArray(nextOptions)) {
      // If nextOptions is an array, update the state with new options
      setNavOptionsJson(nextOptions);
      console.log('Updated navOptionsJson:', nextOptions);
    } else if (typeof nextOptions === 'string') {
      // If nextOptions is a string, open the link
      window.open(nextOptions, '_blank');
    }
  };

  return (
    <div className={styles.container}>
        <div key={navOptionsJson} className={styles.content}>
            <div className={styles.navOptionsContainer}>
            {console.log('Rendering with navOptionsJson:', navOptionsJson)} {/* Debugging render */}
            {navOptionsJson.map((navoption, id) => {
                return (
                <div key={id} className={styles.navOptionItem} onClick={() => {
                  console.log('Item clicked'); // Check if this logs
                  handleJsonSwitch(navoption.nextOptions);
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

