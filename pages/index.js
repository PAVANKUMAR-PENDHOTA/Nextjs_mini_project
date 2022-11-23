import React from 'react';
import { useRouter } from 'next/router';


const index = () => {
    const router = useRouter();

    const clickHandle =()=>{
        router.push("/signup")
    }
    const clickHandle2 =()=>{
        router.push("/login")
    }

  return (
    <div style={{marginLeft:"626px"}}>
      <div style={{width:"500px",height:"150px", padding:"30px",color:"white",backgroundColor:"blue",marginTop:"100px", margin:"50px", cursor:"pointer"}}>
            <h1 style={{textAlign:"center"}} onClick={clickHandle}>Signup</h1>
      </div>
      <div style={{width:"500px",height:"150px", padding:"30px",color:"white",backgroundColor:"blue",margin:"50px", cursor:"pointer"}}>
            <h1 style={{textAlign:"center"}} onClick={clickHandle2}>Login</h1>
      </div>

    </div>
  )
}

export default index
