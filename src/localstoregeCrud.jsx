import React from 'react'
import { useState } from 'react'

const LocalstoregeCrud = () => {
  const [id, setId]= useState("")
  const [data, setData] = useState({
    name: "",
    age: ""
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
      age:""
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
      }
      return i;
    })
    setUserData(finalData)
    localStorage.setItem("UserData",JSON.stringify(finalData))
    setData({
      name:"",
      age:""
    })
    setId("")
  }

  // const displayData = () => {
  //   localStorage.setItem("UserData", JSON.stringify(data))
  // }
  return (
    <div>
      <h3>localstorege Crud Example User Detail</h3>
      Name:<input type='text' name='name' id='name' onChange={saveData} value={data.name} />
      Age:<input type='text' name='age' value={data.age} onChange={saveData} />

      <br /> <br />
      <button onClick={id ? updateData:dataSave}>{id ? "Update Data": "Save Data"}</button><br />
      Name is :{data.name} <br />
      age is :{data.age}


      <table>
        <tr>
          <td>Id</td>
          <td>Name</td>
          <td>Age</td>
          <td>Action</td>
        </tr>
      {
        userData && userData.map((i,index) => {
          return(
            <tr>
              <td>{index + 1}</td>
              <td>{i.name}</td>
              <td>{i.age}</td>
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

export default LocalstoregeCrud

