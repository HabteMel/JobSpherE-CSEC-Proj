import React from 'react'
import "./NavBar.css"

function NavBar() {
  return (
    <div>
        <nav>
            <h1 className="logo">JobSphere</h1>
            <ul className="navBarOptions">
                <li>Job Search</li>
                <li>My Applications</li>
                <li>Companies</li>
                <li>Contact Us</li>
            </ul>
            <div className="navBarButtons">
                <button className="LogInButton">LogIn</button>
                <button className="signUpButton">SignUp</button>
            </div>
        </nav>
    </div>
  )
}

export default NavBar