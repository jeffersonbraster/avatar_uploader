import { useAvatar } from 'hooks/use-avatar'
import styles from './imageInput.module.scss'

export const ImageInput = () => {
  const { handleFileChange } = useAvatar()

  return (
    <input
      aria-label="input-upload"
      className={styles.input}
      id="inputUpload"
      placeholder="Upload your file here"
      onChange={handleFileChange}
      type="file"
      accept="image/*"
    />
  )
}
