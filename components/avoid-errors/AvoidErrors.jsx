import React from 'react'
import styles from './AvoidErrors.module.css'
const AvoidErrors = () => {
  return (
    <div className={styles.MainContainer}>
      <div className={styles.InnerTextMain}>
          <p className={styles.mainHeading}>
            DAPPS
          </p>
          <p className={styles.heading}>
            Technology made easier
          </p>
          <p className={styles.text}>
          Decentralized applications have found a huge user base right in the initial stage , and therefore we as a team have gained extensive expertise into the creation of dapps.
          </p>
      </div>
      <div className={styles.InnerImageMain}>
        <img src="/assets/images/Maintenance Illustration.png" width="100%"></img>
      </div>
    </div>
  )
}

export default AvoidErrors