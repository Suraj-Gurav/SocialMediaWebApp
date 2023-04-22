import React from 'react';
import './RightSidebar.css'
import FriendList from './FriendLists'
import ads from './../images/ad.png'

const RightSidebar =(props) => {
    return (
        <div className='rightSidebar'>
            <div className="ads">
                <img src={ads} style={{width:350, height:200, borderRadius:10}} alt='facebookAds'/>
            </div>
            <p style={{padding:"10px 0",textAlign:'start', fontWeight:'bold'}}>Online Friends</p>
           <FriendList/>
        </div>
    );
}

export default RightSidebar;