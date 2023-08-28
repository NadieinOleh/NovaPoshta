import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import { History } from '../History';
import { Info } from '../Info';

export const InfoAndHistory = () => {
  const matches = useMediaQuery('(min-width:600px)');

  return (
    <Box
      p={2}
      sx={{ display: 'flex', gap: '10px', justifyContent: 'space-between', flexDirection: matches ? 'row' : 'column' }}
    >
      <Info />
      <History />
    </Box>
  );
};
