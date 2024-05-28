import React from 'react'

async function page({params}) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`,
        {next:{revalidate:10}} //It revalidates the data changes and caches the data after 10s its the best of SSG and SSR.
                               //  It keeps the data updated. Site always shows new data.     
    );
    const data = await res.json()
  return (
    <div>
        <div>
            <h1>Incremental Static Generation</h1>
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