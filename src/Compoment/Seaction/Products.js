import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {DataContext} from './Context'
import '../Css/Products.css'
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Grid, Paper, makeStyles } from '@material-ui/core';
import Input from '@material-ui/core/Input';
import Rating from '@material-ui/lab/Rating';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Slider from '@material-ui/core/Slider';
import IconButton from '@material-ui/core/IconButton';
import ShareIcon from '@material-ui/icons/Share';
//import BuyNow from './Compoment/BuyNow';
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import poultryService from '../../services/poultry.service';
import FeedbackIcon from '@material-ui/icons/Feedback';
import CloseIcon from '@material-ui/icons/Close';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PropTypes from 'prop-types';
import { useTheme } from '@material-ui/core/styles';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';
import authService from '../../services/auth.service';
import Box from '@material-ui/core/Box';



const useStyles1 = makeStyles((theme) => ({
  root: {
    flexShrink: 0,
    marginLeft: theme.spacing(2.5),
  },
}));

function TablePaginationActions(props) {
  const classes = useStyles1();
  const theme = useTheme();
  const { count, page, rowsPerPage, onChangePage } = props;

  const handleFirstPageButtonClick = (event) => {
    onChangePage(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onChangePage(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onChangePage(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onChangePage(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <div className={classes.root}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton onClick={handleBackButtonClick} disabled={page === 0} aria-label="previous page">
        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </div>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onChangePage: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};


  
  const theme= {
    root: {
      flexGrow: 1,
      
    },
    paper: {
      // padding: theme.spacing(2),
      //textAlign: "center",
      width:430,
      marginLeft:30,
      // color: theme.palette.text.secondary,
      height:510
    },
    media: {
      height: 140,
    },
    input: {
      width: 42,
    },
    heading: {
      fontSize: 15,
      fontWeight: 20,
    },
    learnbutton: {
      marginLeft:0,
    },
    buybutton:{
      marginTop:0,
    },
    avathar:{
      textAlign:"right",
      backgroundColor:"black",
      width:55,
      height:55
    }
    
  }



export class Products extends Component {
   constructor (){
       super()
       this.state = {
           value:30,
           PoultryArr: [],
           page:0,
           rowsPerPage:3,
           count:0,
           searchName:"",
           minPrice:30,
           maxPrice:1200,
           ratting:'',
           hover :2,
           showFeedbackIcon: false,
           currentUser: undefined,
        }   
   }

   handleChangePage = (event, newPage) => {
    this.setState({
      page:newPage
    });
    if(this.state.value>30 || this.state.ratting>0){
      poultryService.getPoultrytByPriceBB(this.state.value,this.state.ratting,newPage)
      .then((Response) => {
           this.setState({PoultryArr:Response.data.data,count:Response.data.Total_No_Of_Elements})
          console.log(Response)
  })

    }
   else if(!this.state.name){
    poultryService.getAllPoultryInPage(newPage,this.state.rowsPerPage)
    .then((Response) => {
      this.setState({
        PoultryArr:Response.data.data,
        count:Response.data.TotalNoOfElements
       })
    })
  }else{
    poultryService.searchPoultry(this.state.name,newPage)
    .then((Response) => {
      this.setState({PoultryArr:Response.data.data,count :Response.data.Total_No_Of_Elements })
    })

  }
  };

  onChange=(e) => {
    this.setState({
      ratting:e.target.value

    })
    console.log(e.target.value)
  } 

  handleChangeRowsPerPage = (event) => {
    //setRowsPerPage(parseInt(event.target.value, 10));
    console.log(event.target.value)
    this.setState ({
      page:0,
      rowsPerPage:event.target.value
    })
    poultryService.getAllPoultryInPage(this.state.page,event.target.value)
         .then((Response) => {
           this.setState({
             PoultryArr:Response.data.data,
             count:Response.data.TotalNoOfElements
            })
         })
  };
  
  getAllPoultryInPage = () =>{
    poultryService.getAllPoultryInPage(this.state.page,this.state.rowsPerPage)
         .then((Response) => {
           this.setState({
             PoultryArr:Response.data.data,
             count:Response.data.TotalNoOfElements
            })
         })
  }


   handleSliderChange = (event, newValue) => {
     this.setState ({
           value:newValue
       })
      //  console.log(newValue)
    
  };


   filterData = () => {
    poultryService.getPoultrytByPriceBB(this.state.value,this.state.ratting,0)
    .then((Response) => {
         this.setState({PoultryArr:Response.data.data,count:Response.data.Total_No_Of_Elements,page:0})
        console.log(Response)
})

  }

   handleInputChange = (event) => {
                this.setState({
                   value : event.target.value
               })
       
  };

   handleBlur = () => {
    this.setState ({
        value:1000
    })
  };
  componentDidMount(){
    this.reloadPoultryList();

    const user = authService.getCurrentUser();
console.log(user)
    if (user) {
      localStorage.setItem('login',true)
      this.setState({
        currentUser: user,
        showFeedbackIcon:true
      });
    }
    else{
      localStorage.removeItem('login')
    }
    
  }
  searchPoultry =(e) =>{
    
    this.setState({
      name:e.target.value
    })
    if(!e.target.value){
       this.reloadPoultryList()
    }else{
    poultryService.searchPoultry(e.target.value,0)
    .then((Response) => {
      this.setState({PoultryArr:Response.data.data,count :Response.data.Total_No_Of_Elements,page:0 })
    })
  }
}

  reloadPoultryList = () => {
    poultryService.getAllPoultryInPage(0,3)
    .then((Response) => {
      this.setState({
        PoultryArr:Response.data.data,
        count:Response.data.TotalNoOfElements,page:0
       })
      //  console.log(this.state.PoultryArr);
      
    })

       
  }
  onClearText=()=>{
    this.setState({
      name:""
    })
    this.reloadPoultryList()
  }
  


    static contextType = DataContext;

    render() {
        const {product,addCart,currentUser} = this.context;
        const {showFeedbackIcon} = this.state;
        // console.log(showFeedbackIcon)
        return (
          <div style={{"padding":'20px',}}>
          <center>
            
         
          <TextField  onChange={this.searchPoultry}
                                value={this.state.name}
                                id="input-with-icon-textfield"
                                label="Search for Poultry"
                                variant="filled"
                                InputProps={{
                                    startAdornment: (
                                    <InputAdornment position="start">
                                        <IconButton type="submit" aria-label="search">
                                            <SearchIcon />
                                        </IconButton>
                                        {/* <IconButton  >
                                          < CloseIcon position="start" />
                                         </IconButton> */}
                                    </InputAdornment>
                                    
                                    ),
                                    endAdornment:(
                                      <InputAdornment position="end">
                                        <IconButton onClick={()=>this.onClearText()}>
                                        < CloseIcon />
                                        </IconButton>
                                    </InputAdornment>

                                    )
                                }}
                                />
                                {/* <IconButton  >
                                          < CloseIcon position="start" />
                                         </IconButton> */}
          </center>
      
    
         
          <div className="card2">
            <Grid container spacing = {1}> 
             <Grid item xs={2 }>
              
            <Paper style={{backgroundColor:"white",border:"none",borderColor:"white"}}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography style={theme.heading}style={{fontFamily: 'Raleway',fontStyle: 'bold',fontSize:18}}>RATING</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          
          {/* <Rating name="size-medium" onClick={()=> this.AddRatting ()} defaultValue={this.state.ratting} /><br/> */}

          <Rating
            name="simple-controlled"
            value={this.state.ratting}
            onChange={(event, newValue) => {
              console.log(newValue)
              this.setState({ ratting: newValue});
            }}
          /> 
          {/* <Rating
            name="hover-feedback"
            value={this.state.ratting}
            precision={0.1}
            onChange={(event, newValue) => {
              this.setState({ ratting: newValue});
            }}
            onChangeActive={(event, newHover) => {
              this.setState({ hover: newHover});
            }}
          />
          {this.state.ratting !== null && <Box ml={2}>{labels[this.state.hover !== -1 ? this.state.hover : this.state.ratting]}</Box>} */}
          
          
          </Typography>
        </AccordionDetails>
      </Accordion>
        
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography style={theme.heading}style={{fontFamily: 'Raleway',fontStyle: 'bold',fontSize:18}}>PRICE</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div style={{width:250}}>
                <Typography>
                {/* <Typography id="input-slider" gutterBottom>
              Volume
            </Typography> */}
            <Grid container spacing={2} alignItems="center">
              {/* <Grid item>
                <VolumeUp />
              </Grid> */}
              <Grid item xs>
                <Slider
                  //value={typeof this.value === 'number' ? this.value : 0}
                  value = {this.state.value}
                  onChange={this.handleSliderChange}
                  aria-labelledby="input-slider"
                  max="1100"
                />
              </Grid>
              <Grid item>
                <Input
                  style={{width:45}}
                  value={this.state.value}
                  margin="dense"
                  onChange={ this.handleInputChange}
                  // onBlur={this.handleBlur}
                  inputProps={{
                    //step: 10,
                    min: 35,
                    max: 1000,
                    type: 'number',
                    'aria-labelledby': 'input-slider',
                  }}
                />
                
              </Grid>
              
            </Grid>
      

          </Typography>
          </div>
        </AccordionDetails>
        
        </Accordion>
        <br/><br/><br/>
                            <Button variant="outlined" style={{backgroundColor:"#0d47a1",fontFamily:"Raleway",color:"white",width:"100px"}}type = "submit"onClick={()=>this.filterData()}>Find</Button>
      </Paper>
     
    
      </Grid>
      <Grid item xs={10 }>
            <div id="product" style={{display:"flex"}}>

              {this.state.PoultryArr && (
               
               
                  this.state.PoultryArr.map(product =>(
                     <div className="card" key={product.id} >
                       <div className="card1" key={product.id} >
                       <Grid container spacing = {1}>
                       <div style={{display:"flex"}}>
                       <Grid item xs={10}>
                         
                        <h3 style={{color:"blue",fontFamily: 'Raleway',fontStyle: 'bold',fontSize:20,width:200}}>
                                  <Link >{product.name}</Link>
                              </h3>
                              </Grid>
                              <Grid item xs={1}/>
                              {/* <Grid item xs={1}> */}
                              {
                              showFeedbackIcon && 
                              (
                              <a href={`/AddFeedback/${product.id}`} ><FeedbackIcon style={{fontSize:40,color:"black",height:30,width:70,marginLeft:60}}></FeedbackIcon > </a>
                                
                              )
                              }
                                </div>
                              </Grid>
                              
                         <p style={{fontFamily: 'Raleway',fontStyle: 'bold',fontSize:20}}>Available : {product.avilable}</p>

                    
                          <Link to={`/product/${product.id}`}>
                              <img src={product.url} alt=""/>
                          </Link><br/>
                          <div className="content">
                          <p style={{ textAlign:"center" }}>{product.describtion}</p>
                          
                          <div style={{display:"flex"}}> 
                          
                         
                          <Grid container spacing = {1}>
                          <Grid item xs={10}>
                             <Rating
                              name="hover-feedback"
                              readOnly
                              value={product.ratting}
                              precision={0.1}
                            />
                              <br/> <br/>
                              <Button  href="" onClick={()=> addCart(product.id)} style={{backgroundColor:"black"}}><strong>
                                 <ShoppingCartIcon style={{fontSize:15}}/> Add to card
                                  </strong></Button>
                                 </Grid>
                                 {/* <Grid item xs={2}/> */}
                                 <Grid item xs={1}>
                              
                                 <span style={{fontFamily: 'Raleway',fontStyle: 'bold',fontSize:24,marginLeft:70}}>{product.price}.Rs</span><br/><br/>
                                 <Button  href={`/BuyNow/${product.id}`}   color="primary"variant="contained"style={{backgroundColor:"black",marginLeft:50,marginBottom:-10,width:130,}} ><strong>
                                Buy Now
                               </strong></Button>
                               
                               </Grid>
                               </Grid>
                                 <Grid item xs={12}>

                     </Grid>
                     </div>
                    
                   
                          </div>
                      </div>

                      </div>
                  ))
              
              )}
              {/* <TableFooter>
              
              <TableRow> */}
               <Grid container spacing = {1}>
                 <Grid item xs ={7}/>
                 <Grid item xs = {5} >
                <TablePagination
                 rowsPerPageOptions={[3, 6,10, 16, { label: 'All', value: 1000 }]}
                  // colSpan={3}
                  count={this.state.count}
                  rowsPerPage={this.state.rowsPerPage}
                  page={this.state.page}
                  SelectProps={{
                    inputProps: { 'aria-label': 'Products per page' },
                    native: true,
                  }}
                  onChangePage={this.handleChangePage}
                  onChangeRowsPerPage={this.handleChangeRowsPerPage}
                  ActionsComponent={TablePaginationActions}
                />
                </Grid>
                </Grid>
              {/* </TableRow>
            </TableFooter>
               */}
               
            </div>
            </Grid>
            </Grid>  
            
             
            </div>
          </div>
            
        )
    }
}

export default Products