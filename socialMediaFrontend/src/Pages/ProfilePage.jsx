import React from 'react';
import './ProfilePage.css'
import coverPhoto from './../images/post/3.jpeg'
import Photo from './../images/person/8.jpeg'
import Comment from "./../components/Comment";
import Post from "./../components/Post";
import FriendLists from '../components/FriendLists';
import ProfileInformation from '../components/ProfileInformation'

const ProfilePage = (props) => {
    return (
        <div className='profile'>
            <div className="profilephoto">
                <img src={coverPhoto} alt='cover-Photo' style={{width:"100%",height:"60%",objectFit:"cover"}}/>
                <img src={Photo} className='smallImage' alt='profile-Photo'/>
                <h2>Safak Kocaoglu</h2>
            </div>
            <div className="profileMain">
                <div className="profileBox1">
                    <Comment/>
                    <Post/>
                </div>
                <div className="profileBox2">
                    <ProfileInformation/>
                    <FriendLists/>
                </div>
            </div>
           
        </div>
    );
}

export default ProfilePage;