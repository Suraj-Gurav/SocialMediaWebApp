import React from 'react';
import './LeftSidebar.css'
import { MdMessage, MdGroup } from "react-icons/md";
import { FaUserAlt, FaVideo } from "react-icons/fa";
import { BsCalendar3, BsFillBookmarkFill, BsBag } from "react-icons/bs";
import FriendLists from './FriendLists';

const LeftSidebar =()=> {
    return (
        <div className='leftSidebar'>
            <div className="scrollbar">
                <ul className='list'>                  
                    <li><FaUserAlt/><span>Friends</span></li>
                    <li><MdMessage/><span>Chats</span></li>
                    <li><FaVideo/><span>Video</span></li>
                    <li><MdGroup/><span>Grops</span></li>
                    <li><BsCalendar3/><span>Birthday</span></li>
                    <li><BsFillBookmarkFill/><span>Bookmarks</span></li>
                    <li><BsBag/><span>Jobs</span></li>                 
                </ul>           
            </div>
            <hr/>
            <FriendLists/>
        </div>
    );
}

export default LeftSidebar;