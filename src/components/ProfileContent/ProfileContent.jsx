import React from 'react';
import styles from "./ProfileContent.module.css";
import { FriendButton } from "../FriendButton/FriendButton";
import { getImageUrl } from '../../utils';
import { ProfilePic } from './ProfilePic/ProfilePic.jsx';
import { PhotoSection } from './PhotoSection.jsx';

// https://www.youtube.com/watch?v=2wKS55_rkqI

export const ProfileContent = () => {
  return (
    <div className={styles.container}>
        {/* ABOUT AND PROFILE PIC SECTION */}
        <div className={styles.gridRows}>
            <div className={styles.topBarContainer}>
                <div>
                    <div>
                        <ProfilePic></ProfilePic>
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
                            Chris Laney is a computer science student at the University of Cincinnati graduating in spring of 2025. His professional and academic interests lie at the intersection of economics and computer science. Unprofessionally he has interests in photography, music, yoga, reading good books and blogs, the outdoors, and making art. Originally from Tiffin OH, he has lived in Chicago IL, Long Beach CA, and more permanently, Cincinnati OH over the course of the last 5 years. This site is meant to show off not only his fullstack skills but also his astute aesthetic taste. Thanks for visiting.
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
                    <div className={styles.square}><a target="_blank" href="https://open.spotify.com/album/5gadI9EueRkALx3wwbx9D3?si=WVfG_n4ETuO8Welgr7NKLQ"><img src={getImageUrl("albumcovers/mokalamity.jpg")} className={styles.albumcovers}/></a></div>
                    <div className={styles.square}><a target="_blank" href="https://open.spotify.com/album/5M5LPGsAR9mxbBa22GOp5h?si=Uo_ZzE6CTjy4Cq7C8pR84A"><img src={getImageUrl("albumcovers/national.jpg")} className={styles.albumcovers}/></a></div>
                    <div className={styles.square}><a target="_blank" href="https://open.spotify.com/album/7hTmy5ipq0ieK4DZZqaxml?si=Zs0azYAlSeSA4qY69yvgnQ"><img src={getImageUrl("albumcovers/khruangbin.jpg")} className={styles.albumcovers}/></a></div>
                    <div className={styles.square}><a target="_blank" href="https://open.spotify.com/album/1To7kv722A8SpZF789MZy7?si=YfJw7cjuTYmaUEZdjNrB_Q"><img src={getImageUrl("albumcovers/nirvana.jpg")} className={styles.albumcovers}/></a></div>

                </div>
            </div>
        </div>

        {/* PHOTO SECTION */}
        <div className={styles.gridRows}>
            <div className={styles.textBox}>
                <div className={styles.topBarPhotoTextBox}>
                    Photos
                </div>
                    {/* This is where photo stuff will go */}
                <PhotoSection></PhotoSection>
            </div>
        </div>
    </div>
  )
}


  
