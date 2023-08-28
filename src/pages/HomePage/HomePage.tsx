import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import { TtnForm } from '../../components/TtnForm';
import { ButtonsHeader } from '../../components/ButtonsHeader';
import { InfoAndHistory } from '../../components/InfoAndHistory';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { fetchStatusDocuments } from '../../features/documentSlice';
import { getRequestData } from '../../utils/getRequestData';
export const HomePage = () => {

  const ttn: string | number = useAppSelector(
    (state) => state.tracking.ttnNumber
  );
  const data = useAppSelector((state) => state.tracking.document);

  console.log(data);
  
  
  return (
    <>
      <CssBaseline />
      <Container maxWidth="md" sx={{ bgcolor: '#cfe8fc', height: '100vh' }}>
        <ButtonsHeader />
        <TtnForm />
        <InfoAndHistory />
      </Container>
    </>
  );
};
