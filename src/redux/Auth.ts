import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface UserInfoState {
  value: Array<{
    id: number;
    user_type: string;
    token: number;
  }>;
}

const initialState: UserInfoState = { value: [] };

export const userInfoSlice = createSlice({
  name: "UserInfo",
  initialState,
  reducers: {
    saveUserInfo: (
      state: UserInfoState,
      action: PayloadAction<{
        id: number;
        user_type: string;
        token: number;
      }>
    ) => {
      const { id, user_type, token } = action.payload;

      const index = state.value.findIndex((item) => item.id === id);
      if (index !== -1) {
        state.value[index].user_type = user_type;
        state.value[index].token = token;
      } else {
        state.value.push({ id, user_type, token });
      }
    },
    removeUserInfo: (state: UserInfoState, action: PayloadAction<number>) => {
      const keyToRemove = action.payload;

      state.value = state.value.filter((item) => item.id !== keyToRemove);
    },
  },
});

export default userInfoSlice.reducer;

export const { saveUserInfo, removeUserInfo } = userInfoSlice.actions;
