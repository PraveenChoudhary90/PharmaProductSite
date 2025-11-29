import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BASE_URL from '../Config/Config';

function Attributes() {

  const [input, setInput] = useState({ name: "" });
  const [subInput, setSubInput] = useState({ subname: "", attributeId: "" });

  const [attributes, setAttributes] = useState([]);
  const [subAttributes, setSubAttributes] = useState([]);

  const [showModal, setShowModal] = useState(false);

  // Handle Input
  const handleInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubInput = (e) => {
    setSubInput({ ...subInput, [e.target.name]: e.target.value });
  };

  // =============================
  //     ADD ATTRIBUTE
  // =============================
  const addAttribute = async (e) => {
    e.preventDefault();

    // 1. Empty validation
    if (!input.name.trim()) {
      alert("Attribute name required!");
      return;
    }

    // 2. Duplicate validation
    const exists = attributes.some(
      (attr) => attr.name.toLowerCase() === input.name.toLowerCase()
    );

    if (exists) {
      alert("This attribute already exists!");
      return;
    }

    // 3. Insert
    try {
      await axios.post(`${BASE_URL}/product/AttributeInsert`, {
        name: input.name
      });

      setInput({ name: "" });
      loadAttributes();
    } catch (err) {
      console.log(err);
    }
  };

  // =============================
  //     ADD SUB ATTRIBUTE
  // =============================
  const addSubAttribute = async (e) => {
    e.preventDefault();

    // 1. Required validation
    if (!subInput.subname.trim()) {
      alert("Sub-attribute name required!");
      return;
    }

    // 2. Duplicate sub attribute validation
    const duplicate = subAttributes.some(
      (s) =>
        s.attributeId === subInput.attributeId &&
        s.subname.toLowerCase() === subInput.subname.toLowerCase()
    );

    if (duplicate) {
      alert("This sub-attribute already exists for this attribute!");
      return;
    }

    // 3. Insert
    try {
      await axios.post(`${BASE_URL}/product/SubAttributeInsert`, {
        subname: subInput.subname,
        attributeId: subInput.attributeId
      });

      setSubInput({ subname: "", attributeId: "" });
      setShowModal(false);
      loadSubAttributes();
    } catch (err) {
      console.log(err);
    }
  };

  // =============================
  //      LOAD APIs
  // =============================
  const loadAttributes = async () => {
    const res = await axios.get(`${BASE_URL}/product/AttributeDisplay`);
    setAttributes(res.data);
  };

  const loadSubAttributes = async () => {
    const res = await axios.get(`${BASE_URL}/product/SubAttributeDisplay`);
    setSubAttributes(res.data.SubProduct);
  };

  useEffect(() => {
    loadAttributes();
    loadSubAttributes();
  }, []);

  // Filter sub attributes for specific attribute
  const getSubList = (id) => {
    return subAttributes
      .filter(s => s.attributeId === id)
      .map(s => s.subname)
      .join(", ");
  };

  // Open modal & hold attribute id
  const openModal = (id) => {
    setSubInput({ ...subInput, attributeId: id });
    setShowModal(true);
  };

  return (
    <>

      {/* Add Attribute Form */}
      <form onSubmit={addAttribute}>
        <label>Add Attribute:</label>
        <input
          type="text"
          name="name"
          value={input.name}
          onChange={handleInput}
        />
        <button type="submit">Save</button>
      </form>

      {/* Attribute Table */}
      <table border="1" style={{ marginTop: "20px" }}>
        <thead>
          <tr>
            <th>ATTRIBUTE</th>
            <th>SUB-ATTRIBUTES</th>
            <th>ACTION</th>
          </tr>
        </thead>

        <tbody>
          {attributes.map(attr => (
            <tr key={attr._id}>
              <td>{attr.name}</td>

              <td>{getSubList(attr._id) || "—"}</td>

              <td>
                <button onClick={() => openModal(attr._id)}>
                  + Add Sub-Attribute
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal */}
      {showModal && (
        <div style={modalStyle.overlay}>
          <div style={modalStyle.modal}>
            <h3>Add Sub-Attribute</h3>

            <form onSubmit={addSubAttribute}>
              <input
                type="text"
                name="subname"
                value={subInput.subname}
                onChange={handleSubInput}
                placeholder="Enter Sub-Attribute Name"
              />

              <br /><br />

              <button type="submit">Save</button>
              <button type="button" onClick={() => setShowModal(false)}>
                Close
              </button>
            </form>
          </div>
        </div>
      )}

    </>
  );
}

export default Attributes;


// =======================
//    MODAL CSS
// =======================
const modalStyle = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    background: "rgba(0,0,0,0.6)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  modal: {
    background: "#fff",
    padding: "20px",
    borderRadius: "8px",
    width: "300px",
    textAlign: "center"
  }
};
