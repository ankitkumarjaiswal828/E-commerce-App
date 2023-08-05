import React, { useState } from 'react'
import Headers from "./Headers";
import { Button } from 'react-bootstrap';

export default function AddProduct() {
  const [name,setName] = useState("")
  const [file, setFile] = useState("");
  const [price, setPrice] = useState("");
  const [description, setdescription] = useState("");

  function add(){
    console.log(name,file,price,description)
  }

  return (
    <div>
      <Headers />
      <div className="col-sm-6 offset-sm-3">
        <h1
          style={{
            color: "green",
            fontFamily: "Georgia",
            fontWeight: "bolder",
          }}
        >
          Add Product
        </h1>
        <br />
        <input
          type="text"
          className="form-control"
          placeholder="Enter name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />

        <br />
        <input
          type="file"
          className="form-control"
          placeholder="choose file"
          value={file}
          onChange={(e) => {
            setFile(e.target.value);
          }}
        />

        <br />
        <input
          type="text"
          className="form-control"
          placeholder="Enter Price"
          value={price}
          onChange={(e) => {
            setPrice(e.target.value);
          }}
        />

        <br />
        <input
          type=""
          className="form-control"
          placeholder="description"
          value={description}
          onChange={(e) => {
            setdescription(e.target.value);
          }}
        />
        <br />
        <br />
        <Button color="primary" style={{fontWeight:'bolder' }} onClick={add}>Add Product</Button>
      </div>
    </div>
  );
}
