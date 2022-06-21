import {createSlice} from '@reduxjs/toolkit';

const messageSlice = createSlice({
  name: 'message',
  initialState: {
    content: 'Press "Say Greeting" for a sursprise',
  },
  reducers: {
    show: (state, action) => {
      state.content = action.payload;
    },
    hide: state => {
      state.content = 'Press "Say Greeting" for a sursprise';
    },
  },
});

export const {show, hide} = messageSlice.actions;
export default messageSlice.reducer;
