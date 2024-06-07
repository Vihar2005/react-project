import React from 'react'
import useFetch from './Usefetch.jsx'

const Apidata = () => {
    const [data] = useFetch("https://fakestoreapi.com/products")
    const [users] = useFetch('http://dummyjson.com/users')
    return (
        <div>
            <h1>Api called Ex2.</h1>
            <table border={'2'}>
                <tr>
                    <td>Id</td>
                    <td>Title</td>
                    <td>Price</td>
                    <td>Image</td>
                </tr>
                {
                    data && data.map((i) => {
                        return (
                            <tr>
                                <td>{i.id}</td>
                                <td>{i.title}</td>
                                <td>{i.price}</td>
                                <td><img src={i.image} height={'100px'} width={'100px'} /></td>
                            </tr>
                        )
                    })
                }
            </table>
        </div>
    )
}

export default Apidata
