import React, { Component } from "react";
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { Card, CardContent, FormControl, Typography,InputLabel, NativeSelect, FormHelperText } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import ReplayIcon from '@material-ui/icons/Replay';
import './AddUser.Css';
import feedbackService from "../services/feedback.service";
import FeedbackIcon from '@material-ui/icons/Feedback';
import CancelPresentationIcon from '@material-ui/icons/CancelPresentation';
import Snackbar from '@material-ui/core/Snackbar';
import { IconButton } from '@material-ui/core';
import { Alert } from "@material-ui/lab";
import { ValidatorForm } from "react-material-ui-form-validator";
import Rating from '@material-ui/lab/Rating';


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

export default class AddFeedback extends Component {
  constructor(props) {
    super(props);

    this.state = {
      User: [],
       productId: "",
      feedback: "",
      feedbackDate: "",
      email:"",
      userId:'',
      snackbaropen: false,
      ratting:'',
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


  // onChangeuserId = (event) => {
  //   this.setState({
  //       userId: event.target.value
  //   });
  // }

  // onChangeproductId = (event) => {
  //   this.setState({
  //     productId: event.target.value
  //   });
  // }

  onChangefeedback = (event) => {
    this.setState({
        feedback: event.target.value
    });
  }
  // onChangeemail =(event) =>{
  //   this.setState({
  //     email : event.target.value
  //   })
  // }

  componentDidMount(){
    // this.reloadFeedbackList();
    const poultryId = this.props.match.params.id;
    if (poultryId) {
      this.setState({productId : poultryId})
    }

    this.setState({User : JSON.parse(localStorage.getItem('user'))})

    ValidatorForm.addValidationRule('isUrl', (value) => {
      if((this.state.feedback.length>5) && (this.state.feedback.length<150)){
        return true;
      }
      return false;
    })

    // this.setState({email:this.state.User.email})
    
  }

  // reloadFeedbackList = () => {
  //   feedbackService.getAllFeedback()
  //      .then((Response) => {
  //        this.setState({FeedbackArr:Response.data})
  //      })
  // }
  

  handleAddFeedback = (event) => {
    event.preventDefault();
    
    let Feedback = {
      userId :this.state.User.id ,
      poultryId : this.state.productId, 
      feedback : this.state.feedback, 
      email:this.state.User.email,
      ratting : this.state.ratting,
      
    }
   
    // console.log("hiiiiiiii")
    // console.log (this.state.feedback)
    feedbackService.createFeedback (Feedback)
    if ( this.state.feedback ) {
    
      this.setState({
        // successful: true,
        snackbaropen:true,
        message: "Success -AddFeedback Saved Successfully."
     })
     setTimeout(()=> this.ViewFeedback(), 3000) 


    } else {
      this.setState({
        // successful: false,
        snackbaropen:true,
        message: "Not valied"
      })
     
    }
  }
  ViewFeedback = () =>{
    this.props.history.push("/Products")
  }
  reset(){
    window.location.reload();
  }

  render() {
    return (
      <>
      <Snackbar open={this.state.snackbaropen} autoHideDuration={3000} onClose={this.snackbarclose} anchorOrigin={{vertical:'top',horizontal:'right'}}>
      <Alert onClose={this.snackbarclose} severity="success"  variant="filled"style={{position:"fixed",right:"100px",width:'550px',zIndex:3,color:"black"}}>
        {this.state.message}
      </Alert>
    </Snackbar>
        <Grid container spacing={1}>
           
        <Grid item xs={4}/>
        <Grid item xs={5} Style={{backgroundColor:"black"}}>
          <Card className={style.root} style={{margin:20,boxShadow:"10px 20px 25px black", border: "2px 5px 8px",marginTop:120}}>
           <CardContent>
           {/* <Paper variant="outlined"> */}
           <div className="card">
        <Grid item xs={4}/>
             <ValidatorForm className={style.root} noValidate autoComplete="off" style={{width:'150%'}}onSubmit={this.handleRegister}>
                  {!this.state.successful && (
             <Grid container spacing={1}>
                      <Grid item xs={11}>

                     
                         <h3 style={{fontSize:30,color:"#1a237e",fontFamily: 'Raleway',fontSize:40}}>Add  Feedback</h3>
                        
                     
                       
                      </Grid>
                      <Grid item xs={12}>
                        {/* <FormControl>
                            
                        <TextField type="" id="outlined-required" label="Email" variant="outlined" helperText="Enter your email" style={{width:"100%",marginLeft:120}} onChange={this.onChangeemail} />
                        </FormControl>&emsp; &emsp; &emsp;  &emsp;  &emsp;  */}
                        </Grid>

                        <Grid item xs={12}>
                         <FormControl >
                         <TextField  multiline rows={4} type="" id="outlined-required" label="Comments" variant="outlined" helperText="Drop your feed back" style={{width:"200%",marginLeft:30}} value = {this.state.feedback} onChange={this.onChangefeedback} />
                        {/* <textarea type= "" id="Comment" label="Comment" variant="outlined" helperText="Enter your comment about our work " style={{width:"200%",height:80,marginLeft:20}} onChange={this.onChangefeedback}/> */}
                        </FormControl>

                        <Typography>
                         <Rating
                           name="simple-controlled"
                            value={this.state.ratting}
                           onChange={(event, newValue) => {
                          console.log(newValue)
                        this.setState({ ratting: newValue});
                         }}
                        /> 
          
          
          </Typography>
                      
                        
                        
                        {/* <FormControl>
                            
                            <TextField type="" id="outlined-required" label="Product Id" variant="outlined" helperText="Enter Product Id" style={{width:"120%"}} onChange={this.onChangeproductId} />
                            </FormControl> */}
                       &emsp; &emsp;  
                        </Grid>
                         
                        {/* <Grid item xs={12}> */}

                      
                        {/* <FormControl>
                        <TextField type="" id="outlined-required" label="Feed Back" variant="outlined" helperText="Enter your feedback"  style={{width:"120%"}}onChange={this.onChangefeedback} />
                        </FormControl>
                         */}
                          {/* <div style = {{marginTop:30}}> */}
                          
                        <Button href="/Save" variant="contained"onClick={this.handleAddFeedback} style={{backgroundColor:'#1b5e20',marginLeft:300 }}> <SaveIcon style={{fontSize:20}}/>Add</Button>&emsp; 
                        <Button  href=""variant="contained" style={{backgroundColor:'#0d47a1',color:"black"}}onClick={this.reset}> <ReplayIcon style={{fontSize:20}}/>RESET</Button>&emsp;
                        <Button href="/products" variant="contained" style={{backgroundColor:'#0d47a1'}}><CancelPresentationIcon style={{fontSize:20}}/>Cencel</Button> 
                       {/* </Paper> */}
                       {/* </div> */}
                        {/* </Grid> */}
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
// }