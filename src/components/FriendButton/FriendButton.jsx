import React from 'react';
import styles from "./FriendButton.module.css";
import { useState } from 'react';


// export const FriendButton = () => {
//   return (
//     <div className={styles.square}>FriendButton</div>
//   )
// }

export const FriendButton = () => {
  const [isBlue, setIsBlue] = useState(true);
  const [textContent, setTextContent] = useState('+ Friend');

  const changeColor = () => {
    setIsBlue(!isBlue);
    setTextContent(isBlue ? 'Friend' : '+ Friend');
  };

  return (
    <div
      className={`${styles.friendbuttonRow} ${isBlue ? styles.blue : styles.green}`}
      onClick={changeColor}
    >
      {textContent}
    </div>
  );
};

