import React from 'react'
import './amount.css'

export default function Amount(props) {
  return (
    <div className='maindiv'>
      <div className='tipdiv'>
        <h3 className='h3'>Tip Amount</h3>
        <p className='p'>/ person</p>
      </div>
      <div className='amountdiv'>
        <h1 className='h'>$ {props.amount}</h1>
      </div>
    </div>
    
  )
}
