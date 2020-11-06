import React, { Component } from "react";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { Card, CardContent, FormControl, Typography,InputLabel, NativeSelect, FormHelperText } from '@material-ui/core';

import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import ReplayIcon from '@material-ui/icons/Replay';
import UpdateIcon from '@material-ui/icons/Update';
import Snackbar from '@material-ui/core/Snackbar';
import { IconButton } from '@material-ui/core';
import { Alert } from "@material-ui/lab";

import Select from '@material-ui/core/Select';
import './AddUser.Css';
import poultryService from "../services/poultry.service";
import { CancelPresentation } from "@material-ui/icons";




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

export default class UpdateProduct extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: '',
      name: "",
      describtion: "",
      avilable: "",
      url: "",
      price: "",
      ratting:"",
      PoultryArr: [],
      snackbaropen: false,
      message: null,
      successful: false
    };
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

  componentDidMount() {
    const productId = this.props.match.params.id;
    // console.log(productId);
    if (productId) {
        this.loadProduct(productId);
    }
      
  }

  // updatePoultry = (e) => {
  //     e.preventDefault();
  //     this.setState({
  //       successful: false,
  //       message: "Sucess- Poultry updated Sucessfully"
  //     })
  //   }


  loadProduct = (productId) => {
    // console.log("hoooooooooo");
    poultryService.getPoultryById(productId)
          .then((res) => {
              console.log(res)
              let Poultry = res.data;
              console.log(Poultry)
              this.setState({
                  id: Poultry.id,
                  name: Poultry.name,
                  describtion: Poultry.describtion,
                  url: Poultry.url,
                  price:Poultry.price,
                  ratting:Poultry.ratting,
                  avilable:Poultry.avilable,
                  
                
              })
          });
  }


  //update user api
      updatePoultry = (e) => {
            e.preventDefault();
            let PoultryBody = {
                  id: this.state.id,
                  name: this.state.name,
                  describtion: this.state.describtion,
                  url: this.state.url,
                  price:this.state.price,
                  // ratting:this.state.ratting,
                  avilable:this.state.avilable
                  
                };
                console.log(PoultryBody)
                poultryService.updatePoultry(PoultryBody)
                
                .then(res => {
                  
                    this.setState({
                      message : 'Poultry updated successfully.',
                      snackbaropen:true,
                    });
                    setTimeout(()=> this.UpdateProduct(), 3000) 

                    // this.props.history.push('/ViewProduct');
                });
          }


          UpdateProduct = () =>{
            this.props.history.push("/ViewProduct")
          }

  render() {
    return (
      <>
      <Snackbar open={this.state.snackbaropen} autoHideDuration={3000} onClose={this.snackbarclose} anchorOrigin={{vertical:'top',horizontal:'right'}}>
      <Alert onClose={this.snackbarclose} severity="success" style={{position:"fixed",right:"100px",width:'550px',zIndex:3,color:"black",backgroundColor:"green"}}>
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
             <form className={style.root} noValidate autoComplete="off" style={{width:'150%'}}onSubmit={this.AddProduct}>
                  {!this.state.successful && (
             <Grid container spacing={1}>
                      <Grid item xs={11}>
                        
                      <h3 style={{fontSize:30,color:"#1a237e"}}>Update Products</h3>
                    
                       
                      </Grid>
                      <Grid item xs={12}>
                        <FormControl>
                        <FormControl variant="outlined" style={style.formControl} Style={{width:"300%"}}>
                        <InputLabel htmlFor="outlined-age-native-simple">Select Items</InputLabel>
                          <Select
                          native
                          value ={this.state.name}
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
          <option>One day coumtry chick</option>
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
                        <TextField type="" id="outlined-required" label="Available" variant="outlined" helperText="Enter your avaible items" style={{width:"120%"}}value ={this.state.avilable} onChange={this.onChangeavilable} />
                        </FormControl>&emsp; &emsp; &emsp;  &emsp;  &emsp;
                        </Grid> 
                        
                      

                        <Grid item xs={12}>
                        <FormControl>
                        <TextField type="" id="outlined-required" label="cover photo URL" variant="outlined" helperText="Enter poultry cover photo URL"  style={{width:"120%"}} value ={this.state.url} onChange={this.onChangeurl} />
                        </FormControl>&emsp; &emsp; &emsp;  &emsp;  &emsp;
                       

                       
                        <FormControl >
                        <TextField type= "" id="outlined-required" label="Describtion" variant="outlined" helperText="Enter discribtion " style={{width:"120%"}} value ={this.state.describtion} onChange={this.onChangedescribtion}/>
                        </FormControl> &emsp; &emsp; &emsp;  &emsp;  &emsp;
                        </Grid>
                          
                        <Grid item xs={12}>
                        <FormControl >
                        <TextField type= "" id="outlined-required" label="price" variant="outlined" helperText="Enter Poultry  Price " style={{width:"120%"}} value ={this.state.price} onChange={this.onChangeprice}/>
                        </FormControl>
                        </Grid>
                        <Button onClick={this.updatePoultry} style={{fontWeight:'bold',backgroundColor:'#1b5e20',marginLeft:450,color:"black"}}><UpdateIcon style={{fontSize:20}}/>Update</Button>&emsp;
                        <Button href="/ViewProduct" variant="contained" style={{backgroundColor:'#0d47a1'}}><CancelPresentation style={{fontSize:20}}/>Cencel</Button> 
                        
                 </Grid>   
                 )}
                 {/* {this.state.message && (
               <div>
                 <Typography color='#d50000' variant="overline" display="block" gutterBottom> 
                     <strong>{this.state.message}</strong>
                 </Typography>
               </div>
             )} */}
                
                </form>
                </div>
                {/* </Paper> */}
              </CardContent>
        </Card>
        </Grid>
        <Grid item xs={4}/>
      
      </Grid>
      </>
      
    );
                            
}
}