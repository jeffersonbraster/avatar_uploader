import { useAvatar } from 'hooks/use-avatar'
import { Box } from './Box'
import { CropImage } from './CropImage'
import { Error } from './Error'
import { ImageInput } from './ImageInput'
import { LabelText } from './LabelText'
import { Slider } from './Slider'

export const AvatarCrop = () => {
  const {
    src,
    status: { start, error, final }
  } = useAvatar()

  return (
    <Box>
      {start && (
        <>
          <LabelText />
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
          <LabelText />
          <ImageInput />
        </>
      )}
      {error && <Error />}
    </Box>
  )
}
