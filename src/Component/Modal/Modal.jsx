import React, { useState } from "react";
import styles from "./Modal.module.css";

const Modal = props => {
  const [isShowModal, setIsShowModal] = useState(false);

  const showModal = () => {
    setIsShowModal(true);
  };

  const hideModal = () => {
    setIsShowModal(false);
  };

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Modal</h3>
      <button className={styles.modalButton} onClick={showModal}>
        Open Modal
      </button>
      {isShowModal &&
        <div className={styles.modal}>
          <div className={styles.box}>
            <button onClick={hideModal}>x</button>
            <span>HELLO CODESTATES</span>
          </div>
        </div>}
    </div>
  );
};

export default Modal;
