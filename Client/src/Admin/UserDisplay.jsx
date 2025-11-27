

import React, { useEffect, useState } from 'react'
import BASE_URL from '../Config/Config';
import axios from 'axios';
// import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';

function UserDisplay() {
    const [mydata, setMydata] = useState([]);

  const LoadData = async()=>{
    const api = `${BASE_URL}/admin/DisplayUser`;
    const response  =await axios.get(api);
    console.log(response.data);
    setMydata(response.data);
  }

  useEffect(()=>{
    LoadData();
  },[])


    const ans = mydata.map(key=>{
        return(
            <>
            <tr>
                <td>
                    <img src={`${BASE_URL}/${key.image}`} alt="image" width="100" height="100" />
                </td>
                <td>{key.name}</td>
                <td>{key.email}</td>
                <td>{key.number}</td>
                <td>{key.ano}</td>
            </tr>
            </>
        )
    })


  return (
      <>
      <h1 align="center">MR Display Page</h1>
             <Table striped bordered hover>
            <thead>
              <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Email</th>
              <th>Mo No</th>
              <th>Adhar No</th>
              </tr>
            </thead>
            <tbody>
              {ans}
              </tbody>
              </Table>
      
      </>
  )
}

export default UserDisplay