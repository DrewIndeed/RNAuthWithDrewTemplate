import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const messageSlice = createSlice({
  name: "message",
  initialState: {
    message: "Redux Example Initial Message"
  },
  reducers: {
    setMessage(state, action) {
      state.message = action.payload
    },
    resetMessage(state) {
      state.message = "Redux Example Initial Message"
    }
  }
})

export const { setMessage, resetMessage } = messageSlice.actions
export default messageSlice.reducer