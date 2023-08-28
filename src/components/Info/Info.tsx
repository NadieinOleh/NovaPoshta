import { Box, Typography } from "@mui/material";

export const Info = () => {
  return (
    <Box
      p={2}
      sx={{
        flexGrow: 2,
        border: '1px solid grey',
        borderRadius: '5px',
        height: 'max-content'
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