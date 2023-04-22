import React from 'react';
import './Post.css'
import img1 from './../images/post/1.jpeg';
import profileImg from './../images/person/1.jpeg'
import like from './../images/like.png'
import heart from './../images/heart.png'
import { BsThreeDotsVertical } from "react-icons/bs";

const Post = (props) =>{
    return (
        <>
        <div className='post'>
            <div className="infoPost">
                <div className="userName">
                    <img src={profileImg} style={{width:40, height:40,borderRadius:50,border:"2px solid #fff", objectFit:"cover"}} alt='pro' />
                    <p style={{fontWeight:500,marginLeft:10}}>Janeli Shrum</p>
                    <p style={{fontWeight:300,marginLeft:10,color:'grey',fontSize:12}}>5 mins ago</p>
                </div>
                <BsThreeDotsVertical/>
            </div>
            <p style={{textAlign:'start',padding:"7px 0"}}>hello this my first post...</p>
            <img src={img1} alt='facebookPost' style={{width:"100%", height:"100%",objectFit:"cover"}}/>
            <div className="postBottom">
                <div className="buttons"> 
                    <img src={like} className='likeCommentBtn' alt='like' />
                    <img src={heart} className='likeCommentBtn' alt='heart' />
                    <span>32 likes and 20 hearts</span>
                </div>
                <span>10 comments</span>
            </div>  
        </div>
        <div className='post'>
            <div className="infoPost">
                <div className="userName">
                    <img src={profileImg} style={{width:40, height:40,borderRadius:50,border:"2px solid #fff", objectFit:"cover"}} alt='pro' />
                    <p style={{fontWeight:500,marginLeft:10}}>Janeli Shrum</p>
                    <p style={{fontWeight:300,marginLeft:10,color:'grey',fontSize:12}}>5 mins ago</p>
                </div>
                <BsThreeDotsVertical/>
            </div>
            <p style={{textAlign:'start',padding:"7px 0"}}>hello this my first post...</p>
            <img src={img1} alt='facebookPost' style={{width:"100%", height:"100%",objectFit:"cover"}}/>
            <div className="postBottom">
                <div className="buttons"> 
                    <img src={like} className='likeCommentBtn' alt='like' />
                    <img src={heart} className='likeCommentBtn' alt='heart' />
                    <span>32 likes and 20 hearts</span>
                </div>
                <span>10 comments</span>
            </div>  
        </div>
        <div className='post'>
            <div className="infoPost">
                <div className="userName">
                    <img src={profileImg} style={{width:40, height:40,borderRadius:50,border:"2px solid #fff", objectFit:"cover"}} alt='pro' />
                    <p style={{fontWeight:500,marginLeft:10}}>Janeli Shrum</p>
                    <p style={{fontWeight:300,marginLeft:10,color:'grey',fontSize:12}}>5 mins ago</p>
                </div>
                <BsThreeDotsVertical/>
            </div>
            <p style={{textAlign:'start',padding:"7px 0"}}>hello this my first post...</p>
            <img src={img1} alt='facebookPost' style={{width:"100%", height:"100%",objectFit:"cover"}}/>
            <div className="postBottom">
                <div className="buttons"> 
                    <img src={like} className='likeCommentBtn' alt='like' />
                    <img src={heart} className='likeCommentBtn' alt='heart' />
                    <span>32 likes and 20 hearts</span>
                </div>
                <span>10 comments</span>
            </div>  
        </div>
        </>
    );
}

export default Post;