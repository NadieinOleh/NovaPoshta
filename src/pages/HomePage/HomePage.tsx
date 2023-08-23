import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import { TtnForm } from '../../components/TtnForm';
import { ButtonsHeader } from '../../components/ButtonsHeader'
import { InfoAndHistory } from '../../components/InfoAndHistory';

export const HomePage = () => {
  return (
    <>
    <CssBaseline />
    <Container
      maxWidth="md"
      sx={{ bgcolor: '#cfe8fc', height: '100vh' }}
    >
      <ButtonsHeader />
      <TtnForm />
      <InfoAndHistory/>
    </Container>
  </>
  )
}



