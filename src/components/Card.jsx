import React from 'react'
import "./Card.css"
import { FaRegBookmark } from "react-icons/fa6";
import { IoMdShare } from "react-icons/io";

function Card() {
  return (
    <div className='Card'>
        <div className="container">
            <h2 className="logo">Logo</h2>
            <div className="cardTitle">
                <h1 className="cardName">Product Design</h1>
                <h3 className="companyName">Bentford Ltd.</h3>
                <ul className="cardTags">
                    <li>Remote</li>
                    <li>Full Time</li>
                    <li>$200-$1200</li>
                </ul>
            </div>

            <div className="icons">
            <FaRegBookmark />
            <IoMdShare />
            </div>
        </div>
        <p className="description">
        Design intuitive and visually appealing user interfaces for web and mobile applications. Conduct user research and create wireframes, prototypes, and mockups to improve user experience. Work closely with developers to implement designs.
        </p>

    </div>
  )
}

export default Card