import React from 'react'
import { player } from './GoMyCode/Players'
import Player from './GoMyCode/Player'
// all our import must be done before the programming begins 



function PlayerList() {
  return (
    <>
          <div style={{ backgroundColor: 'black' }}>
<h1 style={{color:'white', textAlign:'center', fontSize:'100px'}}>Legendaries and the New Generation.</h1>
              {
                  player.map(({ name, age, jnumb, nation, team, img }, i) => (
//above is us mapping through again this will create multiple img
                    <div key={i}>
                        <Player name={name} age={age} jnumb={jnumb} nation={nation} team={team} img={img} />
                    </div>
                ))
             } 
      </div>
    </>
  )
}

export default PlayerList
