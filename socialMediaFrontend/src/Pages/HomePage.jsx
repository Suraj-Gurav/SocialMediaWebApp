import React from 'react';
import './HomePage.css'
import Navbar from './../components/Navbar';
import LeftSidebar from './../components/LeftSidebar';
import ProfilePage from './ProfilePage';
// import RightSidebar from './../components/RightSidebar';
// import PostArea from './../components/PostArea';

const HomePage = (props) => {
    return (
        <>
            <Navbar/> 
            <div className="main">
                <LeftSidebar/>
                <ProfilePage/>
                {/* <PostArea/>
                <RightSidebar/> */}
            </div> 
        </>
    );
}

export default HomePage;