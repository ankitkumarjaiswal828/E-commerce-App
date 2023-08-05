import React from 'react'
import Headers from "./Headers";
import { useState } from 'react';
import { Button } from "react-bootstrap";


export default function UpdateProduct() {
   const [name, setName] = useState("");
   const [file, setFile] = useState("");
   const [price, setPrice] = useState("");
   const [description, setdescription] = useState("");
   
   function update(){
    console.log(name,file,price,description)
   }
  return (
    <div>
      <Headers />
      <h1
        style={{
          color: "green",
          fontFamily: "Georgia",
          fontWeight: "bolder",
        }}
      >
        Update Product{" "}
      </h1>

      <div className="col-sm-6 offset-sm-3">
        
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
        <Button  style={{ fontWeight: "bolder" }} onClick={update}>
          Update Product
        </Button>
      </div>
    </div>
  );
}
