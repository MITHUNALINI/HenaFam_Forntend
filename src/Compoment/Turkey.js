import React, { Component } from "react";
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';

const style= {
    root: {
      flexGrow: 1,
    },
    paper: {
      // padding: theme.spacing(2),
      textAlign: "center",
      width:400,
      marginLeft:50,
      // color: theme.palette.text.secondary,
    },
    media: {
      height: 140,
    },
  }

  class Turkey extends Component {
      render(){
          return(
            <div style={style.root}>
            <h1 style={{fontSize:50,color:"#e53935"}}><strong>Turkey Farming </strong></h1> 
            <Typography variant="body2" color="textSecondary" component="p" style={{"fontSize":15}}>

            </Typography>
            </div>
          )
      }
  }


  export default Turkey;