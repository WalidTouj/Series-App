import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin:30,
  },
  paper: {
    padding: theme.spacing(2),
    marginBottom:30,
    backgroundColor:'#004e92',
    opacity:0.7,
    color: 'white',
  },
}));

function Episode(props) {
 
  const classes = useStyles();

  

  const filterepi = props.detail
    ? props.detail.filter((det) => {
        if (det.season == props.selseason) {
          return det.name;
        }
      })
    : [];




  return (
    <div className={classes.root}>
      {filterepi.length > 0
              ? filterepi.map((sais) => {
                  console.log(sais);
                  return (
                    <Grid item xs={12}>
                    <Paper className={classes.paper}>
                      {" "}
                      <h1>Name: {sais.name}</h1>
                      <h3>Episode: {sais.episode}</h3>
                     
                      Season {props.selseason}
                      </Paper>
                    </Grid>
                  );
                })
              : props.fallback}
              
      
          
             
       

      

      
    </div>
  );
}

export default Episode;
