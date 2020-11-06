import React, {Component} from 'react';
import Paper from '@material-ui/core/Paper';
import CardMedia from '@material-ui/core/CardMedia';
import { Card, CardContent, Typography, Grid, FormControl, TextField, Button } from '@material-ui/core';
import pic from './pic.jpg';
// import picture3 from './picture3.jpg';
import {ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import AuthService from '../services/auth.service';
import Snackbar from '@material-ui/core/Snackbar';
import { Alert } from "@material-ui/lab";

const style = {
    root:  {
        minWidth: 275,
        color: '#002984',
        
      },
    
}

export default class Signup extends Component {
    constructor(props){
        super(props);

    this.state = {
      username: "",
      password: "",
      email: "",
      confirmpassword:"",
      message:"",
      snackbaropen: false,
      successful: false
    };
  }
  snackbarclose = (event,reason) =>{
    if(reason ==="clickway"){
      return;
    }
    this.setState({snackbaropen: false});
    this.props.history.push("/login");
  }


componentDidMount(){
ValidatorForm.addValidationRule('isName',(value)=> {
  if((this.state.username.length >3) && (this.state.username.length <30)){
    return true;
  }
  return false;
});
ValidatorForm.addValidationRule('isPassword',(value)=> {
  if((this.state.password.length >4) && (this.state.password.length <20)){
    return true;
  }
  return false;
});
ValidatorForm.addValidationRule('isConfirmpw',(value)=> {
  if((this.state.password) == (this.state.confirmpassword)){
    return true;
  }
  return false;
});

}
handleUsernameChange = (e) => {
  this.setState({
    username: e.target.value
  });
  // console.log(this.state.username)
}
handleEmailChange = (e) => {
  this.setState({
    email: e.target.value
  });
}
handlePasswordChange = (e) => {
  this.setState({
    password: e.target.value
  });
}
handleConfirmPasswordChange = (e) => {
  this.setState({
    confirmpassword: e.target.value
  });
}
handleSignup = (e) => {
  e.preventDefault();
  // console.log("Hiiiiiiiiiiiiiiiiii")

  this.setState({
    message:"",
    successful:false
  });

  AuthService.signup(
    this.state.username,
    this.state.email,
    this.state.password,
    this.state.confirmpassword
  ).then(
    response => {
      this.setState({
        message:response.data.message,
        successful: true,
        snackbaropen:true,
        severity:'success',
      });
      // setTimeout(()=> this.login(), 3000) 
    },
    error => {
      const resMessage = 
      (error.response &&
        error.response.data &&
        error.response.data.message) ||
      error.message ||
      error.toString();

      this.setState({
        successful: false,
        message: resMessage,
        snackbaropen:true,
        severity:'error',
      });
    }
    
  );
}

// login = () =>{
//   this.props.history.push("/login")
// }
render(){ 

  const {username,password,email,confirmpassword} = this.state;

    return (
      // <div style={{backgroundImage: `url(${picture3})`,backgroundRepeat:"no-repeat",height:"100%",width:"100%",backgroundPosition:'center',backgroundSize:'cover',marginTop:1}}>
        <div>
           <Snackbar open={this.state.snackbaropen} autoHideDuration={3000} onClose={this.snackbarclose}anchorOrigin={{vertical:'top',horizontal:'right'}} >
        <Alert onClose={this.snackbarclose}  variant="filled"severity={this.state.severity}style={{position:"fixed",right:"100px",width:'550px',zIndex:3,color:"black"}}>                                                                                                                                                                                                                                                                     
          {this.state.message}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
        </Alert>
      </Snackbar>
      {!this.state.successful &&(
      <Paper style={{height:820,width:730, borderRadius:50,  backgroundColor:"#e0e0e0",marginLeft:600,border:'1px solid black',boxShadow:"10px 5px 25px",marginTop:40}}>

      <Grid container style={{margin:20}}>
        <Grid item xs={10}/>
        <Grid item xs={10} style={{marginTop:20}}>
        <center>
          <Card style={{height:770,width:670, borderRadius:50,marginLeft:10,marginRight:20,}}>
              <CardContent>
                <Paper style={{ borderRadius:50,height:720, width:370,marginLeft:10}}>
                  <center>
                <h1 style={{color:"blue"}}>Sign Up Now </h1>
                </center>
                <ValidatorForm onSubmit={this.handleSignup}>
                   
                  <Grid container spacing={1}>
                      <Grid item xs={12}>
                        <center>
                      <CardMedia 
                         image={pic} style={{height:270,width:250,marginTop:30}}
                       />
                       </center>
                      </Grid>
                      <Grid item xs={12}>
                        <FormControl>
                          <TextValidator type="text" style={{width:300,}} 
                          helperText="Please enter username" 
                          label="Username"  
                          id="outlined-size-small" 
                          variant="standard" 
                          backgroundColor="#002984" 
                          size="small" 
                          name="username" 
                          value={username}
                          onChange={this.handleUsernameChange}
                          validators={['required',"isName"]}
                          errorMessages={["This field is not empty","Enter a valid user name"]}
                      />
                        </FormControl>
                      </Grid>
                      <Grid item xs={12}>
                        <FormControl>
                          <TextValidator type="text" style={{width:300,}} 
                          helperText="Please enter e-mail address" 
                          label="Email Address"  
                          id="outlined-size-small" 
                          variant="standard" 
                          size="small" 
                          name="email" 
                          value={email}
                          onChange={this.handleEmailChange}
                          validators={['required','isEmail']}
                          errorMessages={["This field is not empty","Email is not valid"]}

                            />
                        </FormControl>
                      </Grid>
                      <Grid item xs={12}>
                        <FormControl>
                          <TextValidator type="password" style={{width:300,}} 
                          helperText="Please enter password" 
                          label="Password"  
                          id="outlined-size-small" 
                          variant="standard" 
                          backgroundColor="#002984" 
                          size="small" 
                          name="password" 
                          value={password}
                          validators={['required','isPassword']}
                          onChange={this.handlePasswordChange}
                          errorMessages={["This field is not Empty","Enter valid password"]}


                            />
                        </FormControl>
                      </Grid>
                      <Grid item xs={12}>
                        <FormControl>
                          <TextValidator type="password" style={{width:300,}} 
                          helperText="Please enter again password " 
                          label="Confirm Password"  
                          id="outlined-size-small" 
                          variant="standard" 
                          backgroundColor="#002984" 
                          size="small" 
                          name="confirmpassword" 
                          value={confirmpassword}
                          validators={['required','isConfirmpw']}
                          onChange={this.handleConfirmPasswordChange}
                          errorMessages={["This field is not Empty","Your password is not matching"]}

                            />
                        </FormControl>
                      </Grid>
                      
                      <Grid item xs={12}>
                        <FormControl>
                          <Button type="submit" style={{borderRadius:20,backgroundColor:'#926F34',width:200,height:40,borderColor: '#fff'}}>
                            <span><b>SignUp</b></span>
                          </Button>
                        </FormControl>
                      </Grid>
                  </Grid>
                  
                  {/* {
                    this.state.message && (


                    <div>
                      <Typography color={this.state.successful ? 'primary' : 'error'} variant="overline" display="block" gutterBottom>
                          <strong>{this.state.message}</strong>
                      </Typography>
                    </div>
                   )
                     } */}
                                    
                </ValidatorForm>
                </Paper>
              </CardContent>
        </Card>
        </center>
        </Grid>
        <Grid item xs={5}/>
      </Grid>
      </Paper>
      )}
      </div>
    );
  }
}
                
 
	
	
	

                
 
	
