
import React, { useEffect, useState } from 'react'
import BASE_URL from '../Config/Config';
import axios from 'axios';
// import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import { MdDelete } from "react-icons/md";
import { MdSystemSecurityUpdateGood } from "react-icons/md";

function ProductDisplay() {
  const [mydata, setMydata] =useState([]);
  const [input, setInput] = useState([]);

  const LoadData = async()=>{
    const api = `${BASE_URL}/admin/DisplayProduct`;
    const response = await axios.get(api);
    console.log(response.data);
    setMydata(response.data);
  }

  useEffect(()=>{
    LoadData();
  },[]);


    
  const HandelDelete = async(_id)=>{
    const api = `${BASE_URL}/admin/DeleteProduct`;
    const response = await axios.post(api, {_id:_id});
    console.log(response.data);
    alert(response.data.msg);
    setMydata(mydata.filter(key1=>key1._id!==_id));
  }


  const HandelUpdate =async(_id)=>{
    const api = `${BASE_URL}/admin/UpdateGetData`;
    const response = await axios.post(api,{_id:_id});
    console.log(response.data);
    setInput(response.data);

  }







let count =0;
  const ans  = mydata.map((key)=>{
    count++;
    return(
      <>
     
    <tr>
        <td>{count}</td>
        <td>
            <img  src={`${BASE_URL}/${key.defaultImage}`}  width="100" height="100" alt="image" />
        </td>
        <td style={{fontWeight:"bold"}}>{key. category}</td>
        <td>{key. subCategory}</td>
        <td>{key. productname}</td>
        <td>{key.  brand}</td>
        <td>{key. mrp}</td>
        <td>{key. price}</td>
        <td>{key. batchNo}</td>
        <td>{key. mfgDate}</td>
        <td>{key. expDate}</td>
        <td style={{fontSize:"30px"}} onClick={()=>{HandelDelete(key._id)}}><MdDelete /></td>
        <td style={{fontSize:"30px"}} onClick={()=>{HandelUpdate(key._id)}}><MdSystemSecurityUpdateGood /></td>
    </tr>



      
         
      
      </>
    )
  })




  return (
   <>
   <div id="admi1">
   <h1>Welcome to our Display Product Page </h1>
   </div>
       <Table striped bordered hover>
      <thead>
        <tr>
          <th>Count</th>
          <th>Image</th>
          <th>Category</th>
          <th>Sub-Category</th>
          <th>ProductName</th>
          <th>Brand</th>
          <th>MRP</th>
          <th>Price</th>
          <th>Batch No</th>
          <th>MfDate</th>
          <th>Exdate</th>
          <th>Delete</th>
          <th>Update</th>
        </tr>
      </thead>
      <tbody>
        {ans}
        </tbody>
        </Table>

   </>
  )
}

export default ProductDisplay