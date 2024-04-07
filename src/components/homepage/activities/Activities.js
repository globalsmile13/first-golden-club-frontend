import React from 'react'
import './Activities.css'
import Oddcard from './activities-card/Oddcard'
import Evencard from './activities-card/Evencard'

const Activities = () => {
  return (
    <div className='activities-container' id='activities'>
      <div className='activities-heading'>
        <p className='first-heading'>First Golden Gifted Club</p>
        <p className='second-heading'>Total Activities Breakdown!</p>
      </div>
      <div className='card-activities'>
        <Oddcard  num='1' statement='Membership Fee #1,000. Level1= 2persons and cost #1,000. Those 2 persons pay you 1000 each and you are with 2k Upgrade fee to level2 is #2k' />
        <Evencard num='2' statement= 'Level3 = 8 persons and cost 4,000. Those 8 persons pay you 4,000 each 8x4,000=#32,000 Upgrade fee to level 4 is 8,000, so take-home in level 3 is 24,000'/>
        <Oddcard num='3' statement='Membership Fee #1,000. Level1= 2persons and cost #1,000. Those 2 persons pay you 1000 each and you are with 2k Upgrade fee to level2 is #2k' />
        <Evencard num='4' statement= 'Level3 = 8 persons and cost 4,000. Those 8 persons pay you 4,000 each 8x4,000=#32,000 Upgrade fee to level 4 is 8,000, so take-home in level 3 is 24,000'/>
        <Oddcard num='5' statement='Membership Fee #1,000. Level1= 2persons and cost #1,000. Those 2 persons pay you 1000 each and you are with 2k Upgrade fee to level2 is #2k' />
        <Evencard num='6' statement= 'Level3 = 8 persons and cost 4,000. Those 8 persons pay you 4,000 each 8x4,000=#32,000 Upgrade fee to level 4 is 8,000, so take-home in level 3 is 24,000'/>
        <Oddcard num='7' statement='Membership Fee #1,000. Level1= 2persons and cost #1,000. Those 2 persons pay you 1000 each and you are with 2k Upgrade fee to level2 is #2k' />
        <Evencard num='8' statement= 'Level3 = 8 persons and cost 4,000. Those 8 persons pay you 4,000 each 8x4,000=#32,000 Upgrade fee to level 4 is 8,000, so take-home in level 3 is 24,000'/>
        <Oddcard num='9' statement='Membership Fee #1,000. Level1= 2persons and cost #1,000. Those 2 persons pay you 1000 each and you are with 2k Upgrade fee to level2 is #2k' />
        <Evencard num='10' statement= 'Level3 = 8 persons and cost 4,000. Those 8 persons pay you 4,000 each 8x4,000=#32,000 Upgrade fee to level 4 is 8,000, so take-home in level 3 is 24,000'/>
      </div>
      <div className='dont'>
        <p>Don’t forget all take-home in each level goes direct to your local bank account and not with anyone else or the site. The Money Making Machine</p>
      </div>

    </div>
  )
}

export default Activities