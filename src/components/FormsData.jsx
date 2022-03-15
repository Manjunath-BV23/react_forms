import "../App.css";
import { useState, useEffect } from "react";
import axios from "axios";


export const FormsData = () => {
  const [employeeData, setEmployeeData] = useState([])


  useEffect(() => {
      getData()
  }, [])

  const getData = () => {
    axios.get(`http://localhost:3001/users`).then(res => {
        setEmployeeData(res.data)
    })
}
  return (
    <div className="rentalContainer">
      {/* <div className="sortingButtons">
        <button className="sortById">Sort by ID</button>
        <button className="sortByRentAsc">Rent Low to high</button>
        <button className="sortByRentDesc">Rent High to low</button>
        <button className="sortByAreaAsc">Area Low to high</button>
        <button className="sortByAreaDesc">Area High to Low</button>
      </div>
      <input
        className="searchAddress"
        type="text"
        placeholder="Search Address"
      /> */}

      <h2>Employees Data</h2>
      
      <table className="table" border="1">
        <thead>
          <tr>
            <th>Sl.no</th>
            <th>Name</th>
            <th>Age</th>
            <th>Address</th>
            <th>Department</th>
            <th>Salary</th>
            <th>Marital State</th>
          </tr>
        </thead>
        <tbody>
          {employeeData.map((employee, index) => {
            return (
              <tr key={employee.id} className="employeeDetails">
                  <td>{employee.id}</td>
                <td className="employeeName">{employee.username} </td>
                <td className="age">{employee.age}</td>
                <td className="address">{employee.address}</td>
                <td className="department">{employee.department}</td>
                <td className="salary">{employee.salary}</td>
                <td className="preferredTenants">
                  {/* Show text Both or Bachelors or Married based on values */}
                  {employee.marital_state ? "Married":"Not Married"}
                
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
