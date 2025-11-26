import React, { useEffect, useState } from 'react'
import BASE_URL from '../Config/Config';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Home() {
  const [mydata, setMydata] =useState([]);

  const LoadData = async()=>{
    const api = `${BASE_URL}/admin/DisplayProduct`;
    const response = await axios.get(api);
    console.log(response.data);
    setMydata(response.data);
  }

  useEffect(()=>{
    LoadData();
  },[]);




  const ans  = mydata.map((key)=>{
    return(
      <>
       <Card style={{ width: '25rem' }}>
      <Card.Img variant="top"  src={`${BASE_URL}/${key.defaultImage}`}  width="400" height="300" />
      <Card.Body>
        <Card.Title>Product Information</Card.Title>
        <Card.Text>
         <h6 style={{fontWeight:"bold"}}>Category:{key. category}</h6>
        <h6>SubCategory:{key. subCategory}</h6>
        <h6>productname{key. productname}</h6>
        <h6>Brand:{key.  brand}</h6>
        <h6>MRP:{key. mrp}</h6>
        <h6>Price:{key. price}</h6>
        <h6>BatchNo:{key. batchNo}</h6>
        <h6>MfgDate:{key. mfgDate}</h6>
        <h6>ExpDate:{key. expDate}</h6>
        </Card.Text>
        <Button variant="primary">Add To Cart</Button>
      </Card.Body>
    </Card>



      
         
      
      </>
    )
  })




  return (
   <>
   <div id="home">
   <h1>Welcome to our Landing page</h1>
   </div>
   <div id="card">
    {ans}
   </div>
   </>
  )
}

export default Home