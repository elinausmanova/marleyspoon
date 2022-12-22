import React from 'react';

import styles from '../styles/Confirmation.module.css'

const Confirmation = () => {
    return (
        <div className={styles.successMessage}>
            <p className={styles.text}>Your data was successfully submitted!</p>
        </div>
    )
}

export default Confirmation