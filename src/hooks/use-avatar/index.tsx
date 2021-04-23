import { createContext, Dispatch, useContext, useState } from 'react'

type Status = {
  start: boolean
  final: boolean
  error: boolean
}

type AvatarContextData = {
  src: string
  status: Status
  zoom: number
  setZoom: Dispatch<React.SetStateAction<number>>
  handleSave: () => void
  handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  handleCancel: () => void
}

export const AvatarContext = createContext({} as AvatarContextData)

type AvatarProviderProps = {
  children: React.ReactNode
}

const AvatarProvider = ({ children }: AvatarProviderProps) => {
  const [src, setSrc] = useState<string>('')
  const [zoom, setZoom] = useState<number>(1)
  const [status, setStatus] = useState<Status>({
    start: true,
    final: false,
    error: false
  })

  const types = ['image/png', 'image/jpeg', 'image/jpg']

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0]
      if (!types.includes(file.type)) {
        setSrc('')
        setStatus({ start: false, final: false, error: true })

        return null
      }
      setZoom(1)
      setStatus({ ...status, start: false, final: false })

      const imageData = await readFile(file)
      setSrc(String(imageData))
    }
  }

  const readFile = (file: File) => {
    return new Promise((resolve) => {
      const reader = new FileReader()
      reader.addEventListener('load', () => resolve(reader.result), false)
      reader.readAsDataURL(file)
    })
  }

  const handleCancel = () => {
    setSrc('')
    setStatus({ start: true, final: false, error: false })
  }

  const handleSave = () => {
    setStatus({ start: false, final: true, error: false })
  }

  return (
    <AvatarContext.Provider
      value={{
        src,
        zoom,
        setZoom,
        status,
        handleSave,
        handleFileChange,
        handleCancel
      }}
    >
      {children}
    </AvatarContext.Provider>
  )
}

const useAvatar = () => useContext(AvatarContext)

export { AvatarProvider, useAvatar }
