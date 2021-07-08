import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import mediaQuery from 'css-mediaquery';
import styles from './Modal.module.css';

const modalRoot = document.getElementById('modal-root');

export default function Modal({ onClose, children }) {
  const handleModalOverlay = event => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  useEffect(() => {
    const handleModalKeyDown = event => {
      if (event.code === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleModalKeyDown);
    return () => {
      window.removeEventListener('keydown', handleModalKeyDown);
    };
  }, [onClose]);

  return createPortal(
    <div className={styles.overlay} onClick={handleModalOverlay}>
      <div className={styles.modal}>{children}</div>
    </div>,
    modalRoot,
  );
}
