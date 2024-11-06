import React, { useState, useEffect } from 'react';
import { getImageUrl } from "../../utils";
import styles from './Mosaic.module.css';
import navoptionsjson1 from "../../data/navoptions.json";

export const Mosaic = ({photos}) => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const openModal = (photo) => {
    setSelectedPhoto(photo);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPhoto(null);
  };

  return (
    <div className={styles.container}>
      <div className={styles.mosaicGrid}>
        {photos.map((src, index) => (
            <div className={styles.mosaicItem} key={index} onClick={() => openModal(getImageUrl(src))}>
              <img src={getImageUrl(src)} alt={`Mosaic item ${index + 1}`} />
            </div>
          ))}
      </div>

      {/* Modal for displaying enlarged photo */}
      {isModalOpen && (
        <div className={styles.modal} onClick={closeModal}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <img src={selectedPhoto} alt="Enlarged" className={styles.enlargedPhoto} />
          </div>
          <div className={styles.closeButton}><img src={getImageUrl("buttons/xbutton.png")} className={styles.buttonImage} onClick={closeModal}/></div>
        </div>
      )}

    </div>
  )
}
