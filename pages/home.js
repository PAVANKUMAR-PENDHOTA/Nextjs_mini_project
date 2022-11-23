import Head from 'next/head';
import Image from 'next/image'
import Navbar from '../components/Navbar';
import UsersList from '../components/UsersList';
import styles from '../styles/Home.module.css'

export default function Home({users}) {
  // console.log(users,"json data users");
  return (
    <div>
      <Navbar/>
      <Head>
        <title>users profile </title>
        <meta name="keyword" content="users profile application" />
        <meta name="description" content="Here i'm learning Nextjs practice" />
      </Head>
      {/* <Navbar/> */}
      <div className={styles.container}>
      <h1 className={styles.title}> User Profile <a href="/home">Application's</a> </h1>
    </div>
        <UsersList users={users}/>
    </div>
  )
}

export async function getStaticProps(){
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const users = await res.json()

  return{
    props:  {
      users,
    }
  }
}
