import React from 'react';
import styles from "./ProfileContent.module.css";
import { FriendButton } from "../FriendButton/FriendButton";
import { getImageUrl } from '../../utils';

// https://www.youtube.com/watch?v=2wKS55_rkqI

export const ProfileContent = () => {
  return (
    <div className={styles.container}>
        {/* ABOUT AND PROFILE PIC SECTION */}
        <div className={styles.gridRows}>
            <div className={styles.topBarContainer}>
                <div>
                    <div className={styles.profilePic}>
                        <img src={getImageUrl("photos/chrisHero.JPEG")}></img>
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
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
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
                    <div className={styles.square}>Album Cover Filler</div>
                    <div className={styles.square}>Album Cover Filler</div>
                    <div className={styles.square}>Album Cover Filler</div>
                    <div className={styles.square}>Album Cover Filler</div>

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
                    <div className={styles.square}>Photo Filler</div>
                    <div className={styles.square}>Photo Filler</div>
                    <div className={styles.square}>Photo Filler</div>
                    <div className={styles.square}>Photo Filler</div>

                </div>
            </div>
        </div>
    </div>
  )
}


  
