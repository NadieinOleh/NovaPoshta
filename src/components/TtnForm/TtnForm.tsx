import { TextField, Button } from '@mui/material';
import './index.scss';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { fetchStatusDocuments, setTtnNumber } from '../../features/documentSlice';
import { getRequestData } from '../../utils/getRequestData';

export const TtnForm = () => {
  const dispatch = useAppDispatch();
  const inputValue = useAppSelector((state) => state.tracking.ttnNumber);

  console.log(inputValue);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setTtnNumber(event.target.value));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const handleFetchStatusDocuments = () => {
    dispatch(fetchStatusDocuments(getRequestData(inputValue)));
    dispatch(setTtnNumber(''));
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <TextField
        label="TTN"
        variant="outlined"
        value={inputValue}
        onChange={handleInputChange}
        sx={{ flexGrow: 2 }}
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        sx={{ flexGrow: 1 }}
        onClick={handleFetchStatusDocuments}
      >
        Get status TTN
      </Button>
    </form>
  );
};
