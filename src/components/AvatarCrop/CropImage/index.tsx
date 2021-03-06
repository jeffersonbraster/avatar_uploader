import { useAvatar } from 'hooks/use-avatar'
import { useState } from 'react'
import Cropper from 'react-easy-crop'

import styles from './cropImage.module.scss'

/**
 *
 * Cria a foto do perfil, como avatar.
 */

export const CropImage = () => {
  const [valueCrop, setValueCrop] = useState({ x: 0, y: 0 })

  const { src, zoom, setZoom } = useAvatar()

  return (
    <div className={styles.container} data-testid="cropped-image">
      <Cropper
        image={src} //'https://avatars.githubusercontent.com/u/36991175?v=4'
        crop={valueCrop}
        aspect={1}
        cropShape="round"
        onCropChange={setValueCrop}
        zoom={Number(zoom)}
        onZoomChange={setZoom}
        disableAutomaticStylesInjection
      />
    </div>
  )
}
