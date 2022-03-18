import styles from '../styles/Home.module.css'
import Counting from '../components/counting/Counting'
import Verification from '../components/verification/Verification'
import AvoidErrors from '../components/avoid-errors/AvoidErrors'
import Detailed from '../components/detailed/Detailed'
import ExpertView from '../components/expert-view/ExpertView'
import EasyIntegration from '../components/easy-integration/EasyIntegration'
import Scans from '../components/scans/Scans'
export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.DotsImage}>
        <img src="/assets/images/Group 7141.png" height="225px" width="225px" />
      </div>
      <Counting />
      <Verification />
      <div className={styles.Neon2}>
        <img className={styles.Neo2Image} src="/assets/images/Neon 3.png" height="605px" width="661px" />
      </div>
      <AvoidErrors />
      <Detailed />
      <div className={styles.Neon3}>
        <img className={styles.Neo3Image} src="/assets/images/Neon 2.png" height="605px" width="661px" />
      </div>
      <ExpertView />
      <EasyIntegration />
      <div className={styles.Neon2}>
        <img className={styles.Neo4Image} src="/assets/images/Neon 3.png" height="605px" width="661px" />
      </div>
      <Scans />
    </div>
  )
}
