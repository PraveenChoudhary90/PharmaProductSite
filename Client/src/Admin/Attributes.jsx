import React, { useState, useEffect } from 'react'
import axios from 'axios';
import BASE_URL from '../Config/Config';

function Attributes() {
  const [input, setInput] = useState({ name: "", subname: "", attributeId: "" });
  const [mydata, setMydata] = useState([]);

  // Input change handler
  const handelInput = (e) => {
    const { name, value } = e.target;
    setInput(prev => ({ ...prev, [name]: value }));
  }

  // Add Attribute
  const handelSubmit = async (e) => {
    e.preventDefault();
    try {
      const api = `${BASE_URL}/product/AttributeInsert`;
      const response = await axios.post(api, { name: input.name });
      alert(response.data.msg);
      setInput(prev => ({ ...prev, name: "" }));
      LoadData(); // reload attributes
    } catch (error) {
      console.log(error);
    }
  }

  // Add Sub-Attribute
  const handelSubSubmit = async (e) => {
    e.preventDefault();
    if (!input.attributeId) {
      return alert("Please select an attribute first");
    }
    try {
      const api = `${BASE_URL}/product/SubAttributeInsert`;
      const response = await axios.post(api, {
        subname: input.subname,
        attributeId: input.attributeId // send selected attributeId
      });
      alert(response.data.msg);
      setInput(prev => ({ ...prev, subname: "" }));
      LoadData(); // reload attributes
    } catch (error) {
      console.log(error);
    }
  }

  // Load all attributes
  const LoadData = async () => {
    try {
      const api = `${BASE_URL}/product/AttributeDisplay`;
      const response = await axios.get(api);
      setMydata(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    LoadData();
  }, []);

  // Render attribute table
  const ans = mydata.map(attr => (
    <tr key={attr._id}>
      <td>{attr.name}</td>
      <td>
        {attr.values?.map(v => v.subname).join(", ")}
      </td>
    </tr>
  ));

  return (
    <>
      {/* Add Attribute */}
      <form onSubmit={handelSubmit}>
        <label>Add Attribute</label>
        <input type="text" name='name' value={input.name} onChange={handelInput} />
        <button type='submit'>Save</button>
      </form>

      {/* Add Sub-Attribute */}
      <form onSubmit={handelSubSubmit}>
        <label>Add Sub-Attribute</label>
        <select name="attributeId" value={input.attributeId} onChange={handelInput}>
          <option value="">Select Attribute</option>
          {mydata.map(attr => (
            <option key={attr._id} value={attr._id}>{attr.name}</option>
          ))}
        </select>
        <input type="text" name='subname' value={input.subname} onChange={handelInput} placeholder="Sub-Attribute Name" />
        <button type='submit'>Sub-Save</button>
      </form>

      {/* Display Attributes */}
      <div id="att">
        <table border="1">
          <thead>
            <tr>
              <th>ATTRIBUTE</th>
              <th>SUB-ATTRIBUTES</th>
            </tr>
          </thead>
          <tbody>
            {ans}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Attributes;
