import React from 'react'
import './Levels.css'
import Levelcard from './levelscard/Levelcard'



const Levels = () => {
  return (
    <div className='level-container'>
        <div className='level-heading'>
            <h3>Levels</h3>
        </div>
        <div className='level-cards center-cards'>
            <Levelcard level='1' money='1000' members='2'  />
            <Levelcard level='2' money='1000' members='2'  />
            <Levelcard level='3' money='1000' members='2'  />
            <Levelcard level='4' money='1000' members='2'  />
            <Levelcard level='5' money='1000' members='2'  />
            <Levelcard level='6' money='1000' members='2'  />
            <Levelcard level='7' money='1000' members='2'  />
            <Levelcard level='8' money='1000' members='2'  />
            <Levelcard level='9' money='1000' members='2'  />
            <Levelcard level='10' money='1000' members='2'  />
        </div>
        <div className='potential'>
            <p>Total potential amount generated from Level 2 to Level 10=#698,028,000</p>
        </div>
    </div>
  )
}

export default Levels