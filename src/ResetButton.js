import React from 'react'
import './resetButton.css'

export default function ResetButton(props) {
  return (
    <button className='resetButton' onClick={props.click}>Reset</button>
  )
}
