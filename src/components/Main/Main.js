import React from 'react'
import {Card } from 'react-bootstrap'
import "./main.css"

const Main = () => {
    return (
        <div>
         <Card className="bg-dark text-white">
  <Card.Img className="image" src="http://www.realites.com.tn/wp-content/uploads/2017/07/jwebi-cap-zbib.jpg" alt="Card image" />
  <Card.ImgOverlay>
    <Card.Title>Card title</Card.Title>
    <Card.Text>
     Ras Jebel
    </Card.Text>
    <Card.Text>Last updated 3 mins ago</Card.Text>
  </Card.ImgOverlay>
</Card>   
        </div>
    )
}

export default Main
