
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import type {} from 'redux-thunk/extend-redux';
import { getDocument } from '../utils/axiosDocument';

interface TrackingState {
  ttnNumber: string | number,
  document: any[];
  error: string;
  isLoading: boolean;
}

const initialState: TrackingState = {
  ttnNumber: '',
  document: [],
  error: '',
  isLoading: false,
};

const trackingSlice = createSlice({
  name: 'tracking',
  initialState,
  reducers: {
    setTtnNumber(state, action: PayloadAction<number | string>) {
      state.ttnNumber = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchStatusDocuments.pending, (state) => {
      state.isLoading = true;
      state.error = ''; 
    });
    builder.addCase(fetchStatusDocuments.rejected, (state, action) => {
      state.error = 'Помилка при відправці запиту: ' + action.error.message;
      state.isLoading = false;
    });
    builder.addCase(fetchStatusDocuments.fulfilled, (state, action) => {
      const payloadData = action.payload.data;
    
      payloadData.forEach((item: any) => {
        const { Number, Status, WarehouseSender, WarehouseRecipient } = item;
    
        const numberExists = state.document.some(existingItem => existingItem.Number === Number);
    
        if (!numberExists) {
          state.document.push({ Number, Status, WarehouseSender, WarehouseRecipient });
        }
      });
    
      state.isLoading = false;
    });
  },
});

export const { setTtnNumber } = trackingSlice.actions;

export default trackingSlice.reducer;

export const fetchStatusDocuments = createAsyncThunk(
  'tracking/fetchStatusDocuments',
   (requestData: string) => getDocument(requestData)
);