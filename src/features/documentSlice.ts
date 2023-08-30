import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import type {} from 'redux-thunk/extend-redux';
import { getDocument } from '../utils/axiosDocument';

import { Ttn } from '../types/Ttn';

interface TrackingState {
  ttnNumber: string,
  inputText: string
  ttnNumberArray: string[],
  document: any[];
  error: string;
  isLoading: boolean;
}

const initialState: TrackingState = {
  ttnNumber: '',
  inputText: '',
  ttnNumberArray: [],
  document: [],
  error: '',
  isLoading: false,
};

const trackingSlice = createSlice({
  name: 'tracking',
  initialState,
  reducers: {
    setTtnNumber(state, action: PayloadAction<string>) {
      state.ttnNumber = action.payload;
    },
    setInputText(state, action: PayloadAction<string>) {
      state.inputText = action.payload;
    },
    deleteTtnNumberArray(state, action: PayloadAction<string[]>) {
      state.ttnNumberArray = action.payload;
      console.log('action ', action.payload);
      
    },
    setTtnDocument(state, action: PayloadAction<Ttn[]>) {
      state.document = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchStatusDocuments.pending, (state) => {
      state.isLoading = true;
      state.error = ''; 
    });
    builder.addCase(fetchStatusDocuments.rejected, (state, action) => {
      state.error = 'Помилка при запиті: ' + action.error.message;
      state.isLoading = false;
    });
    builder.addCase(fetchStatusDocuments.fulfilled, (state, action) => {
      const payloadData = action.payload.data;
    
      payloadData.forEach((item: any) => {
        const { Number, Status, WarehouseSender, WarehouseRecipient } = item;
    
        const numberExists = state.document.some(existingItem => existingItem.Number === Number);
    
        const numberExistsArray = state.ttnNumberArray.some(existingItem => existingItem === Number);
    
        if (!numberExistsArray) {
          state.ttnNumberArray.push(Number)
        }

        if (!numberExists) {
          state.document = [{ Number, Status, WarehouseSender, WarehouseRecipient }];
        }
      });
    
      state.isLoading = false;
    });
  },
});

export const { setTtnNumber, setTtnDocument, deleteTtnNumberArray, setInputText } = trackingSlice.actions;

export default trackingSlice.reducer;

export const fetchStatusDocuments = createAsyncThunk(
  'tracking/fetchStatusDocuments',
   (requestData: string) => getDocument(requestData)
);