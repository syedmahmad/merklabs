import React from 'react'
import styles from './ExpertView.module.css'

const ExpertView = () => {
  return (
    <div className={styles.MainContainer}>
      <div className={styles.InnerTextMain}>
          <p className={styles.mainHeading}>
            Expert
          </p>
          <p className={styles.heading}>
            Expert Review
          </p>
          <p className={styles.text}>
            Experience the guidance of various trained professionals and developers who are with you at every phase of your projects. We not only develop your project but also give out the best recommendations for turning it into a huge success
          </p>
      </div>
      <div className={styles.InnerImageMain}>
        <img src="/assets/images/Discuss Illustration.png" width="100%"></img>
      </div>
    </div>
  )
}

export default ExpertView