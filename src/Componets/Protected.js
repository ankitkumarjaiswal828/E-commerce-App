import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export default function Protected(props) {
    let CMP = props.Compoent;
    let navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("user-info")) {
      navigate("./");
    }
  }, []);

  return (
    <div>
      <CMP/>
    </div>
  )
}
