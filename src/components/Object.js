import React from 'react'

function Object() {
    const database = [
        {
          username: "user1",
          password: "pass1"
        },
        {
          username: "user2",
          password: "pass2"
        }
      ];
  return (
    <div>
      {
        database.map((obj)=>{
          return(
            <>
           <h1>{obj.username}</h1>
      <button onClick={(obj.password)}>click</button>

            </>
          )
        })
      }
    </div>
  )
}

export default Object
