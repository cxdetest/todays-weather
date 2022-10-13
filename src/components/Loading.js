import React from 'react';
import Styles from './Styles.module.css';

export const Loading = () => {
  return (
    <div className={Styles.loadingContainer}>
      <div className={Styles.loading}></div>
    </div>
  );
};

export default Loading;
