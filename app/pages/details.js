"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import styles from './style.module.css';
import { HiArrowLeftCircle } from "react-icons/hi2";

const Details = () => {
  
  const [formData, setFormData] = useState({
    height: '',
    weight: '',
    waist: '',
    chest: '',
  });

  const handleChange = (e) => {
    setFormData(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Navigate to the upload photo page
    router.push('/upload-photo');
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <button className={styles.backButton}><HiArrowLeftCircle /></button>
        
      </div>
      <div className={styles.progressBar}></div>
      <h1 className={styles.title}>Enter details</h1>
      <p className={styles.subtitle}>These details will help us generate a close to real sample for you</p>
      <form onSubmit={handleSubmit} className={styles.form}>
        {['Height', 'Weight', 'Waist', 'Chest'].map((field) => (
          <div key={field} className={styles.inputGroup}>
            <label htmlFor={field.toLowerCase()}>{field}</label>
            <input
              type="text"
              id={field.toLowerCase()}
              name={field.toLowerCase()}
              value={formData[field.toLowerCase()]}
              onChange={handleChange}
              placeholder={field}
            />
          </div>
        ))}
        <div className={styles.buttonGroup}>
          <button type="button" className={styles.skipButton}>Skip</button>
          <Link href="/upload-photo" passHref>
            <button type="submit" className={styles.continueButton}>Continue</button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Details;