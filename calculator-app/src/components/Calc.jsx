import React, {useState} from 'react'
import Darkmode from './Darkmode'
import Lightmode from './Lightmode'
import Purplemode from './Purplemode'


const Calc = () => {
    const [mode, setMode] = useState(0)

const modeDisplay = () => {
  if (mode === 0){
     return (
      <Darkmode 
      mode = {mode}
      setMode = {setMode} />
     )
  }

  else if (mode === 1){
    return (
      <Lightmode
      mode = {mode}
      setMode = {setMode} />
    )
  }

  else {
    return (
      <Purplemode 
      mode = {mode}
      setMode = {setMode} />
    )
  }
  
}

  return (
    <div>
      {modeDisplay()}
    </div>
  )
}

export default Calc