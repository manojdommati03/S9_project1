import React from 'react'

const Master = () => {
  return (
    <div>
       <h2>Registration Form</h2>

      <form>
        <label>Name:</label><br />
        <input type="text" placeholder="Enter name" /><br /><br />

        <label>Email:</label><br />
        <input type="email" placeholder="Enter email" /><br /><br />

        <label>Password:</label><br />
        <input type="password" placeholder="Enter password" /><br /><br />

        <label>Gender:</label><br />
        <input type="radio" name="gender" /> Male
        <input type="radio" name="gender" /> Female<br /><br />

        <label>Course:</label><br />
        <select>
          <option>React</option>
          <option>Java</option>
          <option>Python</option>
        </select><br /><br />

        <button type="submit">Register</button>
      </form>
    </div>
  )
}

export default Master
