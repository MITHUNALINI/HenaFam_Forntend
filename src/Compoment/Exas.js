// import React,{Component} from "react";
// import Grid from '@material-ui/core/Grid';
// import CardContent from '@material-ui/core/CardContent';
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
// import {faEdit} from '@fortawesome/free-solid-svg-icons';
// import CardActions from '@material-ui/core/CardActions';
// import TextField from '@material-ui/core/TextField';
// import FormControl from "@material-ui/core/FormControl";
// import Button from "@material-ui/core/Button";
// import Box from '@material-ui/core/Box';
// import SaveIcon from '@material-ui/icons/Save';
// import ListAltOutlinedIcon from '@material-ui/icons/ListAltOutlined';
// import RotateLeftOutlinedIcon from '@material-ui/icons/RotateLeftOutlined';
// // import pharmacyService from "../services/pharmacy.service";
// import Snackbar from '@material-ui/core/Snackbar';
// import { IconButton } from '@material-ui/core';



// const style = {
//   papersty: {
//     minWidth: 275,
//     backgroundColor:'#212121',
//     marginTop: 20,
//   },
//   cardsty: {
//     minWidth: 270,
//     backgroundColor:'#fafafa',
//     margin: 20
//   }
// }

// export default class AddPharmacy extends Component {
//    constructor(props){
//      super(props);
//      this.state ={
//         title: '',
//         price: '',
//         description: '',
//         avatarUrl: '',
//         imageUrl: '',
//         type: '',
//         message: null,
//         snackbaropen: false
//     }
//     this.saveThing = this.saveThing.bind(this);
//    }

//    snackbarclose = (event) =>{
//      this.setState({snackbaropen: false});
//    }

//    saveThing = (e) => {
//     e.preventDefault();
//     let thing = {title: this.state.title, price: this.state.price, description: this.state.description, avatarUrl: this.state.avatarUrl, imageUrl: this.state.imageUrl, type: this.state.type};
//     pharmacyService.createMedicine(thing)
//         .then(res => {
//             this.setState({message : 'Things added successfully.'});
//             // this.props.history.push('/users');
//             this.setState({snackbaropen:true, message:'Product added successfully'})
//         },
//         (error)=>{
//           this.setState({snackbaropen:true, message:'failed'})
//         });
// }

//     onChange = (e) =>
//         this.setState({ [e.target.name]: e.target.value });


//     handleSubmit(event) {
//         alert('A name was submitted: ' + this.state.value);
//         event.preventDefault();
//     }

//   render(){

//     return(
//       <>
//       <Snackbar
//         anchorOrigin={{vertical: 'right', horizontal:'right'}}
//         open={this.state.snackbaropen}
//         autoHideDuration={3000}
//         onClose={this.snackbarclose}
//         message={<span id="message-id">{this.state.message}</span>}
//         action= {[
//           <IconButton
//             key="close"
//             arial-label="Close"
//             color="inherit"
//             onClick={this.snackbarclose}
//           >
//             x
//           </IconButton>
//         ]}/>

//         <Grid container spacing={3}>
//           <Grid item xs={1}/>
//           <Grid item xs={10}>
//           <form onSubmit={this.handleSubmit}>
//             <Grid container>
//               <Grid item xs={2}/>
//               <Grid item xs={8}>
//                 <CardContent style={style.cardsty}>
//                   <CardActions>
//                     <CardContent>
//                       <FontAwesomeIcon icon={faEdit}/>Add New Pharmacy product
//                       <br/>
//                       <br/>
//                       <Grid container spacing={3}>

//                       <Grid item xs={12} sm={6}>
//                         <FormControl fullWidth>
//                           <TextField
//                             required
//                             id="Title"
//                             name="title"
//                             label="madicine's Title"
//                             helperText="Enter madicine Title"
//                             variant="outlined"
//                             value={this.state.title} 
//                             onChange={this.onChange}
//                           />
//                         </FormControl>
//                       </Grid>

//                       <Grid item xs={12} sm={6}>
//                         <FormControl fullWidth>
//                           <TextField
//                             required
//                             id="price"
//                             name="price"
//                             label="madicine's price"
//                             helperText="Enter madicine price"
//                             variant="outlined"
//                             value={this.state.price} 
//                             onChange={this.onChange}
//                           />
//                         </FormControl>
//                       </Grid>

//                       <Grid item xs={12} sm={6}>
//                         <FormControl fullWidth>
//                           <TextField
//                             required
//                             id="description"
//                             name="description"
//                             label="madicine's description"
//                             helperText="about madicine"
//                             variant="outlined"
//                             value={this.state.description} 
//                             onChange={this.onChange}
//                           />
//                         </FormControl>
//                       </Grid>

//                       <Grid item xs={12} sm={6}>
//                         <FormControl fullWidth>
//                           <TextField
//                             required
//                             id="type"
//                             name="type"
//                             label="Pet Type"
//                             helperText="Enter medicine Type"
//                             variant="outlined"
//                             value={this.state.type} 
//                             onChange={this.onChange}
//                           />
//                         </FormControl>
//                       </Grid>
                      
//                       <Grid item xs={12}>
//                         <FormControl fullWidth>
//                           <TextField
//                             required
//                             id="imageUrl"
//                             name="imageUrl"
//                             label="madicine's imageUrl"
//                             helperText="Enter madicine imageUrl"
//                             variant="outlined"
//                             value={this.state.imageUrl} 
//                             onChange={this.onChange}
//                           />
//                         </FormControl>
//                       </Grid>
                      
//                       <Grid item xs={12}>
//                         <FormControl fullWidth>
//                           <TextField
//                             required
//                             id="avatarUrl"
//                             name="avatarUrl"
//                             label="madicine's avatarUrl"
//                             helperText="Enter madicine avatarUrl"
//                             variant="outlined"
//                             value={this.state.avatarUrl} 
//                             onChange={this.onChange}
//                           />
//                         </FormControl>
//                       </Grid>
//                       </Grid>
//                     </CardContent>
//                   </CardActions>
//                   <CardActions>
//                       <Box>
//                         <Box ml={2}>
//                         <FormControl>
//                           <Button href="" variant="contained" 
//                           startIcon={<SaveIcon />}
//                           onClick={this.saveThing}>
//                             <span>Save</span>
//                           </Button>
//                         </FormControl>
//                         </Box>
//                       </Box>
//                       <Box>
//                         <Box ml={2}>
//                         <FormControl>
//                           <Button href="" variant="contained" 
//                           startIcon={<RotateLeftOutlinedIcon />}>
//                             <span>Reset</span>
//                           </Button>
//                         </FormControl>
//                         </Box>
//                       </Box>
//                       <Box>
//                         <Box ml={2}>
//                         <FormControl>
//                           <Button href="" variant="contained" 
//                           startIcon={<ListAltOutlinedIcon />}>
//                             <span>Pharmacy product Lists</span>
//                           </Button>
//                         </FormControl>
//                         </Box>
//                       </Box>
//                     </CardActions>
//                 </CardContent>
//               </Grid>
//               <Grid item xs={2}/>
//             </Grid>
//             </form>
//           </Grid>
//           <Grid item xs={1}/>
//         </Grid>
//       </>
//     )
//   }
// }

	
	
	
