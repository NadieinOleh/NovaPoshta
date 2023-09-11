import { History } from '../History';
import { Info } from '../Info';

import Box from '@mui/material/Box';

export const InfoAndHistory = () => {
  return (
    <Box
      p={2}
      sx={{ 
        display: 'flex',
        gap: '10px',
        justifyContent: 'space-between',
        flexDirection: 'column'
      }}
    >
      <Info />
      <History />
    </Box>
  );
};
