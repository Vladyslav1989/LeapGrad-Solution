import React from 'react';

const CallDetails = ({calls })=>{
  
    return (
        <div>
        <div className="task" >
       
        <a href='/'><button  className='btn' style={{backgroundColor: 'green'}}>Back</button></a>
           <h3>Caller-ID:{calls.id}</h3>
           <h3>Date:{calls.created_at}</h3>
           <h3>Type of Call:{calls.direction}</h3>
           <h3>Call From:{calls.from}</h3>
           <h3>Call To:{calls.to}</h3>
           <h3>Call Duration:{calls.duration}</h3>
           <h3>Call Archive Status:{String(calls.is_archived)}</h3>
           <h3>Call Was:{calls.call_type}</h3>

        </div>
        </div>
    )

}

export default CallDetails