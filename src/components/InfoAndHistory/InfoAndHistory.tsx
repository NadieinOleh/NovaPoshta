import { History } from '../History';
import { Info } from '../Info';

import Box from '@mui/material/Box';

type Props = {
  setShowInfoAndHisory: (show: boolean) => void;
}

export const InfoAndHistory: React.FC<Props> = ({setShowInfoAndHisory}) => {
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
      <History setShowInfoAndHisory={setShowInfoAndHisory}/>
    </Box>
  );
};
