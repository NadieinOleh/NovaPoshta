import { Link } from 'react-router-dom';

import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import { styleButtom } from '../../utils/variables';

export const ButtonsHeader = () => {
  const styleBox = {
    p: 3,
    display: 'flex',
    gap: '10px',
    justifyContent: 'center',
    alignItems: 'center',
  }

  return (
    <Box
    component="div"
    sx={styleBox}
  >
    <Button variant="contained" sx={styleButtom}>
      Перевірити ТТН
    </Button>
    <Button component={Link} sx={styleButtom} to="/departments" variant="contained">
      Список відділень
    </Button>
  </Box>
  )
};