import { BsCardImage } from 'react-icons/bs'

import styles from './home.module.scss'

export default function Home() {
  return (
    <div className={styles.box}>
      <div className={styles.boxContainer}>
        <p className={styles.container}>
          <span>
            <BsCardImage title="Image Icon" />
            <strong>Organization Logo</strong>
          </span>
          Drop the image here or click to browse.
        </p>
      </div>
    </div>
  )
}
