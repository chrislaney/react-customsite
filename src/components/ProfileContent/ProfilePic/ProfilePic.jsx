import React, { useState } from 'react';
import styles from './ProfilePic.module.css';
import { getImageUrl } from '../../../utils';
import { Overlay } from './Overlay.jsx';


export const ProfilePic = () => {
    const [showOverlay, setShowOverlay] = useState(false);

    const handleClick = () => {
        setShowOverlay(true);
    };

    const handleClose = () => {
        setShowOverlay(false);
    };


  return (
    <div>
        <div className={styles.profilePic} onClick={handleClick}>
            <img src={getImageUrl("photos/chrisHero.JPEG")}></img>
        </div>
        {showOverlay && <Overlay onClose={handleClose} />}
    </div>
  )
}
