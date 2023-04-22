import React from "react";
import './FriendList.css'
import profileImg from './../images/person/1.jpeg'
import { GoPrimitiveDot } from "react-icons/go";

const FriendLists = (props) => {
  return (
    <div className="frinedlist">
      <div className="list1">
            <img src={profileImg} style={{width:40, height:40,borderRadius:50,border:"2px solid #fff", objectFit:"cover"}} alt='pro' />
            <p style={{fontWeight:500,marginLeft:10}}>Janeli Shrum</p>
        </div>
        <div className="list1">
            <img src={profileImg} style={{width:40, height:40,borderRadius:50,border:"2px solid #fff", objectFit:"cover"}} alt='pro' />
            <GoPrimitiveDot className="online"/>
            <p style={{fontWeight:500,marginLeft:10}}>Janeli Shrum</p>
        </div>
        <div className="list1">
            <img src={profileImg} style={{width:40, height:40,borderRadius:50,border:"2px solid #fff", objectFit:"cover"}} alt='pro' />
            <p style={{fontWeight:500,marginLeft:10}}>Janeli Shrum</p>
        </div>
        <div className="list1">
            <img src={profileImg} style={{width:40, height:40,borderRadius:50,border:"2px solid #fff", objectFit:"cover"}} alt='pro' />
            <p style={{fontWeight:500,marginLeft:10}}>Janeli Shrum</p>
        </div>
        <div className="list1">
            <img src={profileImg} style={{width:40, height:40,borderRadius:50,border:"2px solid #fff", objectFit:"cover"}} alt='pro' />
            <p style={{fontWeight:500,marginLeft:10}}>Janeli Shrum</p>
        </div>
        <div className="list1">
            <img src={profileImg} style={{width:40, height:40,borderRadius:50,border:"2px solid #fff", objectFit:"cover"}} alt='pro' />
            <p style={{fontWeight:500,marginLeft:10}}>Janeli Shrum</p>
        </div>
        <div className="list1">
            <img src={profileImg} style={{width:40, height:40,borderRadius:50,border:"2px solid #fff", objectFit:"cover"}} alt='pro' />
            <p style={{fontWeight:500,marginLeft:10}}>Janeli Shrum</p>
        </div>
        <div className="list1">
            <img src={profileImg} style={{width:40, height:40,borderRadius:50,border:"2px solid #fff", objectFit:"cover"}} alt='pro' />
            <p style={{fontWeight:500,marginLeft:10}}>Janeli Shrum</p>
        </div>


    </div>
  );
};

export default FriendLists;
