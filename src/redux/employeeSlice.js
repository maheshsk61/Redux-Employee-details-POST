import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  name: "",
  age: "",
  countryCode: "+",
  mobileNumber: "",
  employeeData: [
    {
      name: "",
      age: "",
      countryCode: "+",
      mobileNumber: "",
    },
  ],
};
const employeeSlice = createSlice({
  name: "EmployeeData",
  initialState,
  reducers: {
    setName(state, action) {
      state.name = action.payload;
      console.log(`Name : ${state.name}`);
    },
    setAge(state, action) {
      state.age = action.payload;
      console.log(`Age : ${state.age}`);
    },
    setCountryCode(state, action) {
      state.countryCode = action.payload;
      console.log(`Country code : ${state.countryCode}`);
    },
    setMobileNumber(state, action) {
      state.mobileNumber = action.payload;
      console.log(`Mobile Number : ${state.mobileNumber}`);
    },
    setEmployeeData(state, action) {
      state.employeeData = [...state.employeeData, action.payload];
      console.log(
        `Employee Data : ${JSON.stringify(state.employeeData, null, 3)}`
      );
      // JSON.stringify(value, replacer, space);
      // value: The JavaScript value you want to convert to a JSON string.
      // replacer: An optional parameter that can be a function or an array used to filter or modify the output. If null, no filtering is applied.
      // space: An optional parameter that specifies the number of spaces to use for indentation in the output. It can be a number or a string.
    },
  },
});
export default employeeSlice.reducer;
export const {
  setName,
  setAge,
  setCountryCode,
  setMobileNumber,
  setEmployeeData,
} = employeeSlice.actions;
