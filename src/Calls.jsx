import React from "react"
import Call from "./Call.jsx"


const Calls =({calls,CallDetail,archiveOne})=>{
   
    return(
        <div>
            {calls.map((call)=>(
            <Call 
            key={call.id} 
            call={call} 
            CallDetail={CallDetail}
            archiveOne={archiveOne}
             />
             ))}
             
        </div>
        
    )
}

export default Calls