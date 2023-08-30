import { useAppSelector } from '../../app/hooks';

import { Box, Typography } from '@mui/material';


export const Info = () => {
  const info = useAppSelector((state) => state.tracking.document);

  return (
    <Box
      p={2}
      sx={{
        border: '1px solid grey',
        borderRadius: '5px',
        height: 'max-content',
      }}
    >
      {info.map((item) => (
        <>
          <Typography variant="body1" component="div">
            Статус доставки: {item.Status}
          </Typography>
          <Typography variant="body1" component="div">
            Відправлено: {item.WarehouseSender}
          </Typography>
          <Typography variant="body1" component="div">
            Отримано: {item.WarehouseRecipient}
          </Typography>
        </>
      ))}
    </Box>
  );
};
