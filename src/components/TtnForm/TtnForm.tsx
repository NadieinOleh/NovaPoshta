import { useState } from 'react'
import { TextField, Button } from '@mui/material';

import './index.scss';

export const TtnForm = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <form className='form' onSubmit={handleSubmit}>
      <TextField
        label="TTN"
        variant="outlined"
        value={inputValue}
        onChange={handleInputChange}
        sx={{flexGrow: 2}} 
      />
      <Button 
        type="submit" 
        variant="contained" 
        color='primary'
        sx={{flexGrow: 1}} 
      >
        Get status TTN
      </Button>
  </form>
  )
}