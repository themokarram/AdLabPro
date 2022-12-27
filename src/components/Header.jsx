import React from 'react'
import {Link} from 'react-router-dom'
import {HashLink} from 'react-router-hash-link'
import img8 from '../assets/AdLabPro.png'
import { AiOutlineMenu } from "react-icons/ai";

const Header = ({menuOpen,setMenuOpen}) => {
 
  return (
    <>
   <nav>
    <div>
    <HashLink to={'/#home'}><img src={img8} alt='logo' style={{display:'flex',alignItems:"center"
    ,backgroundColor:"transparent",maxHeight:"72px",marginLeft:"30px",minHeight:"auto"
    }} /></HashLink>
    
    </div>
     
     <main style={{
      padding:"5px",
      fontSize:'1.2rem',
      letterSpacing:'1px',
      fontWeight:'600',
    
    }}>
        <HashLink to={'/#home'} >Home</HashLink>
        <HashLink to={'/#about'}>About</HashLink>
        <Link to={'/services'} >Services</Link>
        <HashLink to={'/#clients'}>Clients</HashLink>
        <Link to={'/contacts'} >Contact Us</Link>
        <a href='mailto:themokarram@gmail.com' target={"blank"} style={{borderRadius:'2px',padding:"2px",
      outlineStyle:"double"}}>Enquiry</a>
        
    </main>
   </nav>
  <button className='navBtn' onClick={()=>setMenuOpen(!menuOpen)}> <AiOutlineMenu/> </button>
   
   </>
  )
};

 export const NavMenu=({menuOpen,setMenuOpen})=>{
  return(
    <div className={`navPhone ${menuOpen?"navPhoneComes":""}`} >
      <main style={{
      padding:"5px",
      fontSize:'1.2rem',
      letterSpacing:'1px',
      fontWeight:'600',
    
    }}>
        <HashLink to={'/#home'} onClick={()=>setMenuOpen(!menuOpen)} >Home</HashLink>
        <HashLink to={'/#about'} onClick={()=>setMenuOpen(!menuOpen)}>About</HashLink>
        <Link to={'/services'} onClick={()=>setMenuOpen(!menuOpen)} >Services</Link>
        <HashLink to={'/#clients'} onClick={()=>setMenuOpen(!menuOpen)}>Clients</HashLink>
        <Link to={'/contacts'} onClick={()=>setMenuOpen(!menuOpen)} >Contacts</Link>
        <a href='mailto:themokarram@gmail.com' target={"blank"} style={{borderRadius:'2px',padding:"2px",
      }}>Enquiry</a>
        
    </main>
    </div>
  )
}

export default Header
