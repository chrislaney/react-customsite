import React from 'react'
import styles from "./ProfileCard.module.css";
import { ProfileContent } from '../ProfileContent/ProfileContent';
import { getImageUrl } from "../../utils";

export const ProfileCard = () => {
  return (
    <div className={styles.container}>
      <div  className={styles.parentFrame}>
        <div className={styles.topBar}>
          <div className={styles.backButtons}>
            <div className={styles.button}><img src={getImageUrl("buttons/backarrow.png")} className={styles.buttonImage}/></div>
            <div className={styles.button}><img src={getImageUrl("buttons/forwardarrow.png")} className={styles.buttonImage}/></div>
            
            {/* tabs */}
            <div className={styles.currTab}>
              <img src={getImageUrl("fileicons/cactusicon.png")}></img>
              <p>MyProfile</p>
            </div>
            <div className={styles.extTab}>
              <img src={getImageUrl("fileicons/linkedinicon.png")}></img>
              <p>Linkedin</p>
            </div>
            <div className={styles.extTab}>
              <img src={getImageUrl("fileicons/githubicon.svg")}></img>
              <p>Github</p>
            </div>
            <div className={styles.extTab}>
              <img src={getImageUrl("fileicons/stravaicon.png")}></img>
              <p>Strava</p>
            </div>

            
          </div>
            <div className={styles.button}><img src={getImageUrl("buttons/expandButton.png")} className={styles.buttonImage}/></div>
            <div className={styles.button}><img src={getImageUrl("buttons/minimizeButton.png")} className={styles.buttonImage}/></div>
            <div className={styles.button}><img src={getImageUrl("buttons/xbutton.png")} className={styles.buttonImage}/></div>
        </div>
        <div className={styles.searchBar}>
          <div className={styles.searchField}>
            Search bar text
          </div>
        </div>
        <div className={styles.childFrame}>
          <div className={styles.contentSection}>
            {/* this is where the profile shit will sit */}
            <ProfileContent></ProfileContent>
          </div>
          <div className={styles.scrollSection}>
            <div className={styles.scrollBar}></div>
          </div>
        </div>
        <div className={styles.bottomBar}>

        </div>
      </div>
    </div>
  )
}
