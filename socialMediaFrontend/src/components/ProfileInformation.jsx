import React from 'react';
import "./ProfileInformation.css"

const ProfileInformation = (props)=> {
    return (
        <div style={{textAlign:'start'}}>
            <h3 style={{borderBottom:"1px solid black",paddingBottom:"5px",marginBottom:"10px"}}>User Information</h3>
            <p style={{padding:"5px 0"}}><span style={{fontWeight:"bold"}}>City : </span>Noida </p>
            <p style={{padding:"5px 0"}}><span style={{fontWeight:"bold"}}>From : </span>India </p>
            <p style={{padding:"5px 0"}}><span style={{fontWeight:"bold"}}>Relationship : </span>single </p>
            <p style={{padding:"5px 0"}}><span style={{fontWeight:"bold"}}>Birth-Date : </span>12-03-2015 </p>
        </div>
    );
}

export default ProfileInformation;