import React, {Component} from 'react';
import { Card, CardContent, Typography, Grid, FormControl, TextField, Button, CircularProgress } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import CardMedia from '@material-ui/core/CardMedia';
import Apic2 from './Apic2.jpg';
import AuthService from '../services/auth.service';
import { ValidatorForm } from 'react-material-ui-form-validator';
import { TextValidator} from 'react-material-ui-form-validator';
import Snackbar from '@material-ui/core/Snackbar';
import { Alert } from "@material-ui/lab";
import zIndex from '@material-ui/core/styles/zIndex';






const style = {
    root:  {
        minWidth: 275,
        backgroundColor:'blue',
        //marginTop: 100,
        color: 'white',
        
         },
    paper: {
      textAlign: "center",
      width:400,
      marginLeft:50,
    },
     
    button: {
      

        marginTop:10,
        paddingTop:15,
        paddingBottom:15,
        marginLeft:30,
        marginRight:30,
        backgroundColor:'#00BCD4',
        borderRadius:20,
        borderWidth: 1,
        borderColor: '#fff',
        backgroundColor:"#926F34",
        width:250,
        height:45,
        
      },
    
         
}

export default class Login extends Component {
    constructor(props){
        super(props);

    this.state = {
      username: "",
      password: "",
      loading: false,
      message: "",
      snackbaropen: false,
    };
    }

    snackbarclose = (event,reason) =>{
      if(reason ==="clickway"){
        return;
      }
      this.setState({snackbaropen: false});
    }

    componentDidMount() {
      ValidatorForm.addValidationRule('isName',(value) => {
        if((this.state.username.length>3) && (this.state.username.length<30)){
          return true;
        }
        return false;
      })
      ValidatorForm.addValidationRule('isPassword', (value) => {
        if((this.state.password.length >4) && (this.state.password.length<35)){
          return true;
        }
        return false;
      })
    }

    onChangeUsername = (e) => {
      this.setState({
        username: e.target.value
      });
    }

    onChangePassword = (e) => {
      this.setState({
        password: e.target.value
      });
    }

    handleLogin = (e) => {
      e.preventDefault();

      this.setState({
        message:"",
        loading: true,
        
      });

      AuthService.login(this.state.username, this.state.password)
      .then(
        response => {
          console.log("response");
          console.log(response);
          localStorage.setItem("userid",response.id);
          this.setState({
            message:"User  Login Successfully",
            successful: true,
            snackbaropen:true,
            severity:'success',
           
          });
          setTimeout(()=> this.User(), 3000) 

        },
      // .then(() => {
        //   this.props.history.push("/Products");
        //   window.location.reload();
        // },
        error => {
          console.log(error.response.status)
          // const resMessage
          // if(error.response.status=="401"){
          //   resMessage = "Unauthorized user: Username/Password is wrong"
          // }else{
            const resMessage = 
            (error.response.status=="401" && " Username/Password is wrong" || error.response && 
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
            
          // }
          

          this.setState({
            loading: false,
            message: resMessage,
            snackbaropen:true,
            severity:'error',
           
          });
            
            
        }
        
      );
      
    }

    User = () =>{
      this.props.history.push("/Products");
      window.location.reload();
    }
    
  render(){ 
    return (
       
      <div> 
        <Snackbar open={this.state.snackbaropen} autoHideDuration={3000} onClose={this.snackbarclose}anchorOrigin={{vertical:'top',horizontal:'right'}} >
        <Alert onClose={this.snackbarclose}  variant="filled"severity={this.state.severity}style={{position:"fixed",right:"100px",width:'550px',zIndex:3,color:"black"}}>                                                                                                                                                                                                                                                                     
          {this.state.message}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
        </Alert>
      </Snackbar>
        <Paper style={{height:750,width:700,backgroundColor:"#e0e0e0",marginLeft:550 , borderRadius:50}}>

       
     
      <Grid container style={{margin:80}}>
        <Grid item xs={10}/>
        <Grid item xs={10} style={{marginTop:30}} >
        <center>
          <Card style={{marginRight:30, borderRadius:50}}>
              <CardContent>
              <Paper  style={{height:650, width:370,marginLeft:10, borderRadius:50}}>
                <h1>LOGIN PAGE</h1>
                <ValidatorForm onSubmit={this.handleLogin}>
                  <Grid container spacing={4}>
                      <Grid item xs={12}>
                      <center>
                      <CardMedia 
                         image={Apic2} style={{height:250,width:250,marginTop:30}}
                       />
                       </center>
                      </Grid>
                      <Grid item xs={12}>
                        <FormControl >
                        
                          <TextValidator
                          type="text" 
                          helperText="Please enter your username"  
                          label="Username"  
                          id="outlined-size-small" 
                          variant="outlined" 
                          backgroundColor="blue" 
                          size="small" 
                          name="username" 
                          value={this.state.username}
                          onChange={this.onChangeUsername}
                          validators={['required',"isName"]}
                          errorMessages = {["This field is not Empty"," Username must be more than 4 characters"]}
                            />
                            
                                 
                            
                        </FormControl>
                       {/* <Button variant="contained" color="primary" >Please Enter Your E-Mail address</Button>*/}
                      </Grid>
                      <Grid item xs={12}>
                        <FormControl>
                          <TextValidator 
                          type="password" 
                          helperText="Please enter password" 
                          label="Password"  
                          id="outlined-size-small" 
                          variant="outlined" 
                          size="small" 
                          name="password" 
                          value={this.state.password}
                          onChange={this.onChangePassword}
                          validators={['required',"isPassword"]}
                          errorMessages = {["This field is not Empty",'Password must be more than 4 characters']}
                            />
                        </FormControl>
                      </Grid>
                      <Grid item xs={12}>
                        <FormControl>
                          <button style={style.button} disabled={this.state.loading}>
                            {this.state.loading && (
                              <CircularProgress size='10'/>

                            )}
                            <span><b>LOGIN</b></span>
                          </button>
                        </FormControl>
                        
                            
      
                      </Grid>
                  </Grid>
                </ValidatorForm>
                </Paper>
              </CardContent>
        </Card>
        </center>
        </Grid>
        <Grid item xs={5}/>
      </Grid>
      </Paper>
      </div>
    );
  }
}






	
	
	

 
