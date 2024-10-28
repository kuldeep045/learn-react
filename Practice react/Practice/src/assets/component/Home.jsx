import { useContext, useEffect, useState } from "react"
import {docContext} from '../context/DotorContext.jsx'
import { useParams,useNavigate } from "react-router-dom"


function Home() {
  const {speciality} = useParams()
  const navigate = useNavigate()
  const {doctors} = useContext(docContext)
  const [filterdDoc, setFilterdDoc] = useState([])

  const DoctorFilter = () =>{
    if(speciality){
      setFilterdDoc(doctors.filter( doc => doc.speciality === speciality))
    }else{
      setFilterdDoc(doctors)
      console.log(doctors)
    }
  }


  useEffect(() =>{
    DoctorFilter()
  },[speciality, doctors])


  return (
    <div className=' text-white bg-slate-900 flex gap-4 w-full mt-1 min-h-screen'>
      {/* left */}
      <div className='w-[20%]'>
      <button className='bg-orange-600 px-3 py-2 rounded-full text-2xl w-52'>Filter</button>
      <p onClick={() => navigate(speciality === "General physician" ? "/" : "/General physician")} className={`bg-slate-400 m-2 p-2 rounded-lg cursor-pointer ${speciality == "General physician" ? "bg-green-400" : ""}`}>General physician</p>
      <p onClick={() => navigate(speciality === "Gynecologist" ? "/" : "/Gynecologist")} className={`bg-slate-400 m-2 p-2 rounded-lg cursor-pointer ${speciality == "Gynecologist" ? "bg-green-400" : ""}`}>Gynecologist</p>
      <p onClick={() => navigate(speciality === "Dermatologist" ? "/" : "/Dermatologist")} className={`bg-slate-400 m-2 p-2 rounded-lg cursor-pointer ${speciality == "Dermatologist" ? "bg-green-400" : ""}`}>Dermatologist</p>
      <p onClick={() => navigate(speciality === "Pediatricians" ? "/" : "/Pediatricians")} className={`bg-slate-400 m-2 p-2 rounded-lg cursor-pointer ${speciality == "Pediatricians" ? "bg-green-400" : ""}`}>Pediatricians</p>
      <p onClick={() => navigate(speciality === "Neurologist" ? "/" : "/Neurologist")} className={`bg-slate-400 m-2 p-2 rounded-lg cursor-pointer ${speciality == "Neurologist" ? "bg-green-400" : ""}`}>Neurologist</p>
      <p onClick={() => navigate(speciality === "Gastroenterologist" ? "/" : "/Gastroenterologist")} className={`bg-slate-400 m-2 p-2 rounded-lg cursor-pointer ${speciality == "Gastroenterologist" ? "bg-green-400" : ""}`}>Gastroenterologist</p>
      </div>
      {/* right */}
      
      <div className='w-full grid grid-cols-3 gap-4 gap-y-6'>
        {
          
          filterdDoc.map((item)=>{
            return <div key={item._id} className="w-[300px] h-[400px] border cursor-pointer">
              <img className="w-full" src={item.image} alt="" />
              <div className="flex items-center justify-center gap-2">

              <p className="bg-green-600 h-2 w-2 rounded-lg"></p>
              <p>Available</p>

              </div>
              <div>
                <p>{item.name}</p>
                <p>{item.speciality}</p>
              </div>
            </div>
          })
        }

      </div>
      
    </div>
  )
}

export default Home