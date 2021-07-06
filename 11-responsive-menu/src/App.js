import React,{useEffect,useState,useRef} from 'react'
//import Navbar from './Navbar'
import { FaBars, FaTwitter } from 'react-icons/fa'
import { links, social } from './data'
import logo from './logo.svg'
function App() {
  const [toggleMenu, setToggle]=useState(false);
  const linkConainerRef=useRef(null);
  const linkRef=useRef(null);

  useEffect(()=>{
    const menuHeight= linkRef.current.getBoundingClientRect().height;
    if(toggleMenu){
      linkConainerRef.current.style.height=`${menuHeight}px`
    }
    else{
      linkConainerRef.current.style.height='0px'
    }
  },[toggleMenu])

  return (
    <>
      <nav>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={logo} className='logo' alt='logo' />
          <button className='nav-toggle' onClick={ ()=> setToggle(!toggleMenu) }>
            <FaBars />
          </button>
        </div>
        
        <div className= "links-container" ref={linkConainerRef}>
          <ul className='links' ref={linkRef}>
            {links.map((link)=>{
              const {id,url,text}=link;
              return <li key={id}><a href={url}>{text}</a></li>
            })}
          </ul>
        </div>
        
        <ul className='social-icons'>
          
        </ul>
      </div>
  
    </nav>
    </>
  )
}

export default App
