
import React, { Component } from "react";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { Card, CardContent, FormControl, Typography,InputLabel, NativeSelect, FormHelperText } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import AddBoxIcon from '@material-ui/icons/AddBox';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import ReplayIcon from '@material-ui/icons/Replay';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import { Style } from '@material-ui/icons';
import CancelIcon from '@material-ui/icons/Cancel';
//import './BuyNow.css';
import CancelPresentationIcon from '@material-ui/icons/CancelPresentation';
import authService from "../services/auth.service";
import userService from "../services/user.Service";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import authHeader from "../services/auth-header";
import Snackbar from '@material-ui/core/Snackbar';
import { Alert } from "@material-ui/lab";
import OrderService from "../services/OrderService";




const style = {
  root: {
    // minWidth: 275,
    backgroundColor:'#212121',
    marginTop: 50,
    color: '#e0f7fa'
  },
  button: {
    fontSize: '20px'
  },
}

export default class Mithu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id:"",
      Fullname: "",
      Phonenumber: "",
      District: "",
      City: "",
      Address: "",
      productId:"",
      Email:"",
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
    this.props.history.push("/Products")

  }
  


  onChangeFullname = (event) => {
    this.setState({
      Fullname: event.target.value
    });
  }

  onChangePhonenumber = (event) => {
    this.setState({
      Phonenumber: event.target.value
    });
  }

  onChangeDistrict = (event) => {
    this.setState({
      District: event.target.value
    });
  }

  onChangeCity = (event) => {
    this.setState({
      City: event.target.value
    });
  }

  onChangeAddress = (event) => {
    this.setState({
      Address: event.target.value
    });
  }
  onChangeEmail = (event) => {
    this.setState({
      Email: event.target.value
    });
  }

  componentDidMount(){
    const poultryId = this.props.match.params.id;
    if (poultryId) {
      this.setState({productId : poultryId})
    }

      // const id = this.props.match.params.id;
      // if(id){
      //     this.loadUser(id);
      // }

    // this.loadUser(localStorage.getItem('userid'));
    

    // this.loadUser("5f6c23db5da6fb5e35a39412");

    // loadUser = ("5f6c23db5da6fb5e35a39412") => {
      if(localStorage.getItem('user')){
      console.log(authService.getCurrentUser().id)
      userService.getUserById(authService.getCurrentUser().id)

      .then((res) => {
          let User = res.data;
          this.setState({
              id:User.id,
              Fullname: User.fullname,
              Phonenumber: User.phonenumber,
              District: User.district,
              Address: User.address,
              City: User.city,
          } )
      })
    }

       ValidatorForm.addValidationRule('isName',(value)=> {
          if(this.state.Fullname && (this.state.Fullname.length) >3 && (this.state.Fullname.length )<30){
            return true;
          }
          return false;
        });
        ValidatorForm.addValidationRule('isPhone',(value)=> {
          if(this.state.Phonenumber && (this.state.Phonenumber.length) >10 && (this.state.Phonenumber.length )<30){
            return true;
          }
          return false;
        });
        ValidatorForm.addValidationRule('isDistrict',(value)=> {
          if(this.state.District && (this.state.District.length)>5 && (this.state.District.length) <30){
            return true;
          }
          return false;
        });
        ValidatorForm.addValidationRule('isCity',(value)=> {
          if(this.state.City && (this.state.City.length) >5 && (this.state.City.length) <30){
            return true;
          }
          return false;
        });
        ValidatorForm.addValidationRule('isAddress',(value)=> {
          if(this.state.Address && (this.state.Address.length) >10 && (this.state.Address.length) <30){
            return true;
          }
          return false;
        });
     
  }

  handleRegister = (event) => {
    event.preventDefault();

    if (this.state.Fullname && this.state.Phonenumber && this.state.District && this.state.City && this.state.Address && this.state.Email) {
      console.log(this.state.Title + " " + this.state.Author + " " + this.state.CoverphotoURL + "" +this.state.ISBNNumber + ""+ this.state.Price + "" + this.state.SelectLangue + "" + this.state.SelectGenre)
      this.setState({
        
        snackbaropen:true,
        message: "Success -Details Added   Successfully."
      })
      setTimeout(()=> this.ViewFeedback(), 3000) 
    } else {
      this.setState({
        // successful: false,
        snackbaropen:true,
        message: "Not valied"
      })

    }
    
  

    let UserBody = {
        id:this.state.id,
        // id:localStorage.getItem('userid'),
        fullname: this.state.Fullname,
        phonenumber:this.state.Phonenumber,
        district:this.state.District,
        address:this.state.Address,
        city: this.state.City,
     };
     userService.updateUser(UserBody)
    //  .then(res => {
    //   this.setState({message:"User updated successfully"});
      
    //  })

      let OrderBody ={
        fullname: this.state.Fullname,
        phonenumber:this.state.Phonenumber,
        district:this.state.District,
        address:this.state.Address,
        city: this.state.City,
        productId:this.state.productId

      }
      OrderService.createOrder(OrderBody)
        .then((res)=>{
          this.setState({message:"Order Placed successfully"});
        })

  }
  
  ViewFeedback = () =>{
    this.props.history.push("/Products")
  }

  render() {
    return (
      localStorage.getItem('user') ?(
       <div>
         <Snackbar open={this.state.snackbaropen} autoHideDuration={3000} onClose={this.snackbarclose} anchorOrigin={{vertical:'top',horizontal:'right'}}>
      <Alert onClose={this.snackbarclose} severity="success"  variant="filled"style={{position:"fixed",right:"100px",width:'550px',zIndex:3,color:"black"}}>
        {this.state.message}
      </Alert>
    </Snackbar>
        <Grid container spacing={1}>
        {/* <Grid item xs={4}/> */}
        <Grid item xs={7} style={{marginLeft:"20%",marginTop:"2%"}}>
          <Card className={style.root} style={{margin:20,boxShadow:"10px 20px 25px black", border: "2px 5px 8px"}}>
           <CardContent>
           {/* <Card variant="outlined"style={{height:600,width:1000,marginTop:"2%",marginLeft:0}}> */}
           <div className="card">
             <ValidatorForm  noValidate autoComplete="off" onSubmit={this.handleRegister}>
                  {!this.state.successful && (
             <Grid container spacing={1}>
                      <Grid item xs={11}>
                        
                            <h2 style={{fontSize:30,color:"#1a237e",fontFamily: 'Raleway'}}>Delivery Information</h2>
                          
                       
                      </Grid>
                      <Grid item xs={12}>
                        <FormControl>
                        <h4 style={{fontFamily: 'Raleway',color:"#64b5f6"}}>Full name</h4>
                        <TextValidator 
                        type="text"  
                        variant="outlined" 
                        placeholder="Enter your first and last name" 
                        style={{width:430}} 
                        onChange={this.onChangeFullname} 
                        value={this.state.Fullname}
                        validators={['required','isName']}
                        errorMessages = {["This field is not Empty","This field must contain 10character"]}
                        
                        />
                        </FormControl>&emsp; &emsp; &emsp; 
                        

                        
                        <FormControl >
                        <h4 style={{fontFamily: 'Raleway',color:"#64b5f6"}}>Phone Number</h4>
                        <TextValidator 
                        type="text"  
                        variant="outlined" 
                        placeholder="Please enter your phone number" 
                        style={{width:430}}
                        onChange={this.onChangePhonenumber} 
                        value={this.state.Phonenumber}
                        validators={['required','isPhone']}
                        errorMessages = {["This field is not Empty","This field must contain 10character"]}
                        
                        />
                        </FormControl>
                        </Grid>
                       
                        <Grid item xs={12}>
                        <FormControl>
                        <h4 style={{fontFamily: 'Raleway' ,color:"#64b5f6"}}>District</h4>
                        <TextValidator 
                        type="text"  
                        variant="outlined" 
                        placeholder="Please enter your district" 
                        style={{width:430}} 
                        onChange={this.onChangeDistrict} 
                        value={this.state.District}
                        validators={['required','isDistrict']}
                        errorMessages = {["This field is not Empty","This field must contain 5character"]}
                        
                        />
                        </FormControl>&emsp; &emsp; &emsp; 
                        
                      

                      
                        <FormControl>
                        <h4 style={{fontFamily: 'Raleway' ,color:"#64b5f6"}}>City</h4>
                        <TextValidator 
                        type="text" 
                        variant="outlined" 
                        placeholder="Enter your city" 
                        style={{width:430}} 
                        onChange={this.onChangeCity}
                        value={this.state.City}
                        validators={['required','isCity']}
                        errorMessages = {["This field is not Empty","This field must contain 5character"]}
                        
                        />
                        </FormControl>
                        </Grid>

                        <Grid item xs={12}>
                        <FormControl >
                        <h3 style={{fontFamily: 'Raleway' ,color:"#64b5f6",marginLeft:200}}>Address</h3>
                        <TextValidator 
                        type="text" 
                        variant="outlined" 
                        placeholder="Enter your Address" 
                        style={{width:430,marginLeft:200}} 
                        onChange={this.onChangeAddress}
                        value={this.state.Address}
                        validators={['required','isAddress']}
                        errorMessages = {["This field is not Empty","This field must contain 10character"]}
                        
                        />
                       </FormControl> &emsp; &emsp; &emsp; 

                       {/* <FormControl >
                        <h3 style={{fontFamily: 'Raleway' ,color:"#64b5f6"}}>Email</h3>
                        <TextValidator 
                        type="text" 
                        variant="outlined" 
                        placeholder="Enter your Email" 
                        style={{width:430}} 
                        onChange={this.onChangeEmail}
                        value={this.state.  Email}
                        validators={['required','isEmail']}
                        errorMessages = {["This field is not Empty"]}
                         

                        />
                       </FormControl>  */}

                       <br/>   <br/><br/>
                        </Grid>
                       
                        <Button type="submit" variant="contained"style={{backgroundColor:'green',marginLeft:500,alignItems:"right",color:"black"}}> <SaveIcon style={{fontSize:20}}/>Place Order</Button>&emsp; &emsp; 
                        {/* <Button  href="/products"  variant="contained"onClick={this.handleBuyNow} style={{backgroundColor:'#fff176',width:150,color:"black"}}> <CancelIcon style={{fontSize:20}}/>Cancel</Button>&emsp; &emsp;  */}
                        <Button href="/products" variant="contained" style={{backgroundColor:'red',width:150,color:"black"}}><CancelPresentationIcon style={{fontSize:20}}/>Cancel</Button> 
                       
                 </Grid>   
                 )}
                 
                
                </ValidatorForm>
                </div>
                {/* </Card> */}
              </CardContent>
        </Card>
        </Grid>
        <Grid item xs={4}/>
      </Grid>
       </div>
      ):(
        <div>
          {this.props.history.push('/login')}
        </div>
      )
    );
                            
}
}

	
