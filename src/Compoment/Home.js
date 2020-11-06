import React,{Component} from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Grid, Paper, makeStyles } from '@material-ui/core';
import onemonth from './OneMonth.jpeg';
import neck from './Neck.jpeg';
import oneday from './oneday.jpg';
import Input from '@material-ui/core/Input';
import Rating from '@material-ui/lab/Rating';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Slider from '@material-ui/core/Slider';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import IconButton from '@material-ui/core/IconButton';
import ShareIcon from '@material-ui/icons/Share';
//import '../Css/Products.css'


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



export default function Home() {
  // const classes = useStyles();
  const [value, setValue] = React.useState(30);
 


  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleInputChange = (event) => {
    setValue(event.target.value === '' ? '' : Number(event.target.value));
  };

  const handleBlur = () => {
    // if (value < 35) {
    //   setValue(35);
    // } else if (value > 1000) {
    //   setValue(1000);
    // }
    setValue(1000);
  };

  

  

  return (
    
    <div style={theme.root}>
      <Paper style={{display:'flex'}}>
      <Paper style={{height:"80vh",width:300,backgroundColor:"white"}}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography style={theme.heading}>RATING</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          
          <Rating name="size-medium" defaultValue={5} /><br/>
          
          
          </Typography>
        </AccordionDetails>
      </Accordion>
        
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography style={theme.heading}>PRICE</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div style={{width:250}}>
                <Typography>
                <Typography id="input-slider" gutterBottom>
              Volume
            </Typography>
            <Grid container spacing={2} alignItems="center">
              {/* <Grid item>
                <VolumeUp />
              </Grid> */}
              <Grid item xs>
                <Slider
                  value={typeof value === 'number' ? value : 0}
                  onChange={handleSliderChange}
                  aria-labelledby="input-slider"
                  max="1000"
                />
              </Grid>
              <Grid item>
                <Input
                  style={{width:42}}
                  value={value}
                  margin="dense"
                  onChange={handleInputChange}
                  onBlur={handleBlur}
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

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography style={theme.heading}>LAST TIME UPDATED</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            
          <FormControl component="fieldset">
     
     
        <FormControlLabel value="last day" control={<Radio />} label="Last Day" />
        <FormControlLabel value="last week" control={<Radio />} label="Last Week" />
        <FormControlLabel value="last month" control={<Radio />} label="Last Month" />
        <FormControlLabel value="last year" control={<Radio />} label="Last Year" />
        
          </FormControl>
          </Typography>
        </AccordionDetails>
      </Accordion>
        


      </Paper>
      <Paper elevation={0}>
            
              <Paper elevation={0} style={{display:"flex",width:"75vw"}}>
                <Card style={theme.paper }>
                  
                  <CardHeader
                   avatar={
                   <Avatar aria-label="recipe" style={theme.avatar}>
                    O
                    </Avatar>
                     }
                    action={
                    <IconButton aria-label="settings">
                       <ShareIcon />
                     </IconButton>
                    }
                 title="One day chicken" style={{fontFamily: 'Raleway',fontStyle: 'bold',fontSize:20}}
                 subheader="100 availables"
           />
                  <CardMedia
                  style={theme.media}
                   image={oneday} style={{height:250,width:400}}
                  />
                
                
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p" style={{"fontSize":15}}style={{ textAlign:"center" }}>
                    A chicken  is a kind of domesticated bird. It is raised in many places for its meat and eggs<br/>
                    weight-55g

                  </Typography><br/>
                  <div style={{display:"flex"}}>
                    <Grid item xs={12}>
                  
                  <Rating name="size-medium" defaultValue={5} /> <br/> <br/>
                 
                  <Button  href=""size="small" color="primary"variant="contained" style={theme.buybutton}><strong>
                       Add to card
                      </strong></Button>
                  </Grid>
                  <div>
                  
                  <Grid item xs={12 }>
                  <Typography gutterBottom variant="h5" component="h2" style={{fontFamily: 'Raleway',fontStyle: 'bold',fontSize:20}}>
                       85 Rs
                     </Typography>
                    
                     <Button  href="BuyNow"size="small" color="primary"variant="contained" style={{marginTop:15,width:130}} ><strong>
                       BuyNow
                      </strong></Button>
                      </Grid>
                      
                      </div>
                     </div>
                  </CardContent>
                 </Card>
                 
                  
                
                <Card style={theme.paper }>
                <CardHeader
                   avatar={
                   <Avatar aria-label="recipe" style={theme.avatar}>
                    O
                    </Avatar>
                     }
                    action={
                    <IconButton aria-label="settings">
                       <ShareIcon />
                     </IconButton>
                    }
                 title="One month chick" style={{fontFamily: 'Raleway',fontStyle: 'bold',fontSize:20}}
                 subheader="50 availables"
           />
                  <CardMedia
                  style={theme.media}
                   image={onemonth} style={{height:250,width:400}}
                  />
                
                
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2" style={{fontFamily: 'Raleway',fontStyle: 'bold'}}>
                   
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p" style={{"fontSize":15}}style={{ textAlign:"center" }}>
                    One month chick means 30 days age & 4 vaccines vaccinated one.<br/>
                    weight-250g

                  </Typography><br/>
                  <div style={{display:"flex"}}>
                    <Grid item xs={12}>
                  
                  <Rating name="size-medium" defaultValue={4} /> <br/> <br/>
                 
                  <Button  href=""size="small" color="primary"variant="contained" style={theme.buybutton}><strong>
                       Add to card
                      </strong></Button>
                  </Grid>
                  <div>
                  <Grid item xs={12 }>
                  <Typography gutterBottom variant="h5" component="h2" style={{fontFamily: 'Raleway',fontStyle: 'bold',fontSize:20}}>
                       320 Rs
                     </Typography>
                    
                     <Button  href=""size="small" color="primary"variant="contained"style={{marginTop:15,width:130}}><strong>
                       BuyNow
                      </strong></Button>
                      </Grid>
                      </div>
                     </div>
                  </CardContent>
                  </Card>
                  
                  <Card style={theme.paper }>
                  <CardHeader
                   avatar={
                   <Avatar aria-label="recipe" style={theme.avatar}>
                    N
                    </Avatar>
                     }
                    action={
                    <IconButton aria-label="settings">
                       <ShareIcon />
                     </IconButton>
                    }
                 title="Naked Neck Chick" style={{fontFamily: 'Raleway',fontStyle: 'bold',fontSize:20}}
                 subheader="25 availables"
           />
                  <CardMedia
                  style={theme.media}
                   image={neck} style={{height:250,width:400}}
                  />
                
                
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2" style={{fontFamily: 'Raleway',fontStyle: 'bold'}}>
                  
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p" style={{"fontSize":15}}style={{ textAlign:"center" }}>
                    The Naked Neck is a breed of chicken that is naturally devoid of feathers on its neck and vent.<br/>
                    weight-1Kg

                  </Typography><br/>
                  <div style={{display:"flex"}}>
                    <Grid item xs={12}>
                  
                  <Rating name="size-medium" defaultValue={4} /> <br/> <br/>
                
                  <Button  href=""size="small" color="primary"variant="contained" style={theme.buybutton}><strong>
                       Add to card
                      </strong></Button>
                  </Grid>
                  <div>
                  <Grid item xs={12 }>
                  <Typography gutterBottom variant="h5" component="h2" style={{fontFamily: 'Raleway',fontStyle: 'bold',fontSize:20}}>
                       700 Rs
                     </Typography>
                    
                     
                     <Button  href=""size="small" color="primary"variant="contained" style={{marginTop:15,width:130}} ><strong>
                       BuyNow
                      </strong></Button>
                      </Grid>
                      </div>
                     </div>
                  </CardContent>
                  </Card>
                  </Paper>

                  <br/> <br/>

                  
                

                   </Paper>
                <br></br>
          
      </Paper>
     
    </div>
  );

}