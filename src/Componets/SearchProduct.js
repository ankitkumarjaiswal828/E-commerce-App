import React from 'react'
import Headers from './Headers'

export default function SearchProduct() {
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
        Search Product
        </h1>{" "}
        <br /><br />
        <input className='form-control' type='text' placeholder='Search Producct'/>
      </div>
    </div>
  );
}
