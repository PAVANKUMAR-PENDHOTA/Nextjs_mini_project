import { useRouter } from 'next/router';
import React from 'react';
import Navbar from '../components/Navbar';
import Home from './home';

const sidebar = () => {
 const router = useRouter();

  const sideList =()=>{
    router.push("/home" === <Home/> ? <Home/> : null)
  }
  return (
    <div>
      <Navbar/>
      <div style={{width:'255px',height:"930px", backgroundColor:"blue"}}>
      <div>
      <br/><br/>
      <span className='span' style={{color:"white", margin:"5px 0px 0px 50px"}} onClick={sideList}>Home </span> <br/><br/>
      <div style={{marginLeft:"500px"}}>
                  <p>Pavan</p>
            </div>
      <span className='span' style={{color:"white", margin:"5px 0px 0px 50px"}}>About </span> <br/><br/>
      <span className='span' style={{color:"white", margin:"5px 0px 0px 50px"}}>Contact </span>

      </div>
      
    </div>
            <div style={{marginLeft:"500px"}}>
                  <p>Pavan</p>
            </div>
    </div>
  )
}

export default sidebar

// import React from 'react';
// // import {Link, Outlet, useLocation} from 'next/router  ';
// // import sidebarStyle  from '../styles/sidebar.module.css';

// const sidebar = () => {
//   // const { pathname } = useLocation();

//   return (
//     <div>
//            {/* <div className="topnav">
//           <Link className="link" to="/home">
//             Home
//           </Link>
//           <Link className="link" to="/addedit">
//             Add
//           </Link>
//           <Link className="link" to="/photos">
//             Gallery
//           </Link>
//           <Link className="link" to="/outlet">
//             Profile
//           </Link>
//           <Link className="link" to="/posts">
//             Posts
//           </Link>
//           <Link className="link" to="/">
//             Logout
//           </Link> */}
//         </div>

//     </div>
//   )
// }

// export default sidebar
