import React from 'react';
import './Comments.css'
import profileImg1 from './../images/person/4.jpeg'
import { MdLocationOn } from "react-icons/md";
import { FcMms } from "react-icons/fc";
import { BsFillTagFill } from "react-icons/bs";
import { FaSmile } from "react-icons/fa";

const Comment = (props) => {
    return (
        <div className='comment'>
            <div className="commentBox">
                <img src={profileImg1} style={{width:40, height:40,borderRadius:50,border:"2px solid #fff", objectFit:"cover"}} alt='pro' />
                <input type='text' placeholder="What's in your mind safek...." id='comments' />
            </div>
           <div className="commentBox1">
                <div className="socialTagList">
                    <div className="photo">
                        <FcMms />
                        <span>Photo or Video</span>
                    </div>
                    <div className="photo">
                        <BsFillTagFill style={{color:'blue'}}/>
                        <span>Tag</span>
                    </div>
                    <div className="photo">
                        <MdLocationOn style={{color:'green'}}/>
                        <span>Location</span>
                    </div>
                    <div className="photo">
                        <FaSmile style={{color:'gold'}}/>
                        <span>Feeling</span>
                    </div>
                </div>
                <button className='shareBtn'>Share</button>
           </div>
        </div>
    );
}

export default Comment;