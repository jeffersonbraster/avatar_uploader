import styles from './box.module.scss'

type BoxProps = {
  children: React.ReactNode
}

export const Box = ({ children }: BoxProps) => {
  return (
    <div className={styles.box}>
      <div className={styles.boxContainer}>{children}</div>
    </div>
  )
}
