import { Box, Typography } from "@mui/material";
import { useEffect } from "react";
import { useAppSelector, useLocalStorage } from "../../app/hooks";


// interface
export const History = () => {
  const history = useAppSelector((state) => state.tracking.document);
  const [historyStorage, setHistoryStorage] = useLocalStorage<any[]>('history', []);

  console.log(history, historyStorage);
  
  useEffect(() => {
    setHistoryStorage(history);
  }, []);
  
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
        Iсторія:
        {history.map((item: any) => (
          <Typography key={item.Number} variant="h6" component="div"> 
            {item.Number}  
          </Typography>
        ))}
      </Typography>
    </Box>
  );
};