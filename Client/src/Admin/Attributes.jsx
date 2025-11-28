import React from 'react'
import { useState } from 'react'
import BASE_URL from '../Config/Config';
import axios from 'axios';
import { useEffect } from 'react';

function Attributes() {
    const [input, setInput] = useState("");
    const [mydata, setMydata] = useState([]);

    const handelInput = async(e)=>{
       const name =e.target.name;
       const value =e.target.value;
       setInput(values=>({...values, [name]:value}));
       console.log(input);
    }
  

    const handelSubmit = async(e)=>{
        e.preventDefault();
        const api = `${BASE_URL}/product/AttributeInsert`;
        const response= await axios.post(api,input);
        console.log(response.data);
        alert(response.data.msg);
    }


    const LoadData = async()=>{
        const api = `${BASE_URL}/product/AttributeDisplay`;
        const response= await axios.get(api);
        console.log(response.data);
        setMydata(response.data);

    }

    useEffect(()=>{
        LoadData()
    },[])

    const ans = mydata.map(key=>{
        return(
            <>
            
               <tr>
                <td>{key.name}</td>
                <td>{key.name}</td>
                
                </tr>
                

           
            </>
        )
    })

  return (
    <>
    <form action="">
        <label htmlFor="">Add Attribute</label>
        <input type="text" name='name' value={input.name} onChange={handelInput} />
        <button onClick={handelSubmit}>Save</button>
    </form>

      <div id="att">
        <table>
        <tr>
            <th>ATTRIBUTE</th>
            <th>SULG</th>
            <th>TREMS</th>
          
        </tr>
          <tbody>
        {ans}
        </tbody>
        </table>
        

      </div>
    </>
  )
}

export default Attributes