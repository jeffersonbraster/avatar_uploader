import { Slider as SliderMaterial } from '@material-ui/core'
import { useAvatar } from 'hooks/use-avatar'

import styles from './slider.module.scss'

export const Slider = () => {
  const { zoom, setZoom, handleSave } = useAvatar()

  console.log(zoom)

  return (
    <div className={styles.container}>
      <p>Crop</p>
      <SliderMaterial
        data-testid="slider"
        value={zoom}
        min={1}
        max={3}
        step={0.1}
        onChange={(e, zoom) => setZoom(zoom)}
        style={{ color: '#4340fa' }}
      />
      <button onClick={handleSave}>Save</button>
    </div>
  )
}
