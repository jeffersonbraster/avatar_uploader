import { BsX } from 'react-icons/bs'
import { useAvatar } from 'hooks/use-avatar'
import styles from './buttonClose.module.scss'

export const ButtonClose = () => {
  const { handleCancel } = useAvatar()

  return (
    <button type="button" className={styles.container} onClick={handleCancel}>
      <BsX size="20px" />
    </button>
  )
}
