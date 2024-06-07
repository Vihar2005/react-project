import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
// import useFetch from './CustomhooksAPI'
import axios from 'axios'
import Select from 'react-select'

const Apicomp = () => {
  const [data, setData] = useState([])
  const [catdata,setCatData] = useState([])
  const [udata, setUdata] = useState({
    title: "",
    description: "",
    image: "",
    price: "",
    category: ""
  })
  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      // .then(res => res.json())
      .then(json => setData(json.data))
      .catch((err)=>console.log(err))

      axios.get('https://fakestoreapi.com/products/categories')
      // .then(res => res.json())
      .then(json => setCatData(json.data))
      .catch((err)=>console.log(err))
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUdata({
      ...udata,
      [name]: value
    })
  }

  const saveData = (e) => {
    e.preventDefault();
    axios.post('https://fakestoreapi.com/products',udata)
    .then(json => console.log(json))
    .catch((err)=>console.log(err))
    // fetch('https://fakestoreapi.com/products', {
    //   method: "POST",
    //   body: JSON.stringify(udata)
    // })
    //   .then(res => res.json())
    //   .then(json => console.log(json))
  }
  const delData = (id) => {
    axios('https://fakestoreapi.com/products/' + id, {
      method: "DELETE"
    })
      // .then(res => res.json())
      .then(json => console.log(json))
      .catch((err)=>console.log(err))
  }
  const editData = (id) => {
    axios('https://fakestoreapi.com/products/' + id, {
      method: "PUT",

    })
      // .then(res => res.json())
      .then(json => console.log(json))
      .catch((err)=>console.log(err))
  }

  const options = () =>[
    {value: 'category' , label: 'category'}
  ];

  return (
    <div>
      <h1>Api called Ex.</h1>
      <form action="" encType='multipart/form-data' onSubmit={saveData}>
        Title : <input type="text" name="title" value={udata.title} onChange={handleChange} />
        <br /><br />
        Description : <input type="text" name="description" value={udata.description} onChange={handleChange} />
        <br /><br />
        Image : <input type="file" name="image" value={udata.image} onChange={handleChange} />
        <br /><br />
        Category : <input type="text" name="category" value={udata.category} onChange={handleChange} />
        <br /><br />
        Price : <input type="text" name="price" value={udata.price} onChange={handleChange} />
        <br /><br />
        <input type="submit" value="Save Data" />
      </form>
      <br />
          <select name="category">
            <option value="">-- Select Category --</option>
            {
              catdata && catdata.map((i)=>{
                return(<option>{i}</option>)
              })
            }
          </select>
      <br />

      <table border={'2'}>
        <tr>
          <td>Id</td>
          <td>Title</td>
          <td>Price</td>
          <td>category</td>
          <td>Image</td>
          <td>Action</td>
        </tr>
        {
          data && data.map((i) => {
            return (
              <tr>
                <td>{i.id}</td>
                <td>{i.title}</td>
                <td>{i.price}</td>
                <td>{i.category}</td>
                <td><img src={i.image} height={'100px'} width={'100px'} /></td>
                <td>
                  <button onClick={() => editData(i.id)}>Edit</button>
                  <button onClick={() => delData(i.id)}>Delete</button>
                </td>
              </tr>
            )
          })
        }
      </table>
    </div>
  )
}

export default Apicomp
