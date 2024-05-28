import React from 'react'

async function page({params}) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`,
        {cache: 'no-store'}
        // No caching of data happens here.
        // Usefull for making dynamic sites where data updates frequently and no need to store the last data.
    );
    const data = await res.json()
  return (
    <div>
        <div>
            <h1>Server Side Rendring</h1>
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