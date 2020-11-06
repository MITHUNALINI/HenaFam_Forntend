import React , {Component} from 'react';
import {AppBar, Button, Typography,Toolbar, Grid, Paper, Card, CardContent} from '@material-ui/core';
import Footer from "./Compoment/Footer";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from './Compoment/Login';
import Signup from './Compoment/Signup';
import AboutUs from './Compoment/AboutUs';
import Admin from './Compoment/Admin';
import  Logo1 from './Compoment/Logo1.png'
import Poultry from './Compoment/Poultry';
import BuyNow from './Compoment/BuyNow';
import {DataContext} from './Compoment/Seaction/Context'
import {Link} from 'react-router-dom'
import Cart from './Compoment/Seaction/Cart';
import Products from './Compoment/Seaction/Products';
import AddUser from './Compoment/AddUser';
import ViewUser from './Compoment/ViewUser';
import AddProduct from './Compoment/AddProduct';
import ViewProduct from './Compoment/ViewProduct';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Profile from './Compoment/Profile';
import Contactus from './Compoment/Contactus';
import ViewFeedback from './Compoment/ViewFeedback';
import AddFeedback from './Compoment/AddFeedback';
import UpdateProduct from './Compoment/UpdateProduct';
import AuthService from './services/auth.service';
import UpdateUser from './Compoment/UpadateUser';
import ViewOrder from './Compoment/ViewOrder';




const style = {
  root: {
    flexGrow: 1,
  },
  paper: {
    flexGrow: 1,
    backgroundColor: '#1a237e',
    color: '#c5cae9'
  },
  menuButton: {
    spacing: 2,
  },
  link: {
    underline: 'none'
  },
  appBar: {
    backgroundColor: "black",
    spacing:3,
    
  },
  search: {
    position: 'relative',
    //borderRadius: theme.shape.borderRadius,
    //backgroundColor: fade(theme.palette.common.white, 0.15),
    // '&:hover': {
    //   backgroundColor: fade(theme.palette.common.white, 0.25),
    // },
    marginLeft: 0,
    width: '100%',
    // [theme.breakpoints.up('sm')]: {
    //  marginLeft: theme.spacing(1),
    //   width: 'auto',
    // },
  },
  searchIcon: {
    //padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
}

class App extends Component{ 
  static contextType = DataContext;

    state = {
        toggle: false,
        showAdminBoard:false,
        currentUser:undefined,
    }

    componentDidMount() {
      const user = AuthService.getCurrentUser();
      
      if (user) {
        this.setState({
          currentUser: AuthService.getCurrentUser(),
          showAdminBoard: user.roles.includes("ROLE_ADMIN")
        });
      }
  
      
    }
    logOut() {
      AuthService.logout();
    }

    menuToggle = () =>{
        this.setState({toggle: !this.state.toggle})
    }
  render() {
    const {toggle,currentUser,showAdminBoard} = this.state;
    const {cart} = this.context;
    const {product,addCart} = this.context;


    return(
      <div>
      <div style={style.root}>
        <Router>
      <AppBar position="static"  style={style.appBar} className={toggle ? "toggle" : ""}>
          <Toolbar>
            <img src ={Logo1} height='40' width='50'/>
          
               <Grid item xs={12}>
              <Button href="/products" color="inherit" ><strong>Home</strong></Button>
              {currentUser &&(
              <Button  href="/poultry"color="inherit"><strong>Poultry</strong></Button>

              )}
            
              <Button  href="/aboutus"color="inherit"><strong>About us</strong></Button>
              <Button href="/Contactus" color="inherit" ><strong>Contact Us</strong></Button>
              {showAdminBoard &&(
              <Button href="/admin" color="inherit" ><strong>Admin Board</strong></Button>
              )}
              

              
              </Grid>
             
            <span>{cart.length}</span>
                        <Link to="/cart"> </Link>
              <Button href="/Cart" color="inherit"  ><strong><ShoppingCartIcon style={{"fontSize":30}}>Addtocard</ShoppingCartIcon></strong></Button>
              {/* <Button href="Profile" color="inherit"><strong> <AccountCircleIcon style={{"fontSize":30}}>Profile</AccountCircleIcon></strong></Button>

               <Button href="/Login" color="inherit"><strong>Login</strong></Button>
               <Button href="/signup" color="inherit"><strong>Signup</strong></Button> */}

                
{currentUser ? (
               <div style={{display:"flex"}}> 
                  
              <AccountCircleIcon style={{"fontSize":30}}></AccountCircleIcon>   <Button href="Profile" color="inherit"><strong>{currentUser.username}</strong></Button>
                 <Button href="/Products" color='inherit' onClick={this.logOut}>
                  <strong>LogOut</strong>
              </Button>
             
              </div>
          ) : (
            <div style={{display:"flex"}}>
              
             <Button href="/Login" color="inherit"><strong>Login</strong></Button>
            <Button href="/signup" color="inherit"><strong>Signup</strong></Button> 

              </div>
           )}
           </Toolbar>
      </AppBar>
      
      
       <div>
            <Switch>
              {/* <Route exact path={["/", "/hena_fam"]} component={HenaFam} /> */}
              <Route exact path="/login" component={Login} />
              <Route exact path="/admin" component={Admin} />
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/aboutus" component={AboutUs} />
              <Route exact path={["/products" ]}component={Products} />
              <Route exact path="/poultry" component={Poultry}/>
              <Route exact path="/BuyNow/:id" component={BuyNow}/>
              <Route exact path="/AddUser" component={AddUser}/>
              <Route exact path="/ViewUser" component={ViewUser}/>
              <Route exact path="/AddProduct" component={AddProduct}/>
              <Route exact path="/ViewProduct" component={ViewProduct}/>
              <Route exact path="/Profile" component={Profile}/>
              <Route exact path="/Contactus" component={Contactus}/>
              <Route exact path="/edit/:id" component={UpdateUser}/>
              <Route exact path="/ViewFeedback" component={ViewFeedback}/>
              <Route exact path="/ViewOrder" component={ViewOrder}/>
              <Route exact path="/AddFeedback/:id" component={AddFeedback}/>
              <Route exact path="/UpdateProduct/:id" component={UpdateProduct}/>
             
              
             
        </Switch>
          </div>
        
        <Footer/>
      </Router>
      </div>
      </div>
    
    );
    }
    }


export default App;