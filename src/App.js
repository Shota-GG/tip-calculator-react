import { useState } from 'react';
import './reset.css'
import './App.css';
import BillInput from './BillInput';
import Buttons from './Buttons';
import TipInput from './TipInput';
import NumOfPeople from './NumOfPeople';
import Amount from './Amount';
import Total from './Total';
import ResetButton from './ResetButton';

function App() {
  let array = [5, 10, 15, 25, 50]
  const [buttonValue, setButtonValue] = useState("")
  const [billInput, setBillInput]= useState("")
  const [numOfPeopleInput, setNumOfPeopleInput] = useState("")
  const [tipInput, setTipInput] = useState("")
  const [clicked, setClicked] = useState(false)
  const [amount, setAmount] = useState("0.00")
  const [total, setTotal] = useState("0.00")
  const [isClicked, setIsclicked] = useState(false)
  const [zero, setZero] = useState("")
  const [isZero, setIsZero] = useState("")
  
  function change(e){
    setBillInput(parseInt(e.target.value))
    console.log(typeof(e.target.value))
    if(numOfPeopleInput>0 && clicked === true ){ 
      setAmount((((e.target.value*buttonValue)/100)/numOfPeopleInput).toFixed(2))
      setTotal(((((e.target.value*buttonValue)/100)+parseInt(e.target.value) )/numOfPeopleInput).toFixed(2))
     }
     else if(numOfPeopleInput>0 && clicked===false){
      setAmount((((e.target.value*tipInput)/100)/numOfPeopleInput).toFixed(2))
      setTotal(((((e.target.value*tipInput)/100)+parseInt(e.target.value))/numOfPeopleInput).toFixed(2))
     }
     else if(e.target.value<=0){
      setZero("can't be zero")
    }
    else if(e.target.value>0){
      setZero("")
    }

  }
  function changeNumOfPeopleInput(e){
    setNumOfPeopleInput(parseInt(e.target.value))
    console.log(e.target.value)
    if(billInput>0 && clicked === true ){
      setAmount((((billInput*buttonValue)/100)/e.target.value).toFixed(2))
      setTotal(((((billInput*buttonValue)/100)+billInput)/e.target.value).toFixed(2))
     }
     else if(billInput>0 && clicked === false){
      setAmount((((billInput*tipInput)/100)/e.target.value).toFixed(2))
      setTotal(((((billInput*tipInput)/100)+billInput)/e.target.value).toFixed(2))
     }
     else if(e.target.value<=0){
      setIsZero("can't be zero")
    }
    else if(e.target.value>0){
      setIsZero("")
    }
  }
  
  function changeTipInput(e){
    setTipInput(parseInt(e.target.value))
    console.log(typeof e.target.value)
    if(billInput>0 && clicked === false && numOfPeopleInput>0){
      setAmount((((billInput*e.target.value)/100)/numOfPeopleInput).toFixed(2))
      setTotal(((((billInput*e.target.value)/100)+billInput)/numOfPeopleInput).toFixed(2))
     }
  }
  function click(e){
    setClicked(true)
    setButtonValue(e.target.value)
    if(billInput > 0 && numOfPeopleInput>0){
      setAmount((((billInput*e.target.value)/100)/numOfPeopleInput).toFixed(2))
      setTotal(((((billInput*e.target.value)/100)+billInput)/numOfPeopleInput).toFixed(2))
      
    }
    console.log(e.target.value)
  }
  function resetButt(){
    setIsclicked(true)
    setButtonValue("")
    setBillInput("")
    setNumOfPeopleInput("")
    setTipInput("")
    setAmount("0.00")
    setTotal("0.00")
  }
  

  return (
    <div className='body'>
      
    
    <div className='container'>
      <div className='select'>
          <BillInput value={billInput} change= {change} cantBe = {zero} />

          <div className='percent'>
            {array.map(num=>{
              return <Buttons number={num} value = {num} click = {click} 
              // clicked = {changeButtonValue}
              />
            })}
            <TipInput value={tipInput} change={changeTipInput} />
          </div>
          <NumOfPeople value={numOfPeopleInput} change = {changeNumOfPeopleInput} cantBe = {isZero} />
      </div>
      <div className='display'>
          <Amount amount = {amount} />
          <Total total = {total} />
          <ResetButton click = {resetButt} />
      </div>
      
      
    </div>
      
    </div>
  );
}

export default App;
