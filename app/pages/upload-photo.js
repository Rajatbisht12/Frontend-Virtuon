"use client"

import React, { useState, useRef } from 'react';
import styles from './UploadPhoto.module.css';

const UploadPhoto = () => {
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const fileInputRef = useRef(null);
  const videoRef = useRef(null);
  const [showCamera, setShowCamera] = useState(false);

  const handleUpload = () => {
    if (agreedToTerms) {
      if (selectedFile) {
        console.log('Photo upload initiated', selectedFile);
        // Implement actual upload logic here
      } else {
        alert('Please select a photo first');
      }
    } else {
      alert('Please agree to the Terms and Conditions');
    }
  };

  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      console.log('File selected:', file.name);
    }
  };

  const openFileDialog = () => {
    fileInputRef.current.click();
  };

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        setShowCamera(true);
      }
    } catch (err) {
      console.error("Error accessing camera:", err);
      alert("Unable to access camera. Please make sure you've granted permission.");
    }
  };

  const capturePhoto = () => {
    const canvas = document.createElement('canvas');
    canvas.width = videoRef.current.videoWidth;
    canvas.height = videoRef.current.videoHeight;
    canvas.getContext('2d').drawImage(videoRef.current, 0, 0);
    canvas.toBlob((blob) => {
      const file = new File([blob], "captured_photo.jpg", { type: "image/jpeg" });
      setSelectedFile(file);
      setShowCamera(false);
      stopCamera();
    }, 'image/jpeg');
  };

  const stopCamera = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      videoRef.current.srcObject.getTracks().forEach(track => track.stop());
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <button className={styles.backButton}>←</button>
        <div className={styles.cartIcon}>🛒</div>
      </div>
      <div className={styles.progressBar}></div>
      <h1 className={styles.title}>Upload photo</h1>
      <p className={styles.subtitle}>
        Upload or click a photo in order for us to superimpose the garments on you
      </p>
      <div className={styles.uploadOptions}>
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileSelect}
          accept="image/*"
          style={{ display: 'none' }}
        />
        <button className={styles.uploadButton} onClick={openFileDialog}>
          <span className={styles.uploadIcon}>⬆️</span> Upload photo
        </button>
        <p className={styles.orText}>or</p>
        <button className={styles.clickPhotoButton} onClick={startCamera}>
          <span className={styles.cameraIcon}>📷</span> Click photo
        </button>
      </div>
      {showCamera && (
        <div className={styles.cameraContainer}>
          <video ref={videoRef} autoPlay playsInline />
          <button onClick={capturePhoto} className={styles.captureButton}>Capture</button>
        </div>
      )}
      {selectedFile && (
        <p className={styles.selectedFile}>Selected: {selectedFile.name}</p>
      )}
      <div className={styles.termsContainer}>
        <input
          type="checkbox"
          id="terms"
          checked={agreedToTerms}
          onChange={() => setAgreedToTerms(!agreedToTerms)}
        />
        <label htmlFor="terms">
          By checking this you agree to our Terms and Conditions and have read our Privacy Policy
        </label>
      </div>
      <button 
        className={styles.uploadButton}
        onClick={handleUpload}
        disabled={!agreedToTerms || !selectedFile}
      >
        Upload
      </button>
    </div>
  );
};

export default UploadPhoto;