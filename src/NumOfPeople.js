import React from 'react'
import './NumOfPeople.css'
import image from './images/Path.png'

export default function NumOfPeople(props) {
  return (
    <div>
      <div className='texts'>
        <label className='h1'>Number of People</label>
        <p className='cantbe'>{props.cantBe}</p>
      </div>
      
      <div className='peoplediv'>
        <img src={image} alt="" className='peopleimg' />
        <input type="number" className='people' placeholder='0' onChange={(e)=>{props.change(e)}} value={props.value} />
      </div>
      
    </div>
    
  )
}
