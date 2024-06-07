import React from 'react'
import { useState } from 'react'

const LocalStorageEx = () => {
  const [id, setId]= useState("")
  const [data, setData] = useState({
    name: "",
    age: "",
    contact:"",
    about:""
  })
  const[userData,setUserData] = useState([])
  const saveData = (e) => {
    const { name, value } = e.target

    setData({
      ...data,
      [name]: value 
    })
  }
  const dataSave = ()=>{

    setUserData(prevdata => [
      ...prevdata,
      data
    ])
    const updatedData = [...userData,data]
    localStorage.setItem("UserData",JSON.stringify(updatedData))
    setUserData(updatedData)
    setData({
      name:"",
      age:"",
      contact:"",
      about:""
    })
  }
  const deleteData = (id)=>{
    let data1 = JSON.parse(localStorage.getItem("UserData"))
    let dt = data1.filter((i,index)=>{
      return index!=id
    })
    setUserData(dt)
    localStorage.setItem("UserData",JSON.stringify(dt))
  }
  const editData = (id)=>{
    let data1 = JSON.parse(localStorage.getItem("UserData"))
    let dt = data1.filter((i,index)=>{
      return index==id
    })
    setData(dt[0])
    setId(id)
  }

  const updateData = () =>{
    let data1 = JSON.parse(localStorage.getItem("UserData"))
    let finalData = data1.map((i,index)=>{
      if(index == id){
        i.name = data.name
        i.age = data.age
        i.contact = data.contact
        i.about = data.about
      }
      return i;
    })
    setUserData(finalData)
    localStorage.setItem("UserData",JSON.stringify(finalData))
    setData({
      name:"",
      age:"",
      contact:"",
      about:""
    })
    setId("")
  }

  // const displayData = () => {
  //   localStorage.setItem("UserData", JSON.stringify(data))
  // }
  return (
    <div>
      <h3>localstorege Crud Example User Detail</h3>
      Name:<input type='text' name='name' id='name' onChange={saveData} value={data.name} /> <br />
      Age:<input type='number' name='age' value={data.age} onChange={saveData} /> <br />
      Contact:<input type='number' name='contact' value={data.contact} onChange={saveData} /> <br />
      About:<input type='text' name='about' value={data.about} onChange={saveData} />

      <br /> <br />
      <button onClick={id ? updateData:dataSave}>{id ? "Update Data": "Save Data"}</button><br />
      Name is :{data.name} <br />
      Age is :{data.age} <br />
      Contact is :{data.contact} <br />
      About is :{data.about} <br />


      <table>
        <tr>
          <td>Id</td>
          <td>Name</td>
          <td>Age</td>
          <td>Contact</td>
          <td>About</td>
          <td>Action</td>
        </tr>
      {
        userData && userData.map((i,index) => {
          return(
            <tr>
              <td>{index + 1}</td>
              <td>{i.name}</td>
              <td>{i.age}</td>
              <td>{i.contact}</td>
              <td>{i.about}</td>
              <td><button onClick={() => editData(index)}>Edit</button></td>
              <td><button onClick={() => deleteData(index)}>Delete</button></td>
            </tr>
          )
        })
      }
      </table>
    </div>
  )
}

export default LocalStorageEx

