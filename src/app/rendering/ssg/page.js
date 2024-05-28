import React from 'react'

async function page({params}) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`,
        // Full caching of data happens here.
        // Usefull for making static sites where data does not update that frequently.
    );
    const data = await res.json()
  return (
    <div>
        <div>
            <h1>Static Site Generation</h1>
        </div>
        <div>
            <h2>{data.title}</h2>
        </div>
        <div>
            <p>{data.body}</p>
        </div>
    </div>
  )
}
export default page;