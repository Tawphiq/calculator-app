import React, { useState } from 'react'


const Purplemode = ({mode, setMode}) => {

  const [val, setVal] = useState("")

  const backspace = () => {
    return setVal(val.slice(0, -1))
  }
  
  const calculate = () => {
    return eval(val)
  }

  const handleClick = (e) => {
    e.preventDefault();
    {setMode(mode - 2)}
    
  }

  return (
    <div className='bg-purple-500 min-h-screen w-screen'>
    <div className='grid justify-center w-full text-yellow-300'>
    <div className='gap-3 grid mt-10 w-64 md:h-full md:w-96'>

    <div className='flex justify-between'>
      <div className='flex justify-start text-md md:text-3xl font-extrabold items-end md:items-center'>Calc</div>
      <div className='grid grid-cols-2 gap-2 text-xs'>
      <span className='flex font-bold items-end md:items-center'>THEME</span>
      <span>
      <span className='flex justify-between font-bold'>
              <span>1</span>
              <span>2</span>
              <span>3</span>
            </span>
      <button onClick={handleClick} className='bg-gray-300 w-12 h-5 rounded-full flex items-center justify-end'>
        <div className='bg-teal-500 w-2/5 h-4/5 rounded-full hover:bg-teal-400'></div>
        </button>
      </span>
      </div>
    </div>

    <div>
      <div className='bg-purple-900 rounded-lg h-16 w-full flex items-center justify-end text-2xl font-bold md:text-4xl md:h-28' value = {val}>{val}</div>
    </div>

    <div>
      <div className='grid gap-4 bg-purple-900 p-3 rounded-lg shadow-md h-80 md:h-96'>
        <div className='grid grid-cols-4 mt-5 gap-3 text-yellow-300 md:text-xl'>
          <button  className='bg-purple-600  font-extrabold rounded-md hover:bg-purple-500 shadow-md 
          border-4 border-t-0 border-l-0 border-r-0 border-b-purple-400' value = "7" onClick={(e)=>setVal(val + e.target.value)}>7</button>
          <button className='bg-purple-600  font-extrabold rounded-md  hover:bg-purple-500 shadow-md
          border-4 border-t-0 border-l-0 border-r-0 border-b-purple-400' value = "8" onClick={(e)=>setVal(val + e.target.value)}>8</button>
          <button className='bg-purple-600  font-extrabold rounded-md  hover:bg-purple-500 shadow-md 
          border-4 border-t-0 border-l-0 border-r-0 border-b-purple-400' value = "9" onClick={(e)=>setVal(val + e.target.value)}>9</button>
          <button className='bg-purple-600 text-white font-extrabold rounded hover:bg-purple-500 shadow-md 
          border-4 border-t-0 border-l-0 border-r-0 border-b-purple-400' value = "DEL" onClick={()=> backspace()}>DEL</button>
        </div>
        <div className='grid grid-cols-4 gap-3 text-yellow-300 md:text-xl'>
          <button className='bg-purple-600  font-extrabold rounded-md  hover:bg-purple-500 shadow-md border-4 border-t-0 border-l-0 border-r-0 border-b-purple-400' value = "4"
          onClick={(e)=>setVal(val + e.target.value)}>4</button>
          <button className='bg-purple-600  font-extrabold rounded-md  hover:bg-purple-500 shadow-md border-4 border-t-0 border-l-0 border-r-0 border-b-purple-400' value = "5"
          onClick={(e)=>setVal(val + e.target.value)}>5</button>
          <button className='bg-purple-600  font-extrabold rounded-md  hover:bg-purple-500 shadow-md border-4 border-t-0 border-l-0 border-r-0 border-b-purple-400' value = "6"
          onClick={(e)=>setVal(val + e.target.value)}>6</button>
          <button className='bg-purple-600  font-extrabold rounded-md  hover:bg-purple-500 shadow-md border-4 border-t-0 border-l-0 border-r-0 border-b-purple-400' value ="+"
          onClick={(e)=>setVal(val + e.target.value)}>+</button>
        </div>
        <div className='grid grid-cols-4 gap-3 text-yellow-300 md:text-xl'>
          <button className='bg-purple-600  font-extrabold rounded-md  hover:bg-purple-500 shadow-md border-4 border-t-0 border-l-0 border-r-0 border-b-purple-400' value = "1"
          onClick={(e)=>setVal(val + e.target.value)}>1</button>
          <button className='bg-purple-600  font-extrabold rounded-md  hover:bg-purple-500 shadow-md border-4 border-t-0 border-l-0 border-r-0 border-b-purple-400' value = "2"
          onClick={(e)=>setVal(val + e.target.value)}>2</button>
          <button className='bg-purple-600  font-extrabold rounded-md  hover:bg-purple-500 shadow-md border-4 border-t-0 border-l-0 border-r-0 border-b-purple-400' value = "3"
          onClick={(e)=>setVal(val + e.target.value)}>3</button>
          <button className='bg-purple-600  font-extrabold rounded-md  hover:bg-purple-500 shadow-md border-4 border-t-0 border-l-0 border-r-0 border-b-purple-400' value ="-"
          onClick={(e)=>setVal(val + e.target.value)}>-</button>
        </div>
        <div className='grid grid-cols-4 gap-3 text-yellow-300 md:text-xl'>
          <button className='bg-purple-600 font-extrabold rounded-md  hover:bg-purple-500 shadow-md border-4 border-t-0 border-l-0 border-r-0 border-b-purple-400' value = "."
          onClick={(e)=>setVal(val + e.target.value)}>.</button>
          <button className='bg-purple-600 font-extrabold rounded-md  hover:bg-purple-500 shadow-md border-4 border-t-0 border-l-0 border-r-0 border-b-purple-400' value ="0"
          onClick={(e)=>setVal(val + e.target.value)}>0</button>
          <button className='bg-purple-600 font-extrabold rounded-md  hover:bg-purple-500 shadow-md border-4 border-t-0 border-l-0 border-r-0 border-b-purple-400' value = "/"
          onClick={(e)=>setVal(val + e.target.value)}>/</button>
          <button className='bg-purple-600 font-extrabold rounded-md  hover:bg-purple-500 shadow-md border-4 border-t-0 border-l-0 border-r-0 border-b-purple-400' value = "*"
          onClick={(e)=>setVal(val + e.target.value)}>X</button>
        </div>
        <div className='grid grid-cols-2 mb-5 gap-3 md:text-xl'>
          <button className='bg-purple-600 text-white font-extrabold rounded-md hover:bg-purple-500 shadow-md border-4 border-t-0 border-l-0 border-r-0 border-b-purple-400'
          value = "" onClick={(e)=>setVal(e.target.value)}>RESET</button>
          <button className='bg-teal-500 text-white font-extrabold rounded-md hover:bg-teal-300'
          value = "="
          onClick={()=>setVal(calculate)}>=</button>
        </div>
      </div>
    </div>

    </div>
  </div>
  
  
  </div>
  )
}

export default Purplemode