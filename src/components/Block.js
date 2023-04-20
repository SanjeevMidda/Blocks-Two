import React from 'react'
import "../index.css";
import { useState } from 'react';

function Block({width, height, color, title}) {

const [status, setStatus] = useState(true)

  function move(){
    setStatus(!status);
  }

    let styles = {
        width: width,
        height: height,
        background: color
    }

  return (
    <div className={status? "block" : "moveBlock"} style={styles} onClick={move}>{title}</div>
  )
}

export default Block