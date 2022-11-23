import React from 'react';
import Navbar from '../components/Navbar';

const contact = ({posts}) => {
  console.log("receive posts", posts);
  return (
    <div>
      <Navbar/>
      <h1 style={{textAlign: "center"}}>
        <b>This is contact page</b>
        </h1>
      <div>
        <ul>
          {posts.map((post,i)=>(
            <div key={i} style={{textAlign:"center"}}>
                <h3>Username: {post.name} <br/><span>Email: {post.email}</span><br/>City: {post.address.city} </h3>
            </div>
))}
        </ul>
      </div>
    </div>
  )
}

export async function getStaticProps(){
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const posts = await res.json()
  return{
    props: {
      posts,              // posts: posts,
    },
  }
}
    
export default contact
