import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { CardMedia, Grid, Typography } from '@material-ui/core';
 import  Logo1 from './Logo1.png';
// import '../Css/Aboutus.css'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(6),
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
  },
}));

export default function AboutUs() {
  const classes = useStyles();

  return (
  <div className={classes.root}style={{backgroundColor:"#9e9e9e"}} >
      <center>
        {/* <Paper style={{height:600,width:200,marginTop:5,marginLeft:700}} elevation = {0}> */}
        
        <CardMedia 
        image={Logo1} style={{height:300,width:300,marginLeft:4,backgroundColor:"#9e9e9e",marginLeft:700}}
       />
       {/* </Paper> */}
      </center>
      
  
  {/* <Paper variant="outlined" style={{height:360,backgroundColor:"#e0e0e0",borderRadius:50,width:500}}> */}
        {/* <Grid container spacing ={1}> */}
          {/* <Grid item xs = {4}> */}
          <Paper style={{width:400,height:400,marginTop:400,borderRadius:50,backgroundColor:"#ffab40 ",boxShadow:"10px 5px 25px"}} elevation={3}>
      
      <center>
          <h1>Vision</h1>
      </center>
      <Typography align="justify">
          <p style={{fontSize:25,padding:20}}>
        
          Being leader in animal farm in SriLanka by providing best quality feed supplement which helps to gain trust among consumers
          </p>
      </Typography>
      </Paper>
      {/* </Paper> */}
      {/* </Grid> */}
      {/* <Grid item xs = {4}> */}
      <Paper  variant="outlined" elevation={0} style={{width:410,height:500,marginTop:400,borderRadius:50,marginBottom: 600,backgroundColor:"#ffab40 ",boxShadow:"10px 5px 25px"}}>
      
      <center>
          <h1 >WHO WE ARE</h1>
      </center>
      <Typography align="justify">
          <p style={{fontSize:21,marginLeft:3,padding:20}}>
          Nowadays, poultry farming to produce meat or eggs for food, is done in a wide range in our country. But as we know that there are several illness and unhealthy effects in the production of these domesticated birds because of the usage of chemicals and reagents, we are going to solve these issues faced during growth of these birds and to sell them at an affordable price for the consumer.
          </p>
      </Typography>
      </Paper>
  {/* </Paper> */}

      
      <Paper style={{width:400,height:400,marginTop:400,borderRadius:50,backgroundColor:'#ffab40',boxShadow:"10px 5px 25px"}}>
      
          <center>
              <h1>Mission</h1>
          </center>
          <Typography align="justify">
              <p style={{fontSize:25,padding:20}}>
              We are fully dedicated to producing, selling and serving livestock animals by providing most advance best nutrition supplement throughout the life.
              </p>
          </Typography>
          
      </Paper>

          
    
    </div>
  );
}