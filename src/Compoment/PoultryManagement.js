import React, { Component } from "react";
import Typography from '@material-ui/core/Typography';



const style= {
    root: {
      flexGrow: 1,
    },
    paper: {
      // padding: theme.spacing(2),
      textAlign: "center",
      width:200,
      marginLeft:50,
      // color: theme.palette.text.secondary,
    },
    media: {
      height: 140,
    },
    gridList: {
      flexWrap: 'nowrap',
      // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
      transform: 'translateZ(10)',
    },
  }

class PoultryManagement extends Component {
  

  render() {
    return (
       
        <div style={style.root}align="justify">
           

                <h2 style={{fontSize:50,color:"#e53935"}}><strong>Poultry Management</strong></h2>
                <Typography variant="body2" color="textSecondary" style={{"fontSize":15}}>

                  <h3>Housing</h3>
                     <ul>
                       <li>
                         Face : East- West
                       </li>

                       <li>
                         Width : 20-30feet
                       </li>
                       
                       <li>
                         Length : Any lenght depending on numbers of birds reared .
                       </li>
                       
                       <li>
                         Height : 8-10 feet
                       </li>
                       
                       <li>
                         Floor : Concrete made
                       </li>
                       
                       <li>
                         Litter : 3-4 inch depth
                       </li>
                       
                        <li>
                         Space : 1 sq.m/bird in winter and 1.5sq.m/bird in summer
                       </li>
                       
                     </ul>
                    
                    <h3>Sudden Death Syndrom</h3>
                    <ul>
                    
                    <b>

                        Case :&emsp; &emsp; 
                        
                        </b>
                        <div style={{display:"flex"}}>
                       
                        &emsp; &emsp; &emsp;    <li> Nutritional </li> &emsp; &emsp;  
                              <li> Stock density</li> &emsp; &emsp;  
                              <li> Drug administration</li>  &emsp; &emsp;  
                        </div>
                            
                        
                        <b>
                        Epidemiology:
                        </b>
                        <div style={{display:"flex"}}>

                        &emsp; &emsp;  <li> Rapidly growing birds </li>&emsp;&emsp; 
                                     <li> Day 3 to 8-12 weeksof age</li> &emsp; &emsp;
                                     <li> Highest mortality at day 9-22days</li> &emsp; &emsp;
                          
                         </div>
                         <b>
                        Clinical signs :
                        </b>
                        <div style={{display:"flex"}}>
                        &emsp; &emsp; <li> Sudden death </li>
                        </div>

                         <b> 
                        Post -mortem :
                        </b> 
                        <div style={{display:"flex"}}>
                        &emsp; &emsp; <li> Birds remains in good condition </li> &emsp; &emsp;
                                      <li> Empty blood in the ventricle</li> &emsp; &emsp;
                                      <li> Congested lung</li> &emsp; &emsp;
                          </div>
                          <b>
                        Treatment :
                        </b>
                        <div style={{display:"flex"}}>
                        &emsp; &emsp; <li> Correction of feed </li> &emsp; &emsp;
                                    <li> V-Plex Vet (B + C)</li> &emsp; &emsp;
                                    <li>Vitamix Ws</li> &emsp; &emsp;
                        </div>
                        
  
                    </ul>
                    
                    

                </Typography>
</div>
)
}
}


export default PoultryManagement;