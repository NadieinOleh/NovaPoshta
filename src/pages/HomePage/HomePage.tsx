import { useState } from 'react';

import { TtnForm } from '../../components/TtnForm';
import { ButtonsHeader } from '../../components/ButtonsHeader';
import { InfoAndHistory } from '../../components/InfoAndHistory';

import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';

export const HomePage = () => {
  const [isValidTtn, setValidTtn] = useState(false);
  const [isShowInfoAndHisory, setShowInfoAndHisory] = useState(false);
  const [isValidTtnMessage, setValidTtnMessage] = useState('TTN');

  return (
    <>
      <CssBaseline />
      <Container maxWidth="md" sx={{ bgcolor: '#cfe8fc', height: '100vh' }}>
        <ButtonsHeader
          setValidTtnMessage={setValidTtnMessage}
          setValidTtn={setValidTtn}
        />
        <TtnForm
          isValidTtn={isValidTtn}
          isValidTtnMessage={isValidTtnMessage}
          setValidTtnMessage={setValidTtnMessage}
          setValidTtn={setValidTtn}
          label={isValidTtnMessage}
          setShowInfoAndHisory={setShowInfoAndHisory}
        />
        {isShowInfoAndHisory && (
          <InfoAndHistory 
            setShowInfoAndHisory={setShowInfoAndHisory}
          />
        )}
      </Container>
    </>
  );
};
