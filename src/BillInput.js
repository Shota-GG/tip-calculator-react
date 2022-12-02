import React from 'react'
import './BillInput.css'
import icon from './images/$.png'

export default function BillInput(props) {
  return (
    <div>
      <div className='texts'>
      <label className='bill'>Bill</label>
      <p className='cantbe'>{props.cantBe}</p>
      </div>
      <div className='div'>
        <img src={icon} alt=""  className='dollarimg'/>
        <input type="number" className='billinput' placeholder='0' onChange={(e)=> {props.change(e)}} value={props.value} 
        // onInput={(e)=>props.billClicked(e)} 
        />
      </div>
      
    </div>
    
  )
}
