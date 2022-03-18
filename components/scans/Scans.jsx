import React from 'react'
import styles from './Scans.module.css'

const Scans = () => {
  return (
    <div className={styles.MainContainer}>
    <div className={styles.InnerTextMain}>
        <h1 className={styles.mainHeading}>
          LAUNCHPAD
        </h1>
        <h2 className={styles.heading}>
          Stabilize and Promote
        </h2>
        <p className={styles.text}>
          Amidst the competition in the Defi space, good marketing strategy and implementation plays the key role to stabilize and promote your growth in the blockchain industry. Retaining this awareness, we can develop launchpad and IDO for your presale and ICO. 
        </p>
    </div>
    <div className={styles.InnerImageMain}>
      <img src="/assets/images/2.png" width="100%"></img>
    </div>
  </div>
  )
}

export default Scans