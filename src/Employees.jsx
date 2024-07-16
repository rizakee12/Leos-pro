// src/Employees.js
import React from 'react';
import Employee from './Employee';

// Utility function to generate random integer between min and max (inclusive)
const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const Employees = () => {
  const positions = [
    'Project Manager', 'Software Developer', 'UI/UX Designer',
    'Product Manager', 'Backend Developer', 'Graphic Designer' , 'Frontend Developer','Program Analysis'
  ];
  const statusOptions = ['Active', 'Not Active'];

  const employees = [
    { name: 'Angelo Brosyo', position: 'Project Manager', salary: getRandomInt(80000, 120000), status: 'Active' },
    { name: 'Arnold Schwarzenegger', position: 'Software Developer', salary: getRandomInt(70000, 100000), status: 'Active' },
    { name: 'Robert Downey Jr.', position: 'UI/UX Designer', salary: getRandomInt(60000, 90000), status: 'Active' },
    { name: 'Leonardo DiCaprio', position: 'Product Manager', salary: getRandomInt(90000, 130000), status: 'Active' },
    { name: 'Tom Cruise', position: 'Backend Developer', salary: getRandomInt(75000, 110000), status: 'Active' },
    { name: 'Johnny Depp', position: 'Graphic Designer', salary: getRandomInt(55000, 80000), status: 'Active' },
    { name: 'Chris Evans', position: 'Product Manager', status: 'Not Active' },
    { name: 'Brad Pitt', position: 'Backend Developer', status: 'Not Active' },
    { name: 'Will Smith', position: 'Frontend Developer', salary: getRandomInt(55000, 80000), status: 'Active' },
    { name: 'George Clooney', position: 'Program Analysis', salary: getRandomInt(55000, 80000), status: 'Active' },
  ];

  return (
    <div>
      <h1>Employees</h1>
      <table>
        <thead>
          <tr>
            <th>No.</th>
            <th>Employee Name</th>
            <th>Position</th>
            <th>Salary</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee, index) => (
            <Employee key={index} index={index} employee={employee} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Employees;
