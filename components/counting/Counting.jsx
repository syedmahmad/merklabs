import React from 'react'
import styles from './Counting.module.css'

const Counting = () => {
  return (
    <div className={styles.MainContainer}>
      <div className={styles.InnerTextMain}>
          <div className={styles.heading}>
             We provide The Best To Protect Your Users And Their Investments
          </div>
          <p className={styles.text}>
            Merklabs is a reputed name in the field of blockchain technology encompassing all the segments of this revolutionary field. Pioneering the essence of blockchain security and audits, we secure your present and future through the parameters of technology. 
          </p>
      </div>
      <div className={styles.InnerImageMain}>
        <img src="/assets/images/Glass.png" width="100%"></img>
      </div>
    </div>
  )
}

export default Counting