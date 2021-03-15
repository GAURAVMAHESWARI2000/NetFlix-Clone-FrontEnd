import React,{useEffect, useState} from 'react'
import "./Nav.css"
function Nav(){
    const [show,handleShow] =useState(false)

    useEffect(()=>{
        window.addEventListener("scroll", ()=>{
            if(window.scrollY>100){
                handleShow(true);
            }else handleShow(false)
        });
        return()=>{
            window.removeEventListener("scroll");
        };
    },[])

    return(
        <div className={`nav ${show && "nav__black"}`}>
            <img 
               className="nav__logo"
               src="https://cdn.windowsreport.com/wp-content/uploads/2019/03/netflix-movie14-886x590.jpg"
               alt="Netflix -logo"
            />
        </div>
    )
}

export default Nav