import React, { useCallback } from 'react';
import { RootState } from '../../app/store';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { fetchStatusDocuments, setInputText, setTtnNumber } from '../../features/documentSlice';
import { getRequestData } from '../../utils/getRequestData';

import debounce from 'lodash.debounce';

import { TextField } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import './index.scss';

type Props = {
  isValidTtn: boolean;
  isValidTtnMessage: string;
  setValidTtnMessage: (message: string) => void;
  label: string;
  setShowInfoAndHisory: (show: boolean) => void;
  setValidTtn: (isValid: boolean) => void;
}

export const TtnForm: React.FC<Props> = React.memo(({ 
  isValidTtn,
  isValidTtnMessage,
  setValidTtnMessage,
  setValidTtn,
  label,
  setShowInfoAndHisory
}) => {
  const dispatch = useAppDispatch();
  const inputValue = useAppSelector((state: RootState) => state.tracking.ttnNumber);
  const inputText = useAppSelector((state: RootState) => state.tracking.inputText);
  const loading = useAppSelector((state: RootState) => state.tracking.isLoading);

  const applyDebouncedQuery = useCallback(
    (value: string) => {
      debounce(() => {
        dispatch(setTtnNumber(value));
      }, 500)();
    },
    [dispatch]
  );
  
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    dispatch(setInputText(newValue))
    applyDebouncedQuery(newValue);
    setValidTtnMessage('TTN')
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setValidTtnMessage('Нажміть кнопку Перевірити ТТN');

    if (isValidTtn) {
      dispatch(fetchStatusDocuments(getRequestData(inputValue)));
      setValidTtn(false);
      dispatch(setTtnNumber(''));
      dispatch(setInputText(''))
      setValidTtnMessage('TTN');
      setShowInfoAndHisory(true)
    }
  };

  // if need to clear the input
  // const handleFocus = useCallback(() => {
  //   dispatch(setInputText(''));
  // }, [])

  return (
    <form 
      className="form" 
      onSubmit={handleSubmit}
      autoComplete="off"
    >
      <TextField
        label={isValidTtnMessage}
        variant="outlined"
        value={inputText}
        onChange={handleChange}
        // onFocus={handleFocus}
        sx={{ flexGrow: 2 }}
        InputLabelProps={{
          sx:
            label === 'Введіть правильний TTN'
              ? { color: '#e81510' }
              : label === 'TTN валидне, Нажміть кнопку Get Status TTN'
              ? { color: '#0048ba' }
              : label ==='Нажміть кнопку Перевірити ТТN'
              ? { color: '#e81510' }
              : null
        }}
      />
      <LoadingButton
          loading={loading}
          type="submit"
          variant="contained"
          color="primary"
          sx={{ flexGrow: 1 }}
        >
          <span>Get status TTN</span>
        </LoadingButton>
    </form>
  );
});