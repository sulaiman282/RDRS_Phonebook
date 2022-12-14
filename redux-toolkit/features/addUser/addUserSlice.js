import { createSlice } from "@reduxjs/toolkit";

const UserData = {
  name: "",
  age: "",
  country: "",
  description: "",
};

const addUserSlices = createSlice({
  name: "User",
  initialState: UserData,
  reducers: {
    addUser: (state, action) => {
      state.name = action.payload.name;
      state.age = action.payload.age;
      state.country = action.payload.country;
      state.description = action.payload.description;
    },
    
  },
});

export default addUserSlices.reducer;
export const addUserActions = addUserSlices.actions;
