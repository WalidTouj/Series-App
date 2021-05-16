import React from 'react'
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';
import LibraryAddIcon from '@material-ui/icons/LibraryAdd';



const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',

            '& > *': {
        margin: theme.spacing(5),
      },
    },
  }));
  



  

function Btn(props){
  
    const classes = useStyles();
     const uniqueseason= [...new Set(props.detail?
         props.detail.map(elements => elements.season ):[])];
  
    return(
        <div>

            <div className={classes.root}>
     
      <ButtonGroup variant="text" color="primary" aria-label="text primary button group">
          { uniqueseason.length > 0?
          uniqueseason.map(user=> <Button  
              onClick={()=>{props.selectclick(user)}}>Season {user}</Button>):[]}
        
      
      </ButtonGroup>
      <Button startIcon={<LibraryAddIcon />} variant="outlined" size="large" color="primary">
 Add To Library
</Button>
    
      
      
    </div>
    
        </div>
        
    );
}


export default Btn;