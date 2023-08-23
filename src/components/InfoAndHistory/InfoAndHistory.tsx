import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';

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

export const Info = () => {
  

  return (
    <Box
      p={2}
      sx={{
        flexGrow: 2,
        border: '1px solid grey',
        borderRadius: '5px',
      }}
    >
   
      <Typography variant="h6" component="div">
        Статус доставки:
      </Typography>
      <Typography variant="body1" component="div">
        Відправлено:
      </Typography>
      <Typography variant="body1" component="div">
        Отримано:
      </Typography>
    </Box>
  );
};

export const History = () => {
  return (
    <Box
      p={2}
      sx={{
        flexGrow: 2,
        border: '1px solid grey',
        borderRadius: '5px',
      }}
    >
      <Typography variant="h6" component="div">
        Iсторія:
      </Typography>
    </Box>
  );
};
