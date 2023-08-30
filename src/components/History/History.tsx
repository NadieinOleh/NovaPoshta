import { useEffect, useCallback } from 'react';
import {
  useAppDispatch,
  useAppSelector,
  useLocalStorage,
} from '../../app/hooks';
import {
  deleteTtnNumberArray,
  fetchStatusDocuments,
  setInputText,
} from '../../features/documentSlice';
import { getRequestData } from '../../utils/getRequestData';

import { Box, Button, Typography } from '@mui/material';

type Props = {
  setShowInfoAndHisory: (show: boolean) => void;
};

export const History: React.FC<Props> = ({ setShowInfoAndHisory }) => {
  const dispatch = useAppDispatch();
  const history = useAppSelector((state) => state.tracking.ttnNumberArray);
  const [historyStorage, setHistoryStorage] = useLocalStorage<string[]>(
    'history',
    []
  );

  useEffect(() => {
    setHistoryStorage(history);
  }, [history, setHistoryStorage]);

  const handleClearHistory = useCallback(() => {
    setShowInfoAndHisory(false);
    setHistoryStorage([]);
    dispatch(deleteTtnNumberArray([]));
    dispatch(setInputText(''))
  }, [dispatch, setHistoryStorage, setShowInfoAndHisory]);

  const getTtnData = useCallback(
    (ttn: string) => {
      dispatch(setInputText(ttn))
      dispatch(fetchStatusDocuments(getRequestData(ttn)));
    },
    [dispatch]
  );

  return (
    <Box
      p={2}
      sx={{
        border: '1px solid grey',
        borderRadius: '5px',
        height: 'max-content',
        width: '50%',
        placeItems: 'center',
      }}
    >
      <Typography variant="h6" component="div">
        Iсторія:
      </Typography>
      {historyStorage.map((item: string) => (
        <Typography
          key={item}
          variant="h6"
          component="div"
          sx={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}
          onClick={() => getTtnData(item)}
        >
          {item}
        </Typography>
      ))}
      <Button 
        sx={{ mt: 1 }} 
        variant="contained"
        onClick={handleClearHistory}
      >
        Очистити історію
      </Button>
    </Box>
  );
};
