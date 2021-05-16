import React from "react";
import './Card.style.css'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';


export const CardBrBa = props => (
  <div className="card-container">
    <Card>
    <img src={props.character.img} alt="" width="300px" height="350px"/>
    <h1>{props.character.name}</h1>
    <h2>{props.character.birthday}</h2>
    </Card>
  </div>
)
