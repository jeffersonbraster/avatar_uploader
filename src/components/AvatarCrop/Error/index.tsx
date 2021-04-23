import { useAvatar } from 'hooks/use-avatar'
import { RiErrorWarningLine } from 'react-icons/ri'
import styles from './error.module.scss'

export const Error = () => {
  const { handleCancel } = useAvatar()

  return (
    <>
      <RiErrorWarningLine size={20} />
      <p className={styles.container}>
        Sorry, the upload failed.
        <strong onClick={handleCancel}>Try again</strong>
      </p>
    </>
  )
}
