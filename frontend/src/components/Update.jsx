import {useState,useEffect} from 'react'
import axios from 'axios'
import { useNavigate,useParams } from 'react-router-dom'

export default function Update() {
  const {id}=useParams()
  const API_URL="http://localhost:5001/books"
  const [formData,setFormData]=useState({
    title:"",
    author:"",
    year:""
  })

  useEffect(()=>{
    axios.get(`${API_URL}/${id}`)
    .then((res)=>setFormData(res.data))
    .catch((err) => console.error(err));

  },[id])
  const navigate=useNavigate()
  const handleSubmit=async(e)=>{
    e.preventDefault()
    await axios.put(`${API_URL}/${id}`,formData)
    navigate("/")

  }
  return (
    <div className='card p-3 shadow'>
      <h3>Update book</h3>
      <form onSubmit={handleSubmit}>
      Title:<input type="text"
      placeholder='Enter Title' 
      value={formData.title}
      onChange={e=>setFormData({...formData,title:e.target.value})}
      className='form-control mb-2' required /> <br />
      Author:<input type="text" 
      placeholder='Enter Author'
      value={formData.author}
      onChange={e=>setFormData({...formData,author:e.target.value})}
      className='form-control mb-2' required /> <br />
      Year:<input type="number" 
      placeholder='Enter Year'
      value={formData.year}
      onChange={e=>setFormData({...formData,year:e.target.value})}
      className='form-control mb-2' required/> <br />
      <button className='btn btn-primary'>Update</button>
      </form>
    </div>
  )
}
