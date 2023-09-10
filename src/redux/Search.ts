import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Products } from "types/type";

export interface searchData {
  value: Products[];
}

const initialState: searchData = {
  value: [],
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchData: (state, action: PayloadAction<searchData>) => {
      state.value = action.payload.value;
    },
  },
});

export default searchSlice.reducer;

export const { setSearchData } = searchSlice.actions;
