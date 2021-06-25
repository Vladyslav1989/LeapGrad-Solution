import React from 'react';
import { BrowserRouter , Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import ReactDOM from 'react-dom';
import Calls  from './Calls.jsx';
import CallDetails from './CallDetails.jsx';
import Header  from './Header.jsx';


const App = () => {
  //State for Calls Information
const[calls,setCalls] = useState([])
//Sate for activating components
const [active,setActive] =useState("FirstState")

//Fetching Data from API  and setting State 
useEffect(()=>{
    fetch('https://aircall-job.herokuapp.com/activities')
    .then(response => response.json())
    .then(data => setCalls(data));
    
},[])
// Fetchinf Data from API by call-ID  and activate CallDetails Component 
const CallDetail =(id)=>{
  fetch(`https://aircall-job.herokuapp.com/activities/${id}`)
    .then(response => response.json())
    .then(data => setCalls(data)); 
  setActive("SecondState")
}

// Fetchind Data from APi and Setting  value of  "is_archived" to true of by Call-ID 
const archiveOne=(id)=>{  
  fetch(`https://aircall-job.herokuapp.com/activities/${id}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'     
    },   
    body: JSON.stringify({
      "is_archived": true
    })
  })  
  .then(response => response.json())
  .then(data => console.log(data));  
}

// Reset  all "is_archived" to false 
const resetArchive=()=>{
  fetch(`https://aircall-job.herokuapp.com/reset`)
  .then(response => response.json())
  .then(data => setCalls(data));
}

  return (
      <BrowserRouter>
        <Route
          path='/'
          exact
          render={() => (
    <div className='container'>   
      { active ==="SecondState" && <CallDetails  calls = {calls}  /> }  
      { active ==="FirstState" && <Header  onReset={resetArchive}/>  }  
      { active ==="FirstState" &&  <Calls calls = {calls} CallDetail={CallDetail}  archiveOne={archiveOne}/>}     
    </div>
       )}
       />
    </BrowserRouter>
  );
};

ReactDOM.render(<App/>, document.getElementById('app'));

export default App;
