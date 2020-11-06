import React, { Component } from "react";
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import image from './WhiteLegon.jpeg'
import image2 from './Plymathrock.jpeg'
import image3 from './Newhamshaire.jpeg'
import image4 from './Assel.jpeg'
import image7 from './Batan.jpeg'
import image6 from './Frizzled.jpeg'
import image5 from './Silkie.jpeg'
import image8 from './Karadath.jpeg'
import image9 from './Necdack.jpeg'
import Card from '@material-ui/core/Card';
import image1 from './Cornesh.jpeg'
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
//import tileData from './tileData';


const style= {
    root: {
      flexGrow: 1,
    //   display: 'flex',
    //  flexWrap: 'wrap',
    // //justifyContent: 'space-around',
    // overflow: 'hidden',
    // //backgroundColor: theme.palette.background.paper,
     
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
      width: 500,
      height: 300,
      
    },
    
  }

  const tileData = [
    {
       img: image,
       title: 'Image',
       author: 'author',
     },

     
   ];
   const tileData1 = [
    {
       img: image1,
       title: 'Meat_type:Cornish',
       author: 'author',
     },

     {
      img: image2,
      title: 'Meat_type:Plymouth rock',
      author: 'author',
    },
];
const tileData2 = [
  {
     img: image3,
     title: 'Image',
     author: 'author',
   },
];
const tileData3 = [
  {
     img: image4,
     title: 'Image',
     author: 'author',
   },
];
const tileData4 = [
  {
     img: image5,
     title: 'Fancy variety:Silky',
     author: 'author',
   },

   {
    img: image6,
    title: 'Fancy variety: Frizzled',
    author: 'author',
  },
  {
    img: image7,
    title: 'Fancy variety :Bantams',
    author: 'author',
  },
];
const tileData5 = [
  {
     img: image8,
     title: 'Desi type:Kadaknath',
     author: 'author',
   },

   {
    img: image9,
    title: 'Desi type:Naked neck',
    author: 'author',
  },
];



class PoultryBreeds extends Component {
  

  render() {
    return (
       
        <div style={style.root} align="justify">
            

          <h2 style={{fontSize:50,color:"#e53935"}}><strong>Poultry Breeds</strong></h2>
              <Typography variant="body2" color="textSecondary" component="p"align="justify" style={{"fontSize":15,}}>
                     There are hundreds of highly productive poultry breeds available around the world.Some of them are very famous for egg production, some are popular for meat production and some breeds are famous and popular for both meat and egg production. Poultry breeds are of three types, on the basis of their productivity. We have described the name and characteristics of some productive poultry breeds below.
                     <h3>Based on utlity,economcs or commercial value</h3>
                     <ul>
                     <li>
                     Egg_type:White Leghorn
                       <br/> <br/>
                   
      <GridList cellHeight={250} style={style.gridList}>
        {/* <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
        </GridListTile> */}
        {tileData.map((tile) => (
          <GridListTile key={tile.img}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title=" Egg_type:White Leghorn"
              actionIcon={
                <IconButton aria-label={`info about ${tile.title}`} style={style.icon}>
                  <InfoIcon />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
  
                         
                  
                        </li>
                        <li>
                        Meat_type:Cornish,Plymouth rock<br/> <br/>
                      
      <GridList cellHeight={250} style={style.gridList}>
        {/* <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
        </GridListTile> */}
        {tileData1.map((tile) => (
          <GridListTile key={tile.img}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title= {tile.title}
              //title=" Meat_type:Plymouth rock"
              actionIcon={
                <IconButton aria-label={`info about ${tile.title}`} style={style.icon}>
                  <InfoIcon />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    
                   
                       </li>
                       <li>
                         Dual purpose: Eg.Rhode island red,New Hampshire <br/> <br/>

                         <div style={style.root}>
      <GridList cellHeight={250} style={style.gridList}>
        {/* <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
        </GridListTile> */}
        {tileData2.map((tile) => (
          <GridListTile key={tile.img}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title= " Dual purpose:New Hampshire"
              //title=" Meat_type:Plymouth rock"
              actionIcon={
                <IconButton aria-label={`info about ${tile.title}`} style={style.icon}>
                  <InfoIcon />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
                        
                       </li>
                       <li>
                         Game type: Eg.Assel <br/> <br/>
                      
                        
      <GridList cellHeight={250} style={style.gridList}>
        {/* <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
        </GridListTile> */}
        {tileData3.map((tile) => (
          <GridListTile key={tile.img}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title= " Game type: Eg.Assel"
              
              actionIcon={
                <IconButton aria-label={`info about ${tile.title}`} style={style.icon}>
                  <InfoIcon />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
              
                       </li>
                       <li>
                         Fancy variety : Eg.Silky,Frizzled,Bantams <br/> <br/>
                         <GridList cellHeight={250} style={style.gridList}>
        {/* <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
        </GridListTile> */}
        {tileData4.map((tile) => (
          <GridListTile key={tile.img}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title= {tile.title}
              
              actionIcon={
                <IconButton aria-label={`info about ${tile.title}`} style={style.icon}>
                  <InfoIcon />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
                       
                       
                       </li>
                       <li>
                         Desi type: Eg. Kadaknath, Naked neck,Chittagong <br/> <br/>
                         <GridList cellHeight={250} style={style.gridList}>
                      {/* <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
                    </GridListTile> */}
        {tileData5.map((tile) => (
          <GridListTile key={tile.img}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title= {tile.title}
              
              actionIcon={
                <IconButton aria-label={`info about ${tile.title}`} style={style.icon}>
                  <InfoIcon />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
                       
                        
                       </li>
                     </ul>
              </Typography>

    </div>
)
}
}


export default PoultryBreeds;