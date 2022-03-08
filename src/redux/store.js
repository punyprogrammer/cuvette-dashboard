import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./storeRedux";
export default configureStore({
  reducer: {
    data: dataReducer,
  },
});
