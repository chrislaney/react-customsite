import React, { useState } from 'react';
import styles from "./GenCard.module.css";
import { FileExplorerContent } from '../FileExplorerContent/FileExplorerContent';
import { Overlay } from './Overlay';
import { getImageUrl } from "../../utils";
import navoptionsjson1 from "../../data/navoptions.json";

export const GenCard = () => {

    const [navOptionsJson, setNavOptionsJson] = useState(navoptionsjson1); //used for nav options
    const [history, setHistory] = useState([]); //used for back button
    const [isOverlayVisible, setOverlayVisible] = useState(false); // State to control overlay visibility
    const [overlayContent, setOverlayContent] = useState(null); // State for overlay content


    // Function to handle click and switch to nested JSON options or open a link
    const handleJsonSwitch = (nextOptions, navoption) => {
      if (navoption.shouldTriggerOverlay) { // Check if this option should trigger an overlay
        setOverlayVisible(true);
        setOverlayContent(navoption.overlayContent);
        console.log("overlay should be triggered") // Set the overlay content
      } else if (Array.isArray(nextOptions)) {
        // If nextOptions is an array, update the state with new options
        setHistory([...history, navOptionsJson]);
        setNavOptionsJson(nextOptions);
        console.log('Updated navOptionsJson:', nextOptions);
      } else if (typeof nextOptions === 'string') {
        // If nextOptions is a string, open the link
        window.open(nextOptions, '_blank');
      }
    };

    const handleBack = () => {
        if (history.length > 0) {
          // Pop the last state from the history and update navOptionsJson
          const previousOptions = history.pop();
          setNavOptionsJson(previousOptions);
          setHistory([...history]); // Update the history after popping
        }
      };

    
    const closeOverlay = () => {
      setOverlayVisible(false);
      setOverlayContent(null);
    };


   return (
    <div className={styles.container}>
        <div className={styles.parentFrame}>
            <div className={styles.topBar}>
                <div className={styles.topBarTitle}>
                    {/* Add the Back button */}
                    {history.length > 0 && (
                        <div className={styles.backButton}><img src={getImageUrl("buttons/backarrow.png")} className={styles.buttonImage} onClick={handleBack}/></div>
                    )}
                    <img src={getImageUrl("fileicons/foldericon.png")}></img>
                    <p>File Explorer</p>
                </div>
                <div className={styles.button}><img src={getImageUrl("buttons/expandButton.png")} className={styles.buttonImage}/></div>
                <div className={styles.button}><img src={getImageUrl("buttons/minimizeButton.png")} className={styles.buttonImage}/></div>
                <div className={styles.button}><img src={getImageUrl("buttons/xbutton.png")} className={styles.buttonImage}/></div>
            </div>
            <div className={styles.childFrame}>
                <div className={styles.contentSection}>
                    {/* this is where the file icons will sit */}
                    <FileExplorerContent 
                    navOptionsJson={navOptionsJson} 
                    onNavOptionClick={handleJsonSwitch} 
                    />
                    
                    <Overlay 
                    isVisible={isOverlayVisible} 
                    content={overlayContent} 
                    onClose={closeOverlay} 
                    />

                </div>
                <div className={styles.scrollSection}>
                    <div className={styles.scrollBar}></div>
                </div>
            </div>
        </div>
    </div>
  )
}
