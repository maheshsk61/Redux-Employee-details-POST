import { configureStore } from "@reduxjs/toolkit";
import employeeReducer from "./employeeSlice"
const store=configureStore({
    reducer:{
        employeeStore:employeeReducer
    }
})
export default store