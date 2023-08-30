import { useState, useEffect } from 'react'

import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import { getRequestAdress } from '../../utils/getRequestData';
import { getAdress } from '../../utils/axiosDocument';
import { AxiosError } from 'axios';
import { Loader } from '../../components/Loader';
import { Error } from '../../components/Error';
import { ListAdress } from '../../components/ListAdress';

export const Departments = () => {
  const [adress, setAdress] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<null | string>(null); 

  useEffect(() => {
    getAdress(getRequestAdress())
      .then(res => {
        setAdress(res.data);
        setLoading(false);
      })
      .catch((axiosError: AxiosError) => {
        setLoading(false);
        if (axiosError.request) {
          setError('Виникла помилка при отриманні даних.');
        }
      });
  }, []);
  console.log(error);

  return (
    <>
      <CssBaseline />
      <Container maxWidth="md" sx={{ bgcolor: '#cfe8fc', height: '100%' }}>
        {loading ? (
          <Loader />
        ) : error ? ( 
          <Error error={error} />
        ) : (
          <ListAdress address={adress}/>
        )}
      </Container>
    </>
  );
};


