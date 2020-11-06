import React, {Component} from 'react';
import { Paper, Grid, FormControl, CardMedia, Typography } from '@material-ui/core';
import Apic2 from './Apic2.jpg';
import ContactForm from './ContactForm.js';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LocalPhoneIcon from '@material-ui/icons/LocalPhone';
import LocalPostOfficeIcon from '@material-ui/icons/LocalPostOffice';
import { green } from '@material-ui/core/colors';
import { maroon } from '@material-ui/core/colors';

import { red } from '@material-ui/core/colors';
import jara from './jara.jpg';




export default class Contactus extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      
      // <div style={{backgroundImage: `url(${Apic2})`,backgroundRepeat:"no-repeat",height:850,}}>
      <div>
        <Grid container spacing={1}>
          <Grid container item xs={12} spacing={3}>
            {/* <Paper style={{height:80, width:1500,marginLeft:160,backgroundColor:"transparent"}}> */}
                <div
                 style={{backgroundImage: `url(${jara})`,backgroundRepeat:"no-repeat",backgroundSize:"cover",height:250,width:"100%",marginTop:30}}>
                   <Typography style={{marginLeft:"40%",fontSize:"25px",color:"lightgray"}}><h1>Contact Us</h1></Typography>
                </div>
              {/* </Paper> */}
            </Grid>
            <Grid container item xs={1} spacing={3}/>
            <Grid container item xs={3} spacing={3}>
              <Paper style={{height:408, width:700,marginTop: 150, marginLeft:160,backgroundColor:"transparent",border:'1px solid black',boxShadow:"10px 5px 25px"}}>
              <br/>
              
                
                <FormControl>
              <p style={{marginLeft:10,fontSize:20,}}>  
                <b>ADDRESS:</b> </p>
              
                <p style={{marginLeft:20,fontSize:20,}}>
                MUNICIPAL COUNCIL,<br/>
                NALLUR,<br/>
                JAFFNA,<br/>
                SriLanka.
                </p>
              </FormControl>&emsp;
              <FormControl>
           <a target="_blank" href ="https://www.facebook.com/hena.fam"> <FacebookIcon style={{fontSize: 60,marginLeft:5}} color="primary"/></a>
              </FormControl>&emsp; &emsp;
              <FormControl>
              <a target="_blank" href ="https://www.instagram.com/hena_fam/"> <InstagramIcon style={{fontSize: 60,color:"maroon"}}/></a>
            </FormControl> &emsp; &emsp; &emsp; &emsp;
            <br/> <br/>
            <FormControl>
              <LocalPhoneIcon style={{fontSize: 52,color:"green",marginLeft:12}}></LocalPhoneIcon>
            </FormControl>
            <FormControl>
              <p>
                :- 0776588142
              </p>
            </FormControl>&emsp; &emsp; &emsp; &emsp;&emsp; &emsp;
            <br/> <br/>
            <FormControl>
              <LocalPostOfficeIcon style={{fontSize: 40,color:"red",marginLeft:12}}></LocalPostOfficeIcon>
            </FormControl>
            <FormControl>
              <p style={{marginLeft:12}}>
                :- henafam08@gmail.com
              </p>
              
            </FormControl>
            </Paper>
          </Grid>
          <Grid container item xs={7} spacing={3}>
            <div style={{marginTop: 150 }}>
              <ContactForm/>
            </div>
          </Grid>
          <Grid container item xs={1} spacing={3}/>
        </Grid>
        
      </div>
    )
  }



}
	
	
	
