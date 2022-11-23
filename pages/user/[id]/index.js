import React from 'react';
import HomeStyles from '../../../styles/Home.module.css';

const index = ({user}) => {
  return (
    <div>

      {user && 
      <main className={HomeStyles.main}>
        <h2>Full details of <b>{user.name}</b></h2>
      <div className={HomeStyles.grid}>
           <div className={HomeStyles.card} key={user.id}>
              <p>Name    : {user.name}</p>
              <p>Email   : {user.email}</p>
              <p>Phone   : {user.phone}</p>
              <p>Website : {user.company.name}</p>
              <p>Address : {user.address.suite}</p>
              <p>Street  : {user.address.street}</p>
              </div>    
      </div>
      <button className='button1' style={{
        width:"100px",
        height:"50px",
        backgroundColor:"#0070f3",
        borderStyle: "none",
        color: "#fff",
      }}><a href="/home">Go Back to Users</a></button>
    </main>
    }
    </div>
  )
}


// export async function getServerSideProps(context) {
    export async function getStaticProps(context) {

    // Fetch data from external API
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${context.params.id}`)
    console.log(context);
    const user = await res.json()
  
    // Pass data to the page via props
    return { props: { user } }
  }
  export async function getStaticPaths() {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users`)
    const users = await res.json()
    const paths = users.map(user => ({params: {id: user.id.toString()}}))
      return {
        paths,
         fallback: false               //false or 'blocking',
      };
    }

export default index;   
