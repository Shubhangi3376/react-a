import React from 'react';
import './index.css';
const MyComponent = () => {
  return (
    <div>
      <h1>Personal Details</h1>
      <form action="http://localhost:3000/" method="post"></form>
        <label htmlFor="fname">First name:</label>
        <input type="text" id="fname" name="fname" /><br />
        <label htmlFor="lname">Last name:</label>
        <input type="text" id="lname" name="lname" /><br />
        <label htmlFor="contact">contact no:</label>
        <input type="number" id="number" /><br/>
        <label htmlFor="email">Email ID:</label>
        <input type="email" id="email" size={30}/><br /><br />
        <input type="submit" value="Submit" />
        <form action="http://localhost:3000/" >
      </form>
    </div>
  );
};

export default MyComponent;
