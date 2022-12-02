import React from 'react'
import './TipInput.css'

export default function TipInput(props) {
  return (
    <input type="number" className='custom' placeholder='Custom' onChange={(e)=> {props.change(e)}} value={props.value} />
  )
}
