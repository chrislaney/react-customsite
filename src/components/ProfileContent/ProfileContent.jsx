import React from 'react';
import styles from "./ProfileContent.module.css";
import { useState } from 'react';

import { FriendButton } from "../FriendButton/FriendButton";

// https://www.youtube.com/watch?v=2wKS55_rkqI

export const ProfileContent = () => {
  return (
    <div className={styles.container}>
        {/* ABOUT AND PROFILE PIC SECTION */}
        <div className={styles.gridRows}>
            <div className={styles.topBarContainer}>
                <div>
                    <div className={styles.profilePic}>
                        <img src="src\assets\buttons\chrisHero.JPEG"></img>
                    </div>
                    <div className={styles.nameButtonContainer}>
                        <div className={styles.nameCol}>
                            Chris
                        </div>
                        <div className={styles.buttonCol}>
                            <FriendButton></FriendButton>
                            <a href="mailto:Laneyct@mail.uc.edu" className={styles.messagebuttonRow}>Message</a>
                        </div>
                    </div>
                </div>
                <div className={styles.aboutTextBox}>
                    <div className={styles.topBarAbout}>
                            About
                    </div>
                    <div className={styles.contentAbout}>
                            {/* This will be about text - you need to style the next */}
                            Generating random paragraphs can be an excellent way for writers to get their creative flow going at the beginning of the day. The writer has no idea what topic the random paragraph will be about when it appears. This forces the writer to use creativity to complete one of three common writing challenges. 
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
                    <div className={styles.square}></div>
                    <div className={styles.square}></div>
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
                    <div className={styles.square}></div>
                    <div className={styles.square}></div>
                    <div className={styles.square}></div>

                </div>
            </div>
        </div>
    </div>
  )
}


  
