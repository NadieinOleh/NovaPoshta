import { Box } from "@mui/system";

type Props = {
  error: string | null;
}

export const Error: React.FC<Props> = ({ error }) => {
  return (
    <Box 
      sx={{ 
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
       }}
    >
      Error: {error}
    </Box>
  )
}