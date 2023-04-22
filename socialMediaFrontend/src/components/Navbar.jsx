import React from 'react';
import './Navbar.css'
import { FaUserAlt } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { BsFillBellFill } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import profileImg from './../images/person/1.jpeg'


const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="logo" style={{letterSpacing:3}}>Facebook</div>
            <div className="allLinks">
                <div className="serachBar">
                  <FaSearch style={{color:'black'}}/>
                    <input type='text' placeholder='Serach for friend, post or video...' id='search' />
                </div>
                <div className="links">
                    <ul className="pagesLink">
                        <li>HomePage</li>
                        <li>TimeLine</li>
                    </ul>
                </div>
                <div className="iconList ">
                    <ul className="pagesLink">
                        <li><FaUserAlt/><span className='count'>2</span></li>
                        <li><MdMessage style={{fontSize:20}}/><span className='count'>2</span></li>
                        <li><BsFillBellFill/><span className='count'>2</span></li>
                    </ul>
                </div>
                <div className="profileIcon">
                    <img src={profileImg} style={{width:35, height:35,borderRadius:50,border:"2px solid #fff",objectFit:"cover"}} alt='pro' />
                </div>
            </div>
        </div>
    );
}

export default Navbar;