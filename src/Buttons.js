import React from 'react'
import './Buttons.css'

export default function Buttons(props) {
  return (
      <button className='percentbutt' onClick={(e)=>props.click(e)} value={props.value}>{props.number}%</button>    
  )
}
