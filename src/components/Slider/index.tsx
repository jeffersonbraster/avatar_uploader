import { Slider as SliderMaterial } from '@material-ui/core'

import styles from './slider.module.scss'

export const Slider = () => {
  return (
    <div className={styles.container}>
      <p>Crop</p>
      <SliderMaterial
        data-testid="slider"
        //value={}
        min={1}
        max={3}
        step={0.1}
        //onChange={}
        style={{ color: '#4340fa' }}
      />
      <button>Save</button>
    </div>
  )
}
