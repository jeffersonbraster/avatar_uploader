import { ButtonClose } from 'components/ButtonClose'
import { CropImage } from 'components/CropImage'
import { ImageInput } from 'components/ImageInput'
import { Slider } from 'components/Slider'
import { useAvatar } from 'hooks/use-avatar'
import { BsCardImage } from 'react-icons/bs'

import styles from './home.module.scss'

export default function Home() {
  const {
    src,
    status: { start, error, final }
  } = useAvatar()

  return (
    <div className={styles.box}>
      <div className={styles.boxContainer}>
        {start && (
          <>
            <p className={styles.container}>
              <span>
                <BsCardImage title="Image Icon" />
                <strong>Organization Logo</strong>
                Drop the image here or click to browse.
              </span>
            </p>
            <ImageInput />
          </>
        )}

        {src && !final && (
          <>
            <CropImage />
            <Slider />
          </>
        )}

        {final && (
          <>
            <CropImage />

            <p className={styles.container}>
              <span>
                <BsCardImage title="Image Icon" />
                <strong>Organization Logo</strong>
                Drop the image here or click to browse.
              </span>
            </p>

            <ImageInput />
          </>
        )}

        {!start && !final && <ButtonClose />}
      </div>
    </div>
  )
}
