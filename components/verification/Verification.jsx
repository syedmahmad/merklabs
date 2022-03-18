import React from 'react'
import styles from './Verification.module.css'
const Verification = () => {
  return (
    <div className={styles.MainContainer}>
      <div className={styles.InnerImageMain}>
        <img src="/assets/images/UI Design Illustration.png" width="100%"></img>
      </div>
      <div className={styles.InnerTextMain}>
          <h1 className={styles.mainHeading}>
            DEFI
          </h1>
          <h2 className={styles.heading}>
            Scale the world of DeFi
          </h2>
          <p className={styles.text}>
          Being the veterans in the blockchain industry, we understand the hype of decentralized finance and the contemporary optimizations in the financial sector and hence taking the grasp of the moment , we have developed exceptional projects in the world of DeFi.          </p>
      </div>
    </div>
  )
}

export default Verification