import React, { useState } from 'react';
import './modle.css'
const ConfirmRemoveModal = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Are you sure you want to remove this application?</h2>
        <button className="confirm-btn" onClick={onConfirm}>
        remove
        </button>
        <button className="cancel-btn" onClick={onClose}>
          Cancel
        </button>
      </div>
    </div>
  );
};
export default ConfirmRemoveModal;
