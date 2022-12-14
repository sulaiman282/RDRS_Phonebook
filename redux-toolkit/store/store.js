import { configureStore } from "@reduxjs/toolkit";
import addUserSlices from "../features/addUser/addUserSlice";
import addAllMembers from "../features/addAllUsers/addAllMembersSlice";

//configure store
const store = configureStore({
  reducer: {
    User: addUserSlices,
    AllUser:addAllMembers,
  },
});

export default store;
