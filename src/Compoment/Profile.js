import React,{Component} from 'react';
import { Card, CardContent, Grid, FormControl, TextField, Input, FormHelperText, OutlinedInput ,Select } from '@material-ui/core';
import { Paper, Typography, AppBar, Toolbar, Button, IconButton ,Divider,Box } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';




import FacebookIcon from '@material-ui/icons/Facebook';

import BottomNavigation from '@material-ui/core/BottomNavigation';


import './Profile.css';
import authService from '../services/auth.service';
import userService from '../services/user.Service';



class Profile extends Component {
  constructor(props){
    super(props);
    this.state = {show: 'true'};
    this.state={
      firstNameEdite:false,
      lastNameEdite:false,
      emailEdite:false,
      phoneEdite:false,
      addressEdite:false,
      user:{},

      



      updateFirstName:'',
      updateLastName:localStorage.getItem('last_name'),
      updateEmail:'',
      updatePhone:"",
      updateAddress:localStorage.getItem('address'),






      showInfo:'show',
      setName:'',
      username:localStorage.getItem('username'),
     
      email:'',
      firstname:'',
      phonenumber:'',
     
      id:localStorage.getItem('id'),
      roles:localStorage.getItem('roles'),
      // first_name:localStorage.getItem('first_name'),
      last_name: localStorage.getItem('last_name'),
      address: localStorage.getItem('address'),
      // phone:localStorage.getItem('phone'),
    };
  }


//profile_name edite start
    editeFirstName=()=>{
    
        this.setState({
         
          firstNameEdite:true,
        })
    }

    onChangeUpdateFirstName=(e)=>{
        this.setState({
          updateFirstName:e.target.value,
        })
    }

    editeFirstNameCancel=()=>{
        this.setState({
            updateFirstName:this.state.firstname,
          firstNameEdite:false,
        })
    }

    editeFirstNameUpdate=()=>{
      userService.updateFullname(localStorage.getItem("userid"),this.state.updateFirstName)
      .then(res =>{
          alert('update')
          this.setState({
            firstname:this.state.updateFirstName,
            firstNameEdite:false,

          })
      })
      .catch(err => {
        alert('failed')
        this.setState({
           updateFirstName:this.state.firstname,
             firstNameEdite:false,
        })
      })
       
        // localStorage.setItem('first_name', this.state.updateFirstName);
    }
//profile_name edite end


//profile last_name edite start
    editeLastName=()=>{
        this.setState({
          lastNameEdite:true,
        })
    }

    onChangeUpdateLastName=(e)=>{
        this.setState({
          updateLastName:e.target.value,
        })
    }

    editeLastNameCancel=()=>{
        this.setState({
            updateLastName:localStorage.getItem('last_name'),
          lastNameEdite:false,
        })
    }

    editeLastNameUpdate=()=>{
        this.setState({
            last_name:this.state.updateLastName,

          lastNameEdite:false,
        })
        localStorage.setItem('last_name', this.state.updateLastName);
    }
//profile last_name edite end



//profile email edite start
    editeEmail=()=>{
        this.setState({
          emailEdite:true,
        })
    }

    onChangeUpdateEmail=(e)=>{
        this.setState({
          updateEmail:e.target.value,
        })
    }

    editeEmailCancel=()=>{
        this.setState({
            updateEmail:this.state.email,
          emailEdite:false,
        })
    }

    editeEmailUpdate=()=>{
      userService.updateEmail(localStorage.getItem("userid"),this.state.updateEmail)
      
        .then(res =>{
            alert('update')
            this.setState({
              email:this.state.updateEmail,
              emailEdite:false,
            })
        })
        .catch(err => {
          alert('failed')
          this.setState({
            updateEmail:this.state.email,
            emailEdite:false,
          })
        })
        
        // localStorage.setItem('email', this.state.updateEmail);
    }
//profile email edite end


//profile phone edite start
    editePhone=()=>{
        this.setState({
          phoneEdite:true,
        })
    }

    onChangeUpdatePhone=(e)=>{
        this.setState({
          updatePhone:e.target.value,
        })
    }

    editePhoneCancel=()=>{
        this.setState({
            updatePhone:this.state.phonenumber,
          phoneEdite:false,
        })
    }

    editePhoneUpdate=()=>{
      userService.updatePhoneNumber(localStorage.getItem("userid"),this.state.updatePhone)
      
      .then(res =>{
          alert('update')
          this.setState({
            phonenumber:this.state.updatePhone,
            phoneEdite:false,
          })
          window.location.reload();
      })
      .catch(err => {
        alert('failed')
      })
        this.setState({
            updatePhone:this.state.phonenumber,
            phoneEdite:false,
        })
        // localStorage.setItem('phone', this.state.updatePhone);
    }
//profile phone edite end



//profile address edite start
    // editeAddress=()=>{
    //     this.setState({
    //       addressEdite:true,
    //     })
    // }

    // onChangeUpdateAddress=(e)=>{
    //     this.setState({
    //       updateAddress:e.target.value,
    //     })
    // }

