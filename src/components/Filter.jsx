import React from 'react'
import "./Filter.css"

function Filter() {
  return (
    <div className='container'>
        <div className="container-1">

            <h1 className='title'>Filter</h1>
            <label htmlFor="postDate" className="postDateLabel" id='Label'>Date Posted</label>
            <select name="postDate" id="" className="postDate">
                <option value="Last 24 Hours">Last 24 Hours</option>
            </select>

            <label htmlFor="jobType" className="jobTypeLabel" id='Label'>Job Type</label>
            <ul className="jobTypes">
                <li>
                    <input type="checkbox" name="jobTypeCheckBox" id="Label" />
                    <label htmlFor="jobTypeCheckBox">Full-Time</label>
                </li>
                <li>
                    <input type="checkbox" name="jobTypeCheckBox" id="Label" />
                    <label htmlFor="jobTypeCheckBox">Part-Time</label>
                </li> 
                <li>
                    <input type="checkbox" name="jobTypeCheckBox" id="Label" />
                    <label htmlFor="jobTypeCheckBox">Internship</label>
                </li> 
                <li>
                    <input type="checkbox" name="jobTypeCheckBox" id="Label" />
                    <label htmlFor="jobTypeCheckBox">Contract</label>
                </li> 
                <li>
                    <input type="checkbox" name="jobTypeCheckBox" id="Label" />
                    <label htmlFor="jobTypeCheckBox">Volunteer</label>
                </li>
            </ul>
            <label htmlFor="location" className="locationLabel" id='Label'>Location</label>
            <input type="text" name="" id="" className="locationInput" placeholder='Enter Your Location'/>
            

            <label htmlFor="experienceLevel" className="experienceLevelLabel" id='Label'>Experience Level</label>
            <select name="experienceLevel" id="" className="experienceLevel">
                <option value="Intermediate">Intermediate</option>
            </select>

            <label htmlFor="salaryRange" className="salaryRangeLabel" id='Label'>Salary Range</label>
            <input type="range" name="" id="" className="salaryRangeInput" />

            <label htmlFor="currency" className="currencyLabel" id='Label'>Currency</label>
            <select name="currency" id="" className="currency">
                <option value="dollar">Dollar($)</option>
            </select>

            <button className="resetToDefault">Reset all Filter</button>
        </div>
    </div>
  )
}

export default Filter