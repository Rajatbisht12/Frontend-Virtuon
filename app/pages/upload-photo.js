"use client"

import React, { useState, useRef, useEffect } from 'react';
import styles from './UploadPhoto.module.css';
import Link from 'next/link';
import { HiArrowLeftCircle } from "react-icons/hi2";
import { HiShoppingCart } from "react-icons/hi";

const UploadPhoto = () => {
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const fileInputRef = useRef(null);
  const videoRef = useRef(null);
  const [showCamera, setShowCamera] = useState(false);
  const [stream, setStream] = useState(null);

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
      console.log("Attempting to access camera...");
      const mediaStream = await navigator.mediaDevices.getUserMedia({ video: true });
      console.log("Camera access granted, stream obtained:", mediaStream);
      setStream(mediaStream);
      setShowCamera(true);
    } catch (err) {
      console.error("Error accessing camera:", err);
      alert("Unable to access camera. Please make sure you've granted permission.");
    }
  };

  useEffect(() => {
    if (stream && videoRef.current && !videoRef.current.srcObject) {
      console.log("Setting video srcObject");
      videoRef.current.srcObject = stream;
    }
  }, [stream]);

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
      <Link href="/" passHref>
        <button className={styles.backButton}><HiArrowLeftCircle /></button>
      </Link>
        <div className={styles.cartIcon}><HiShoppingCart /></div>
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
    {stream ? (
      <>
        <video ref={videoRef} autoPlay playsInline />
        <button onClick={capturePhoto} className={styles.captureButton}>Capture</button>
      </>
    ) : (
      <p>Loading camera...</p>
    )}
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