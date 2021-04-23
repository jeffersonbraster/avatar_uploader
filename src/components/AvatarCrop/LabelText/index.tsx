import styles from './labelText.module.scss'

import { BsCardImage } from 'react-icons/bs'

export const LabelText = () => {
  return (
    <p className={styles.container}>
      <span>
        <BsCardImage title="Image Icon" /> <strong>Organization Logo</strong>
      </span>
      Drop the image here or click to browse.
    </p>
  )
}
