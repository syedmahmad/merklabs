import React from 'react'
import styles from './EasyIntegration.module.css'

const EasyIntegration = () => {
  return (
    <div className={styles.MainContainer}>
      <div className={styles.InnerImageMain}>
        <img src="/assets/images/How We Work Illustration (1).png" width="100%"></img>
      </div>
      <div className={styles.InnerTextMain}>
          <h1 className={styles.mainHeading}>
            SMART CONTRACT
          </h1>
          <h2 className={styles.heading}>
            Experience the Revolution
          </h2>
          <p className={styles.text}>
            Merklabs has efficient developers with exceptional coding skills that can create any type of smart contract you desire and with scalable and secure code. You desire, we create it for you.
          </p>
      </div>
    </div>
  )
}

export default EasyIntegration