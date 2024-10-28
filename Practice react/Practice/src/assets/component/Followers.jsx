import React from 'react'
import { useLoaderData } from 'react-router-dom'

function Followers() {
    const data = useLoaderData()
  return (
    <>
    <div>Followers: {data.followers}</div>
    <img  className='mx-auto h-[225px]' src={data.avatar_url}></img>
    </>
  )
}

export default Followers