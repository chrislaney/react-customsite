import React from 'react';
import { GenCard } from '../GenCard/GenCard';
import { MusicCard } from '../MusicCard/MusicCard';
import { ProfileCard } from '../ProfileCard/ProfileCard';
import styles from "./PageLayout.module.css";

export const PageLayout = () => {
  return (
    <div className={styles.container}>
        <div className={styles.leftCol}>
            <ProfileCard></ProfileCard>
        </div>
        <div className={styles.rightCol}>
            <div className={styles.columnElement}>
                <GenCard></GenCard>
            </div>
            <div className={styles.columnElement}>
                <MusicCard></MusicCard>
            </div>
        </div>
    </div>
  )
}
