import React from 'react'
import styles from './Detailed.module.css'

const Detailed = () => {
  return (
    <div className={styles.MainContainer}>
      <div className={styles.InnerImageMain}>
        <img src="/assets/images/Development Illustration.png" width="100%"></img>
      </div>
      <div className={styles.InnerTextMain}>
          <h1 className={styles.mainHeading}>
            AUDIT
          </h1>
          <h2 className={styles.heading}>
            Stay secure and safe
          </h2>
          <p className={styles.text}>
            Above all that matters is a secure and safe smart contract that is free from any vulnerability and does not hamper the investment of the various people who have trusted you. We also provide auditing services , so that you can stay assured of the security as we are quick in auditing and exposing the bugs of your smart contract.
          </p>
      </div>
    </div>
  )
}

export default Detailed