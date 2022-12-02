import React from 'react'
import './total.css'

export default function Total(props) {
  return (
    <div className='totalndiv'>
      <div className='tipdiv'>
        <h3 className='h3'>Total</h3>
        <p className='p'>/ person</p>
      </div>
      <div className='amountdiv'>
        <h1 className='h'>$ {props.total}</h1>
      </div>
    </div>
  )
}
