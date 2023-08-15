import React from 'react'
import { player } from './Players'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import './play.css'

const Player = ({name, age, jnumb, nation, team, img}) => {

  return (
    <>
    <div style={{width:'100%', justifyContent: 'center', alignItems:'center'}} className="contain">
{player.map(({ name, age, jnumb, nation, team, img }, i ) => (
        <div style={{margin:'3rem', flexWrap: 'wrap', borderRadius:'10px', background:'black', justifyContent: 'center'}}>
    <Card className="cards" key={i} style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img} />

      <Card.Body>
                <Card.Title>{ name}</Card.Title>
                <Card.Text>
                    <p><b>{nation}</b></p>
                    <p><b>{age}</b></p>
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
                <ListGroup.Item><h5>{jnumb }</h5></ListGroup.Item>
                <ListGroup.Item><h5>{team }</h5></ListGroup.Item>
      </ListGroup>
      <Card.Body>
      </Card.Body>
    </Card>
    </div>
    ))}
    </div>
    </>
  )
}

export default Player

              
//           {player.map(({ name, age, jnumb, nation, team, img }, i ) => (
        
//         <h4>Name:{name}</h4>
//         <h4>Nationality:{nation}</h4>
//         <h4>Team:{team}</h4>
//         <h4>Age:{age}</h4>
//               <h4>Jersey number:{jnumb}</h4>
//         <img src={img} alt="pics" />
//     </div>
// ))}