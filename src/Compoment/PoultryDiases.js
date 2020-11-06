import React, { Component } from "react";
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import poultrybirds from './Poultry Birds.jpg'



const style= {
    root: {
      flexGrow: 1,
    },
    paper: {
      // padding: theme.spacing(2),
      textAlign: "center",
      width:200,
      marginLeft:50,
      // color: theme.palette.text.secondary,
    },
    media: {
      height: 140,
    },
    gridList: {
      flexWrap: 'nowrap',
      // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
      transform: 'translateZ(10)',
    },
  }

class PoultryDiases extends Component {
  

  render() {
    return (
       
        <div style={style.root}>
            

              <h2 align="justify" style={{fontSize:50,color:"#e53935"}}><strong>Poultry Diseases</strong></h2>
                <Typography variant="body2" color="textSecondary" component="p" style={{"fontSize":15}}>
                    Various types of poultry diseases can cause serious loss in the poultry farming business. Diseases occurs due to lack of proper care 
                    and management inadequate nutritious feeding and some other factors. Generally diseases can be defined as ‘changes of general or usual 
                    physical condition’. Almost all types of animal can be affected by different types of disease in their lifetime. Poultry birds are not 
                    exception, they also get affected by numerous diseases. This types of disease can suffer the poultry health seriously. If you want to  
                    establish a profitable commercial farm or want to raise a few poultry birds on your backyard, then you must have to keep your birds free
                      from all types of diseases. Usually poultry producers face some problems during establishing a new poultry farming business such as lack 
                       of capital, location, housing, food management, diseases etc. Among all those problems, poultry diseases are most important to consider.
                        Disease can destroy the whole farm and you might loss money seriously. The meat and egg production of poultry can suddenly decrease due 
                         to various types of diseases. Many poultry birds die every year throughout the world, due to various types of diseases. As a result of 
                         this, producers loss a huge amount of money. In a word the main reason of financial damage of poultry farming business is various types of diseases.
                
                <br/> <br/>
              
                <CardMedia
                  style={style.media}
                   image={poultrybirds} style={{height:600,width:600,alignItems:"center"}}
                  />
                  
                </Typography>






             


</div>
)
}
}


export default PoultryDiases;