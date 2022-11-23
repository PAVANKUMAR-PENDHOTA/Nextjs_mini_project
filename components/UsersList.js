import React from 'react';
import HomeStyles from "../styles/Home.module.css";

const UsersList = ({users}) => {
  return (
    <div>
      <main className={HomeStyles.main}>
        <div className={HomeStyles.grid}>
            {users.map(user => <div className={HomeStyles.card} key={user.id}>
                <p>Name : {user.name}</p>
                <p>Email : {user.email}</p>
                <p>Website : {user.company.name}</p><br/>
                <a href={`/user/${user.id}`}>Know More</a>

                </div>)}
        </div>
      </main>
    </div>
  )
}

export default UsersList