    // editeAddressCancel=()=>{
    //     this.setState({
    //         updateAddress:localStorage.getItem('address'),
    //       addressEdite:false,
    //     })
    // }

    // editeAddressUpdate=()=>{
    //     this.setState({
    //         address:this.state.updateAddress,

    //       addressEdite:false,
    //     })
    //     localStorage.setItem('address', this.state.updateAddress);
    // }
//profile address edite end
   componentDidMount(){
    this.state.user = authService.getCurrentUser();
    console.log(this.state.user)
    userService.getUserById(this.state.user.id)
    .then((Response) => {
      console.log(Response)
      this.setState({
        user:Response.data,

        updateEmail:Response.data.email,
        email:Response.data.email,
        updateFirstName:Response.data.fullname,
        firstname:Response.data.fullname,
        updatePhone:Response.data.phonenumber,
        phonenumber:Response.data.phonenumber
      })
    })
   }



  render(){


    return (
      <div >
      
        <Paper className='profileDivWarraper' elevation={1} style={{border:'2px solid black',boxShadow:"10px 5px 25px",height:700,margin:100,borderStyle:"solid",marginLeft:300,marginTop:5}}>
          <center>
          <h1 style={{fontFamily: 'Raleway',fontSize:40}}> Profile</h1>
         
          </center>
            <Grid container>
               <Grid item xs={12}>

                    <Paper id="userNameDiv" elevation={3} style={{height:100}}>
                      
                        <Typography variant="h6" id="userNameDivTitle">User name</Typography>
                         <Typography id="userNameLabel">{this.state.user.username}</Typography> 
                    </Paper>

                  </Grid>
                  <Grid item xs={12}>

                      <Paper id="emailDiv" elevation={3} style={{height:100}}>
                         <Box id="emailbox">
                        <Typography variant="h6" id="emailDivTitle">Email</Typography>
                       {!this.state.emailEdite &&(
                          <Typography id="emailLabel">{this.state.email}</Typography>
                        )}
                        {this.state.emailEdite &&(
                            <FormControl variant="outlined" id='emailIp'>
                            <InputLabel htmlFor="component-outlined">Email</InputLabel>
                            <OutlinedInput
                    id="component-outlined"
                    value={this.state.updateEmail}
                    onChange={this.onChangeUpdateEmail}
                    label="Email"
                />
            </FormControl>
        )}
    </Box>
    {/* {!this.state.emailEdite &&(
        <Button id="emailEditeBtn" onClick={this.editeEmail}>Edit</Button>
    )}
    {this.state.emailEdite &&(
      <Box style={{float:'right'}}>
        <Button id="emailEditeCancelBtn" onClick={this.editeEmailCancel}style={{marginTop:10}}>Cancel</Button>
        <Button id="emailEditeUpdateBtn" onClick={this.editeEmailUpdate}style={{marginTop:10}}>Update</Button>
      </Box> 
     )} */}
</Paper>

</Grid>

                  <Grid item xs={12}>

                    <Paper id="firstNameDiv" elevation={3} style={{height:100}}>
                        <Box id="firstNamebox" style={{height:100}}>
                          <Typography variant="h6" id="firstNameDivTitle">Full Name</Typography>
                          {!this.state.firstNameEdite &&(
                              <Typography id="firstNameLabel">{this.state.firstname}</Typography>
                          )}
                          {this.state.firstNameEdite &&(
                              <FormControl variant="outlined" id='firstNameIp'style={{markerEnd:100}}>
                                  <InputLabel htmlFor="component-outlined">Full Name</InputLabel>
                                  <OutlinedInput
                                      id="component-outlined"
                                      value={this.state.updateFirstName}
                                      onChange={this.onChangeUpdateFirstName}
                                      label="First Name"
                                  />
                              </FormControl>
                          )}
                        </Box>
                          {!this.state.firstNameEdite &&( 
                            <Button id="firstNameEditeBtn" onClick={this.editeFirstName}>Edit</Button>
                        )} 
                        {this.state.firstNameEdite &&(
                         <Box style={{float:'right'}}> 
                             <Button id="firstNameEditeCancelBtn" onClick={this.editeFirstNameCancel}>Cancel</Button>
                             <Button id="firstNameEditeUpdateBtn" onClick={this.editeFirstNameUpdate}>Update</Button>
                          </Box>
                         )} 
                    </Paper>

                  </Grid>

                   {/* <Grid item xs={12}>

                    <Paper id="lastNameDiv" elevation={3} style={{height:100}}>
                        <Box id="lastNamebox">
                            <Typography variant="h6" id="lastNameDivTitle">Roles</Typography>
                            {!this.state.lastNameEdite &&(
                                <Typography id="lastNameLabel">{this.state.user.roles}</Typography>
                            )}
                            {this.state.lastNameEdite &&(
                                <FormControl variant="outlined" id='lastNameIp'>
                                    <InputLabel htmlFor="component-outlined">Last Name</InputLabel>
                                    <OutlinedInput
                                        id="component-outlined"
                                        value={this.state.updateLastName}
                                        onChange={this.onChangeUpdateLastName}
                                        label="Last Name"
                                    />
                                </FormControl>
                            )}

                        </Box>
                        {!this.state.lastNameEdite &&(
                            <Button id="lastNameEditeBtn" onClick={this.editeLastName}>Edit</Button>
                        )}
                        {this.state.lastNameEdite &&(
                          <Box style={{float:'right'}}>
                            <Button id="lastNameEditeCancelBtn" onClick={this.editeLastNameCancel} style={{marginTop:10}}>Cancel</Button>
                            <Button id="lastNameEditeUpdateBtn" onClick={this.editeLastNameUpdate} style={{marginTop:10}}>Update</Button>
                          </Box>
                        )}
                    </Paper>

                  </Grid>  */}

                  {/* <Grid item xs={12}>

                    <Paper id="emailDiv" elevation={3} style={{height:100}}>
                        <Box id="emailbox">
                            <Typography variant="h6" id="emailDivTitle">Email</Typography>
                            {!this.state.emailEdite &&(
                                <Typography id="emailLabel">{this.state.email}</Typography>
                            )}
                            {this.state.emailEdite &&(
                                <FormControl variant="outlined" id='emailIp'>
                                    <InputLabel htmlFor="component-outlined">Email</InputLabel>
                                    <OutlinedInput
                                        id="component-outlined"
                                        value={this.state.updateEmail}
                                        onChange={this.onChangeUpdateEmail}
                                        label="Email"
                                    />
                                </FormControl>
                            )}
                        </Box>
                        {!this.state.emailEdite &&(
                            <Button id="emailEditeBtn" onClick={this.editeEmail}>Edit</Button>
                        )}
                        {this.state.emailEdite &&(
                          <Box style={{float:'right'}}>
                            <Button id="emailEditeCancelBtn" onClick={this.editeEmailCancel}style={{marginTop:10}}>Cancel</Button>
                            <Button id="emailEditeUpdateBtn" onClick={this.editeEmailUpdate}style={{marginTop:10}}>Update</Button>
                          </Box> 
                         )}
                    </Paper>

                  </Grid> */}











                  <Grid item xs={12}>

                    <Paper id="phoneDiv" elevation={3} style={{height:100}}>
                        <Box id="phonebox">
                            <Typography variant="h6" id="lastNameDivTitle">Phone Number</Typography>
                            {!this.state.phoneEdite &&(
                                <Typography id="emailLabel">{this.state.phonenumber}</Typography>
                            )}
                            {this.state.phoneEdite &&(
                                <FormControl variant="outlined" id='emailIp'>
                                    <InputLabel htmlFor="component-outlined">Phone</InputLabel>
                                    <OutlinedInput
                                        id="component-outlined"
                                        value={this.state.updatePhone}
                                        onChange={this.onChangeUpdatePhone}
                                        label="Phone"
                                        type="Number"
                                    />
                                </FormControl>
                            )}
                        </Box>
                        {!this.state.phoneEdite &&(
                            <Button id="phoneEditeBtn" onClick={this.editePhone}>Edit</Button>
                        )}
                        {this.state.phoneEdite &&(
                          <Box style={{float:'right'}}>
                            <Button id="phoneEditeCancelBtn" onClick={this.editePhoneCancel} style={{marginTop:10}}>Cancel</Button>
                            <Button id="phoneEditeUpdateBtn" onClick={this.editePhoneUpdate}style={{marginTop:10}}>Update</Button>
                          </Box>
                        )}
                    </Paper>

                  </Grid>



                  <Grid item xs={12}>

                    {/* <Paper id="addressDiv" elevation={3}>
                        <Box id="addressbox">
                            <Typography variant="h6" id="lastNameDivTitle">Location</Typography>
                            {!this.state.addressEdite &&(
                                <Typography id="emailLabel">{this.state.address}</Typography>
                            )}
                            {this.state.addressEdite &&(
                                <FormControl variant="outlined" id='emailIp'>
                                    <InputLabel htmlFor="component-outlined">Address</InputLabel>
                                    <OutlinedInput
                                        id="component-outlined"
                                        value={this.state.updateAddress}
                                        onChange={this.onChangeUpdateAddress}
                                        label="Address"
                                    />
                                </FormControl>
                            )}
                        </Box>
                        {!this.state.addressEdite &&(
                            <Button id="phoneEditeBtn" onClick={this.editeAddress}>Edit</Button>
                        )}
                        {this.state.addressEdite &&(
                          <Box style={{float:'right'}}>
                            <Button id="addressEditeCancelBtn" onClick={this.editeAddressCancel}>Cancel</Button>
                            <Button id="addressEditeUpdateBtn" onClick={this.editeAddressUpdate}>Update</Button>
                          </Box>
                        )}
                    </Paper> */}

                  </Grid>
                  </Grid>


</Paper>

</div>

);
}
}

export default Profile;


	
	
	
