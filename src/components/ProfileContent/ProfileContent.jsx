import React from 'react';
import styles from "./ProfileContent.module.css";


export const ProfileContent = () => {
  return (
    <div className={styles.container}>
        {/* ABOUT AND PROFILE PIC SECTION */}
        <div className={styles.gridRows}>
            <div className={styles.topBarContainer}>
                <div className={styles.profileSide}>
                    <div className={styles.profilePic}>
                        <img src="src\assets\buttons\chrisHero.JPEG"></img>
                    </div>
                    <div className={styles.nameButtonContainer}>
                        <div className={styles.nameCol}>
                            Chris
                        </div>
                        <div className={styles.buttonCol}>
                            <div className={styles.friendbuttonRow}>
                                + Friend
                            </div>
                            <div className={styles.messagebuttonRow}>
                                Message
                            </div>

                        </div>
                    </div>
                </div>
                <div className={styles.aboutTextBox}>
                    <div className={styles.topBarAbout}>
                            About
                    </div>
                    <div className={styles.contentAbout}>
                            {/* This will be about text - you need to style the next */}
                    </div>
                </div>
            </div>
        </div>
        
        {/* MUSIC SECTION */}
        <div className={styles.gridRows}>
            <div className={styles.textBox}>
                <div className={styles.topBarTextBox}>
                    Music
                </div>
                <div className={styles.contentTextBox}>

                    {/* This is where music playlists from spotify api will go */}
                    <div className={styles.square}></div>

                </div>
            </div>
        </div>

        {/* PHOTO SECTION */}
        <div className={styles.gridRows}>
            <div className={styles.textBox}>
                <div className={styles.topBarPhotoTextBox}>
                    Photos
                </div>
                <div className={styles.contentTextBox}>

                    {/* This is where photo stuff will go */}
                    <div className={styles.square}></div>

                </div>
            </div>
        </div>
    </div>
  )
}


  
