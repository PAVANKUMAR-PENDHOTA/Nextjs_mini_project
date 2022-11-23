// import Navbar from "../components/Navbar";
import Link from "next/link";
import PostLayout from "../../layouts/postLayout";


export default function contact2() {
  return (
   
      // <Navbar/>
      <div>
            <h1>Index!</h1>
            <Link href="/post/postone"> Go to Postone</Link>
      </div>
    
  );
}

  contact2.Layout = PostLayout;


















// import { useRouter } from 'next/router';
// import Navbar from '../components/Navbar';

// function ActiveLink({ children, href }) {
//   const router = useRouter()
//   const style = {
//     marginRight: 10,
//     color: router.asPath === href ? 'red' : 'green',
//   }

//   const handleClick = (e) => {
//     e.preventDefault()
//     router.push(href)
//   }

//   return (
//     <div>
//       <Navbar/>
//       <a href={href} onClick={handleClick} style={style}>
         
//       <p>{children}</p>
//     </a>
//     </div>
//   )
// }

// export default ActiveLink;

// import React from 'react'

// const contact2 = () => {
//   return (
//     <div>
//       <h3>Hello World!!</h3>
//     </div>
//   )
// }

// export default contact2
