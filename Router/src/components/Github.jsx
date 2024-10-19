import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom';



function Github() {
    const data = useLoaderData()
    
    //const [data, setData] = useState('')

    
    
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/hiteshchoudhary')
    //     .then((response)=>response.json())
    //     .then((data)=>setData(data))
    //     .catch((err) => console.log('ERROR: ', err) )
    // },[])

  return (
    <div className='flex p-5 items-center flex-col gap-4 text-3xl text-center text-white bg-zinc-700'>       

        Github followers : {data.followers}
        <img className='h-[225px]' src={data.avatar_url} alt="" />
        Name: {data.name}
    </div>
  )
}

export default Github;
export const loaderData = async() =>{
    const response = await fetch('https://api.github.com/users/hiteshchoudhary')
    return response.json()

}

