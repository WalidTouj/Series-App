import React from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';



const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
     margin:30,
    
   
      
    },
    details: {
      display: 'flex',
      flexDirection: 'column',
     
      
      
    },
    content: {
      flex: '1 0 auto',
      
      
    },
    cover: {
     height:460,
      width: 1800,
      
    },
   
  }));
function Info (props){
    const classes = useStyles();
    
return(
    <div >
       <Card className={classes.root}>
       <CardMedia
       
        className={classes.cover}
        image={props.detail.image_path}
        title="Live from space album cover"
      />
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
           {props.detail.name}
          </Typography>
          <Typography variant="subtitle1"  color="textSecondary">
            {props.detail.description}
          </Typography>
        </CardContent>
       
      </div>
      
    </Card>
    </div>
)
}
export default Info;