import React, {useState} from 'react'

const Lightmode = ({mode, setMode}) => {

  const [val, setVal] = useState("")

  const backspace = () => {
    return setVal(val.slice(0, -1))
  }
  
  const calculate = () => {
    return eval(val)
  }

  const handleClick = (e) => {
    e.preventDefault();
    {setMode(mode + 1)}
  }

  return (
    <div className='bg-gray-100 min-h-screen w-screen'>
    <div className='grid justify-center w-full'>
    <div className='gap-3 grid mt-10 w-64 md:h-full md:w-96'>

    <div className='flex justify-between'>
      <div className='flex items-end font-extrabold md:items-center md:text-3xl'>Calc</div>
      <div className='flex gap-4 text-xs'>
      <span className='text-xs flex items-end md:items-center'>THEME</span>
      <span className=''>
      <span className='flex justify-between font-semibold'>
              <span>1</span>
              <span>2</span>
              <span>3</span>
            </span>
       <button onClick={handleClick} className='bg-gray-300 w-12 h-5 rounded-full flex justify-center items-center'>
        <div className='bg-orange-500 w-2/5 h-4/5 rounded-full hover:bg-orange-400'></div>
        </button>
      </span>
      </div>
    </div>

    <div>
      <div className='rounded-lg bg-gray-400 shadow h-16 md:h-28 w-full flex justify-end items-center text-2xl font-bold' value = {val}>{val}</div>
    </div>

    <div>
      <div className='grid gap-4 bg-gray-400 p-3 rounded-lg shadow-md h-80 md:h-96'>
        <div className='grid grid-cols-4 mt-5 gap-3 md:text-xl'>
          <button className='bg-gray-200 text-slate-800 font-extrabold rounded shadow-md hover:bg-white'
          value = "7" onClick={(e)=>setVal(val + e.target.value)}>7</button>
          <button className='bg-gray-200 text-slate-800 font-extrabold rounded shadow-md  hover:bg-white'
          value = "8" onClick={(e)=>setVal(val + e.target.value)}>8</button>
          <button className='bg-gray-200 text-slate-800 font-extrabold rounded shadow-md  hover:bg-white'
          value = "9" onClick={(e)=>setVal(val + e.target.value)}>9</button>
          <button className='text-white bg-teal-500 font-extrabold rounded shadow-md hover:bg-teal-400'
          value = "DEL" onClick={()=> backspace()}>DEL</button>
        </div>
        <div className='grid grid-cols-4 gap-3 md:text-xl'>
          <button className='bg-gray-200 text-slate-800 font-extrabold rounded shadow-md  hover:bg-white'
          value = "4" onClick={(e)=>setVal(val + e.target.value)}>4</button>
          <button className='bg-gray-200 text-slate-800 font-extrabold rounded shadow-md hover:bg-white'
          value = "5" onClick={(e)=>setVal(val + e.target.value)}>5</button>
          <button className='bg-gray-200 text-slate-800 font-extrabold rounded shadow-md  hover:bg-white'
          value = "6" onClick={(e)=>setVal(val + e.target.value)}>6</button>
          <button className='bg-gray-200 text-slate-800 font-extrabold rounded shadow-md hover:bg-white'
          value = "+" onClick={(e)=>setVal(val + e.target.value)}>+</button>
        </div>
        <div className='grid grid-cols-4 gap-3 md:text-xl'>
          <button className='bg-gray-200 text-slate-800 font-extrabold rounded shadow-md  hover:bg-white'
          value = "1" onClick={(e)=>setVal(val + e.target.value)}>1</button>
          <button className='bg-gray-200 text-slate-800 font-extrabold rounded shadow-md hover:bg-white'
          value = "2" onClick={(e)=>setVal(val + e.target.value)}>2</button>
          <button className='bg-gray-200 text-slate-800 font-extrabold rounded shadow-md hover:bg-white'
          value = "3" onClick={(e)=>setVal(val + e.target.value)}>3</button>
          <button className='bg-gray-200 text-slate-800 font-extrabold rounded shadow-md hover:bg-white'
          value = "-" onClick={(e)=>setVal(val + e.target.value)}>-</button>
        </div>
        <div className='grid grid-cols-4 gap-3 md:text-xl'>
          <button className='bg-gray-200 text-slate-800 font-extrabold rounded shadow-md hover:bg-white'
          value = "." onClick={(e)=>setVal(val + e.target.value)}>.</button>
          <button className='bg-gray-200 text-slate-800 font-extrabold rounded shadow-md hover:bg-white'
          value = "0" onClick={(e)=>setVal(val + e.target.value)}>0</button>
          <button className='bg-gray-200 text-slate-800 font-extrabold rounded shadow-md hover:bg-white'
          value = "/" onClick={(e)=>setVal(val + e.target.value)}>/</button>
          <button className='bg-gray-200 text-slate-800 font-extrabold rounded shadow-md hover:bg-white'
          value = "*" onClick={(e)=>setVal(val + e.target.value)}>X</button>
        </div>
        <div className='grid grid-cols-2 mb-5 gap-3 md:text-xl'>
          <button className='bg-teal-500 text-white font-extrabold rounded shadow-md hover:bg-teal-400'
          value = "" onClick={(e)=>setVal(e.target.value)}>RESET</button>
          <button className='bg-orange-500 text-white font-extrabold rounded shadow-md hover:bg-orange-400'
          value = "=" onClick={()=>setVal(calculate)}>=</button>
        </div>
      </div>
    </div>

    </div>
  </div></div>
  )
}

export default Lightmode