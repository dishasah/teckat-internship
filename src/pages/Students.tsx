import React, { useEffect, useState } from "react";
import{ IStudent } from "../interface/student";
import { Link } from "react-router-dom";

import "./Students.scss";

const Students: React.FC = () => {

  const [allStudents, setAllStudents ] = useState<IStudent[]>();
  useEffect(()=>{
    const student = JSON.parse(localStorage.getItem("students")as string);
    setAllStudents(student)
console.log("student data",allStudents);
  },[]);


 
  return( 
  <> 
  <button title="Create Student" className="create_button">
    <Link to="/student/create-student">Create Student</Link>
  </button>
  <table id="registrationTable">
        <thead>
            <tr>
                <th>SL.NO.</th>
                <th>Name</th>
                <th>Age</th>
                <th>Phone Number</th>
                <th>Email ID</th>
            </tr>
        </thead>
        <tbody>
            <tr className="row-1">
                <td>1</td>
                <td>DISHA SAH</td>
                <td>20</td>
                <td>9341727209</td>
                <td>dishasah6@gmail.com</td>
            </tr>
            <tr className="row-2">
                <td>2</td>
                <td>KHUSHI SINGH</td>
                <td>20</td>
                <td>8956784351</td>
                <td>khushisingh6@gmail.com</td>
            </tr>
            <tr className="row-3">
                <td>3</td>
                <td>NIRBHAY SINGH</td>
                <td>20</td>
                <td>9876754322</td>
                <td>sahilsingh6@gmail.com</td>
            </tr>
            <tr className="row-4">
                <td>4</td>
                <td>SWEETY KUMARI</td>
                <td>20</td>
                <td>9876754893</td>
                <td>sweetykumari6@gmail.com</td>
            </tr>

        </tbody>
    </table>
  <br />
  <hr />

  </>
  );
};

export default Students;