import { CircularProgress } from "@mui/material"

export const Loader = () => {
  return (
    <CircularProgress 
      sx={{ 
        position: 'absolute',
        top: '50%',
        left: '50%'
      }} 
    />
  )
}