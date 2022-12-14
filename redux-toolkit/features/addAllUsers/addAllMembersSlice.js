import { createSlice } from "@reduxjs/toolkit";

const AllUserData = {
  data: "",
 
};

const addAllMembers = createSlice({
  name: "AllUser",
  initialState: AllUserData,
  reducers: {
    addAllmembers: (state, action) => {
      state.data = action.payload;
   
    },
    
  },
});

export default addAllMembers.reducer;
export const addAllMembersActions = addAllMembers.actions;
