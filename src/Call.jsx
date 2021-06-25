import React from 'react';
import {FiPhoneCall} from "react-icons/fi";
const Call =({call,CallDetail,archiveOne}) =>{
  

    return(
        <div>
           
        <div className={`call ${call.is_archived && 'reminder'}`}onDoubleClick={()=>CallDetail(call.id)}>
        <p >-----------------{call.created_at.split("T")[0]}-----------------</p>
            <h3><FiPhoneCall style={{ color: "#FF0000" }}/>{call.from}<span>{call.created_at.replace(/^[^:]*([0-2]\d:[0-5]\d).*$/, "$1")}</span></h3> 
            <p>tried to call on {call.to=== null ?"Unknown Number" :call.to} </p>
            <button  onClick={()=>archiveOne(call.id)}className="button5">Archive</button> 
            
            
        </div>
        </div>
    )
}

export default Call