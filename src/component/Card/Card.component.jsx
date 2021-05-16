import React from 'react'
import './Card.style.css'
import {withRouter} from 'react-router-dom'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import { useHistory } from "react-router-dom";




function SCard (props) {
    const handelClick= (id)=>{history.push( `/Details/${id}`)

    }

    let history = useHistory();
    return(<div onClick={()=>
        handelClick(props.serie.id)
    } className="card-container">
        <Card elevation={3}>
    <img src={props.serie.image_thumbnail_path} alt="" width="300px" height="350px"/>
    <h1> {props.serie.name}</h1>
    <h2> {props.serie.start_date}</h2>
    <h2>{props.serie.network}</h2>
    <CardActions disableSpacing>
    
        </CardActions>
    </Card>
</div>)
  
        
   
    
}

export default withRouter(SCard)

