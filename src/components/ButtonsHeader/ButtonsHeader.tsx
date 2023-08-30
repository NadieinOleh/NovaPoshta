import { RootState } from '../../app/store';
import React from 'react';
import { Link } from 'react-router-dom';

import Box from '@mui/material/Box';
import { Button } from '@mui/material';

import { styleButtom } from '../../utils/variables';
import { useAppSelector } from '../../app/hooks';

type Props = {
  setValidTtn: (isvalid: boolean) => void;
  setValidTtnMessage: (message: string) => void;
}

export const ButtonsHeader: React.FC<Props> = React.memo(({
  setValidTtn,
  setValidTtnMessage,
}) => {
  const styleBox = {
    p: 3,
    display: 'flex',
    gap: '10px',
    justifyContent: 'center',
    alignItems: 'center',
  }

  const ttn = useAppSelector((state: RootState) => state.tracking.ttnNumber)

  const handleIsValidTtnNumber = (ttnNumber: string) => {
    const ttnPattern = /^\d{14}$/;
    
    if (!ttnPattern.test(ttnNumber)) {
      setValidTtnMessage('Введіть правильний TTN');
    } else {
      setValidTtnMessage('TTN валидне, Нажміть кнопку Get Status TTN');
    }

    setValidTtn(ttnPattern.test(ttnNumber));
  };
  
  return (
    <Box
    component="div"
    sx={styleBox}
  >
    <Button 
      variant="contained" 
      sx={styleButtom}
      onClick={() => handleIsValidTtnNumber(ttn)}
    >
      Перевірити ТТН
    </Button>
    <Button component={Link} sx={styleButtom} to="/departments" variant="contained">
      Список відділень
    </Button>
  </Box>
  )
});