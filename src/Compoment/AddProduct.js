import React, { Component } from "react";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { Card, CardContent, FormControl, Typography,InputLabel, NativeSelect, FormHelperText } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import ReplayIcon from '@material-ui/icons/Replay';
import CancelPresentationIcon from '@material-ui/icons/CancelPresentation';
import Snackbar from '@material-ui/core/Snackbar';
import { IconButton } from '@material-ui/core';
import { Alert } from "@material-ui/lab";
import Select from '@material-ui/core/Select';
import './AddUser.Css';
import poultryService from "../services/poultry.service";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";




const style = {
  root: {
    minWidth: 275,
    backgroundColor:'#212121',
    marginTop: 50,
    color: '#e0f7fa'
  },
  button: {
    fontSize: '20px'
  },
  formControl: {
   // margin: spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    //marginTop: spacing(2),
  },
}

export default class AddProduct extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      describtion: "",
      avilable: "",
      url: "",
      price: "",
      ratting:"0",
      snackbaropen: false,
      message: null,
      successful: false,
      count:"1",
      ratecount:"0"
    };
  }

  componentDidMount() {
    ValidatorForm.addValidationRule('isName',(value) => {
      if((this.state.name) && (this.state.name)){
        return true;
      }
      return false;
    })
    ValidatorForm.addValidationRule('isDescribtion', (value) => {
      if((this.state.describtion.length>5) && (this.state.describtion.length<80)){
        return true;
      }
      return false;
    })
    ValidatorForm.addValidationRule('isUrl', (value) => {
      if((this.state.url.length>5) && (this.state.url.length<150)){
        return true;
      }
      return false;
    })
    ValidatorForm.addValidationRule('isPrice', (value) => {
      if((this.state.price.length>1) && (this.state.price.length<10)){
        return true;
      }
      return false;
    })
    ValidatorForm.addValidationRule('isAvilable', (value) => {
      if((this.state.avilable.length>1) && (this.state.avilable.length<10)){
        return true;
      }
      return false;
    })
  }
  snackbarclose = (event,reason) =>{
    if(reason ==="clickway"){
      return;
    }
    this.setState({snackbaropen: false});
  }


  onChangename = (event) => {
    this.setState({
      name: event.target.value
    });
  }

  onChangedescribtion = (event) => {
    this.setState({
      describtion: event.target.value
    });
  }

  onChangeavilable = (event) => {
    this.setState({
      avilable: event.target.value
    });
  }

  onChangeurl = (event) => {
    this.setState({
      url: event.target.value
    });
  }

  onChangeprice = (event) => {
    this.setState({
      price: event.target.value
    });
  }

  onChangeratting = (event) => {
    this.setState({
      ratting: event.target.value
    });
  }

  handleAddProduct = (event) => {
    event.preventDefault();

    let product = {
      name :this.state.name ,
      describtion : this.state.describtion, 
      avilable : this.state.avilable, 
      url : this.state.url, 
      price : this.state.price, 
      ratting : 0,
      ratecount : 0,
      userRate:0,
      count:1
    }

    poultryService.createPoultry (product)
     console.log(this.state.price)
    if (this.state.name && this.state.describtion && this.state.avilable && this.state.url && this.state.price ) {
      console.log(this.state.name + " " + this.state.describtion + " " + this.state.avilable + "" +this.state.url + ""+ this.state.price + "" + this.state.ratting)
      this.setState({
        // successful: true,
        snackbaropen:true,
        message: "Success -Product Saved Successfully."
      })
      setTimeout(()=> this.ViewProduct(), 3000) 
    } else {
      this.setState({
        // successful: false,
        snackbaropen:true,
        message: "Not valid"
      })
    }
  }
  ViewProduct = () =>{
    this.props.history.push("/ViewProduct")
  }

  reset(){
    window.location.reload();
  }

  render() {
    return (
      <>
      <Snackbar open={this.state.snackbaropen} autoHideDuration={3000} onClose={this.snackbarclose} anchorOrigin={{vertical:'top',horizontal:'right'}}>
        <Alert onClose={this.snackbarclose}   variant="filled"severity="success"style={{position:"fixed",right:"100px",width:'550px',zIndex:3,color:"black"}}>
          {this.state.message}
        </Alert>
      </Snackbar>
        <Grid container spacing={1}>
          
        <Grid item xs={4}/>
        <Grid item xs={5} Style={{backgroundColor:"black"}}>
          <Card className={style.root} style={{margin:20,boxShadow:"10px 20px 25px black", border: "2px 5px 8px",marginTop:150}}>
           <CardContent>
           {/* <Paper variant="outlined"> */}
           <div className="card">
             <ValidatorForm className={style.root} noValidate autoComplete="off" style={{width:'150%'}}onSubmit={this.handleAddProduct}>
                  {!this.state.successful && (
             <Grid container spacing={1}>
                      <Grid item xs={11}>
                        
                      <h3 style={{color:"#1a237e",fontFamily: 'Raleway',fontSize:40}}>Add Products</h3>
                    
                       
                      </Grid>
                      <Grid item xs={12}>
                        <FormControl>
                        <FormControl variant="outlined" style={style.formControl}style={{width:275}} >
                        <InputLabel htmlFor="outlined-age-native-simple">Select Items</InputLabel>
                          <Select
                          native
                          // value={state.age}
                          onChange={this.onChangename}
                          label="Age"
                          inputProps={{
                              name: 'age',
                              id: 'outlined-age-native-simple',
          }}
        >
          <option aria-label="None" value="" />
          <option>One day chick</option>
          <option >One month chick</option>
          <option>Country Chicken</option>
          <option>Layers chick</option>
          <option>One day naked neck chick</option>
          <option>One day country chick</option>
          <option>Mature layers chicken</option>
          <option>Mature chicks</option>
          <option>One day turkey chick</option>
          <option>One month turkey chick</option>
          <option>One day duck chick</option>
          <option>One month duck chick</option>
          <option>One day guinea fowl</option>
          <option>One month guinea fowl</option>
          <option>One day quail chick</option>
          <option>One month quail chick</option>
        </Select>
      </FormControl>&emsp; &emsp;  
                            
                        {/* <TextField type="text" id="outlined-required" label="Name" variant="outlined" helperText="Enter your name" style={{width:"120%"}} onChange={this.onChangename} /> */}
                        </FormControl>&emsp; &emsp; &emsp;  &emsp;  &emsp; 
                        <FormControl>
                        <TextValidator  

                         type="number" 
                         id="outlined-required"
                          required='true' 
                          label="Available" 
                          variant="outlined" 
                          helperText="Enter your available items" style={{width:280,marginLeft:-50}}  
                          validators={['required',"isAvilable"]}
                          onChange={this.onChangeavilable} 
                          value={this.state.avilable}
                          errorMessages = {["This field is not Empty"," Availale must be more than 1 characters"]}
                          />
                        </FormControl>&emsp; &emsp; &emsp;  &emsp;  &emsp;
                        </Grid> 
                        
                      

                        <Grid item xs={12}>
                        <FormControl>
                        <TextValidator 
                          type=""
                          id="outlined-required"
                          label="cover photo URL"
                           variant="outlined" 
                           helperText="Enter poultry cover photo URL"  style={{width:"120%"}}
                           onChange={this.onChangeurl} 
                           validators={['required',"isUrl"]}
                           value={this.state.url}
                           errorMessages = {["This field is not Empty"," Url must be more than 5 characters"]}
                           />
                        </FormControl>&emsp; &emsp; &emsp;  &emsp;  &emsp;
                       

                       
                        <FormControl >
                        <TextValidator 
                        type= ""
                         id="outlined-required"
                          label="Describtion" 
                          variant="outlined"
                           helperText="Enter describtion " style={{width:"120%"}} 
                           validators={['required',"isDescribtion"]}
                           value={this.state.describtion}
                           onChange={this.onChangedescribtion}
                           errorMessages = {["This field is not Empty"," Dicribtion must be more than 5 characters"]}
                           />
                        </FormControl> &emsp; &emsp; &emsp;  &emsp;  &emsp;
                        </Grid>
                          
                        <Grid item xs={12}>
                        <FormControl >
                        <TextValidator
                         type= "number" 
                         id="outlined-required" 
                         label="price" variant="outlined" 
                         helperText="Enter Poultry  Price " style={{width:"120%"}} 
                         validators={['required',"isPrice"]}
                         value={this.state.price}
                         errorMessages = {["This field is not Empty"," Price must be more than 1 characters"]}
                         onChange={this.onChangeprice}
                         />
                        </FormControl>
                        
                        <div style={{display:"flex"}}>
                        <Button type="submit" variant="contained"style={{backgroundColor:'#1b5e20',marginLeft:150,color:"black"}}> <SaveIcon style={{fontSize:20}}/>Add</Button>
                        <Button  href=""variant="contained" style={{backgroundColor:'#0d47a1',marginLeft:10,color:"black"}} onClick={this.reset}> <ReplayIcon style={{fontSize:20}}/>RESET</Button>
                        <Button href="/admin" variant="contained" style={{backgroundColor:'#0d47a1',marginLeft:10,color:"black"}}><CancelPresentationIcon style={{fontSize:20}}/>Cencel</Button> 
                        </div>
                        </Grid>
                 </Grid>   
                 )}
                 {/* {this.state.message && (
               <div>
                 <Typography color='#d50000' variant="overline" display="block" gutterBottom> 
                     <strong>{this.state.message}</strong>
                 </Typography>
               </div>
             )} */}
                
                </ValidatorForm>
                </div>
                
              </CardContent>
        </Card>
        </Grid>
        <Grid item xs={4}/>
      
      </Grid>
      </>
      
      
    );
  
     
                            
}
}