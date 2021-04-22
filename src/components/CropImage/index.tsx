import { useState } from 'react'
import Cropper from 'react-easy-crop'

import styles from './cropImage.module.scss'

/**
 *
 * Cria a foto do perfil, como avatar.
 */

export const CropImage = () => {
  const [valueCrop, setValueCrop] = useState({ x: 0, y: 0 })

  return (
    <div className={styles.container} data-testid="cropped-image">
      <Cropper
        image={'https://avatars.githubusercontent.com/u/36991175?v=4'}
        crop={valueCrop}
        aspect={1}
        cropShape="round"
        onCropChange={setValueCrop}
        zoom={1}
        //onZoomChange={1}
        disableAutomaticStylesInjection
      />
    </div>
  )
}
