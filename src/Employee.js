import { useDispatch, useSelector } from "react-redux";
import {
  setName,
  setAge,
  setCountryCode,
  setMobileNumber,
  setEmployeeData,
} from "./redux/employeeSlice";

const Employee = () => {
  const employee = useSelector((state) => state.employeeStore);
  const dispatch = useDispatch();

  const handleName = (e) => {
    dispatch(setName(e.target.value));
  };

  const handleAge = (e) => {
    dispatch(setAge(e.target.value));
  };

  const handleCountryCode = (e) => {
    dispatch(setCountryCode(e.target.value));
  };

  const handleMobileNumber = (e) => {
    dispatch(setMobileNumber(e.target.value));
  };

  const handleAddEmployee = (e) => {
    e.preventDefault()
    dispatch(
      setEmployeeData({
        empName: employee.name,
        empAge: employee.age,
        empCountryCode: employee.countryCode,
        empMobile: employee.mobileNumber,
      })
    );
    // Clear form fields
    dispatch(setName(""));
    dispatch(setAge(""));
    dispatch(setCountryCode("+")); // Default to "+"
    dispatch(setMobileNumber(""));
  };

  const tableStyle = {
    border: "1px solid black",
    borderCollapse: "collapse",
    width: "100%",
  };

  const thStyle = {
    border: "1px solid black",
    padding: "8px",
  };

  const tdStyle = {
    border: "1px solid black",
    padding: "8px",
    textAlign: "center",
  };

  return (
    <div>
      <style>
        {`
            body {
                font-family:sans-serif;
            }
            label {
                margin:10px 0;
                color:blue;
                font-size:x-large;
            }
            select,input:last-of-type,button {
                margin:0 0 10px 0;
            }
        `}
      </style>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <label>Name</label>
        <input type="text" onChange={handleName} value={employee.name} />
        <label>Age</label>
        <input type="number" onChange={handleAge} value={employee.age} />
        <label>Mobile Number</label>
        <select onChange={handleCountryCode} value={employee.countryCode}>
          <option value="+">{employee.countryCode}</option>
          <option value="+91">+91</option>
          <option value="+1">+1</option>
        </select>
        <input
          type="number"
          onChange={handleMobileNumber}
          value={employee.mobileNumber}
        />
        <button onClick={handleAddEmployee}>Add Employee</button>
      </form>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>S.No</th>
            <th style={thStyle}>Name</th>
            <th style={thStyle}>Age</th>
            <th style={thStyle}>Country Code</th>
            <th style={thStyle}>Mobile Number</th>
          </tr>
        </thead>
        <tbody>
          {employee.employeeData
            .filter((value) => value.empName) // Filter out empty objects
            .map((value, index) => (
              <tr key={index}>
                <td style={tdStyle}>{index + 1}</td>
                <td style={tdStyle}>{value.empName}</td>
                <td style={tdStyle}>{value.empAge}</td>
                <td style={tdStyle}>
                  {value.empCountryCode === "+" ? null : value.empCountryCode}
                </td>
                <td style={tdStyle}>{value.empMobile}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Employee;
