import React,{useEffect,useState} from 'react'
import '../css/Navbar.css';
import logo from '../images/netflix-logo.jpg';
import smiley from '../images/netflix-logo-smile.png';

function Navbar() {
    
    const [appear,handleappear] = useState(false);
    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            if (window.scrollY>100){
                handleappear(true);
            }else handleappear(false);
        });
        return ()=>{
            window.removeEventListener("scroll");
        };
    },[]);
  return (
    <div><div className={`Nav ${appear && "nav_black"}`}>
    <img className='nav_logo' src={logo} alt="" />
    <img className='nav_avatar' src={smiley} alt="" />
</div></div>
  )
}

export default Navbar