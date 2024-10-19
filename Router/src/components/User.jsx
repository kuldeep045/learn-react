import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userid} = useParams()
  return (
    <>
    <div className='text-white bg-black'>User Id: {userid}</div>
    </>
  )
}

export default User