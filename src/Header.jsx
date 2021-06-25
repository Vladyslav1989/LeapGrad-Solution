import React from 'react';



const Header =({title,onReset}) =>{

    return(
        <header className = "header">
            <h1>{title}</h1>            
            <a href='/'><button  className='btn' style={{backgroundColor: 'green'}}onClick={onReset}>Reset</button></a>
            
            
           
        </header>
    )
}

Header.defaultProps = {
    title: "Calls Log"
}

export  default  Header ; 

