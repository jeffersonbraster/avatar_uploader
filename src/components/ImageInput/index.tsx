import styles from './imageInput.module.scss'

export const ImageInput = () => {
  return (
    <input
      aria-label="input-upload"
      className={styles.input}
      id="inputUpload"
      placeholder="Upload your file here"
      //onChange={}
      type="file"
      accept="image/*"
    />
  )
}
