import { createSlice } from "@reduxjs/toolkit";
import { data} from "../data/dummyData";
const dataSlice = createSlice({
  name: "data",
  initialState: {
    data: data,

  },
  reducers: {
    changeData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { changeData } = dataSlice.actions;
export default dataSlice.reducer;