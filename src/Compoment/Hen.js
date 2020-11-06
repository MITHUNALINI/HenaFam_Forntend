import React, { Component } from "react";
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import image from './Housing.jpeg'
import image1 from './Lighting.jpeg'
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';





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
      width: 800,
      height: 450,
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
       title: 'Image',
       author: 'author',
     },
     
   ];

class Hen extends Component {
  

  render() {
    return (
       
        <div style={style.root}>
            <h1 style={{fontSize:50,color:"#e53935"}}><strong>Importance of poultry industry</strong></h1>

            
            
            <Typography variant="body2" color="textSecondary" component="p" style={{"fontSize":15}}>
                 The Poultry industry has started in 1980.In srilanka 9 registed feed manufactumreds (PRIMA , CIC, GOLDCOIN) more than 25 raw materials importes <br/>
            in srilanka. 80%of raw materials imported from forigien countries. Feeding cost 60 to 70 production is spent for feeding.
            <h3>Importance</h3> 
          
              <ul>
                <li>
              Products are very good proteins source.(Meat and Eggs)<br/>
              </li>
              <li>
              These are the cheap source or protein <br/>
              </li>
              <li>
              Poultry manture is very good for soil fertility <br/>
              </li>
              <li>
              In case of broiler industry very quick return due to short period.(42-45 day) <br/>
              </li>
              <li>
              Very good employment opportunity. (self employment) <br/>
              </li>
              <li>
              Devolopements of agri based industry due to poultry industry. <br/>
              </li>
              <li>
                Contribution to the GDP/GNP by the animal productions.
              </li>

              </ul>
    </Typography>

                             
                <h2 style={{fontSize:50,color:"#e53935"}}><strong>Poultry Housing</strong></h2>
                <Typography variant="body2" color="textSecondary" component="p" style={{"fontSize":15}}>
                Suitable poultry housing is very important for successful poultry farming business. Poultry birds can be raised in both free range and <br/>
                indoor production systems. In case indoor production system, it is very crucial to manage the environment. Poultry need accurate management <br/>
                and environment for better production and welfare. Whether the poultry raised in indoor or outdoor system, make sure the well management, ventilation,<br/>
                lighting, temperature and litter condition.For a small scale poultry production, portable houses are best and this is an organic method. But for sustainable<br/>
                commercial poultry production, planned and proper designed poultry housing is very essential to keep the poultry birds healthy and productive. And this will increase the farming production and income.

                <h3>Environment</h3>
                    A good poultry housing system must have to be weather proof. Weather proof poultry housing system will keep the poultry birds safe from the adverse weather conditions such as cold, rain, wind, hot sun etc. The poultry housing system should have the facilities of providing warmth, particularly during brooding period and winter season. The house must have to be well ventilated. Must have to have the facilities of protecting the poultry birds from harmful predators. Different types of innovative poultry housing design are used in poultry farming business. It may be just a simple house, mobile or portable house or fixed houses with permanent foundation.
                  
                  <br/> <br/>

                  <h3>Temperature</h3>
                      An adult chicken contains about 105° to 107° Fahrenheit temperature in it’s body. The chickens can maintain their body temperature and grow very well in a thermoneutral zone of 65° to 75° Fahrenheit. If the temperature is under or higher than this zone, then you must have to control the temperature in any way. Chickens reduce their food consumption rate in hot weather. They have no sweat glands. As a result, the growth of poultry will be less in hot weather condition. They begin panting at or above 85° Fahrenheit temperature. Drink water frequently to keep them free from dehydration. It is very difficult to combine between high temperature and high humidity, because in those conditions panting does not make the body of chicken cool. In some countries, hot weather is very harmful than cold weather. You must have to control hot weather strictly for broiler poultry farming, as they are very fast growing bird and can’t tolerate high temperature. You have to keep sufficient cool drinking water inside the poultry housing, during summer season. During winter season, use heaters for heating the poultry housing system. Most of the farmers do not use heaters to heat the house and depend on the body warmth of poultry birds for heating. The poultry birds consume more feed in winter season, because they need more energy to keep their body warm and keep them free from cold. Most farmer provide the poultry more food instead of heating the house. Because feeding more feed costs less than heating the house. However, you can use electric heaters or gas brooders for the purpose of heating the poultry housing area. Keep a thermometer inside every poultry house for measuring the daily temperature, and always follow the weather forecasts.
                    

                       <br/> <br/>
                       
                       <div style={style.root}>
      <GridList cellHeight={250} style={style.gridList}>
        {/* <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
        </GridListTile> */}
        {tileData.map((tile) => (
          <GridListTile key={tile.img}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title=" "
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

                  <h3>Ventilation</h3>
                        Well ventilation inside poultry housing system play a very vital role to control the indoor environment. It removes moisture, heat, gas etc. and brings fresh air inside the poultry house. You can design ventilation system in both natural and artificial (mechanical) methods. Most farmers use natural ventilation for poultry production. In natural ventilation system, you can open wide windows and side curtains to ensure the entrance of fresh air to make the house cold during summer season (hot weather). A pair of vent in the roof of poultry house, will help to remove the hot air. A roof of at least six feet height from the floor, is suitable for this purpose. Controlling natural ventilation is more difficult than artificial method. In winter season, make proper ventilation system to preserve heat and remove moister and gas (like ammonia) from the house. Most farmer close the windows and side curtains during winter season, because warm air holds more moisture than cold air. However, you should allow small amount of air inside the house with high moisture once or twice a day. In artificial ventilation system you can fully control the movement of air inside the poultry housing system. But this system is not suitable for free range poultry housing.
                
                <h3>Lighting</h3>
                   Light is also a vary important element for poultry farming. And poultry birds become very sensitive to light. Light helps the poultry birds to be productive, finding food and simulating them for reproduction. Besides light, the poultry birds also need dark period for keeping good health and producing melatonin hormone (which is very important for immune function). Almost all types of poultry birds require 8 hours of darkness period and 16 hours presence of light. Almost all poultry producer use only the natural light for lighting the poultry house. Darkness is helpful for some fast growing broiler species, and helps them for reducing leg disorders and build their body frame. However, poultry chicks require 24 hours light daily after hatching for finding food and water pot. Some commercial broiler poultry producer use long lighting period to encourage the bird consuming more food. This results very fast growing of broilers. Broiler poultry birds do not eat food and drink water in the dark. If the poultry birds are kept in darkness for some moment, then they will be more active in the light than continuous lighting period (and they will eat more food). This is a good practice, and it keeps the poultry birds healthy. In accordance with natural lighting,  you have to use artificial light. In small scale poultry rearing, you can use 14 to 16 hours of lighting period for layer poultry (where artificial lighting is needed for 4 to 6 hours daily depending on the season). But the lighting period should not be more than the longest day of the year. Maintain the lighting period for layer poultry farming very carefully, otherwise they will lay egg very soon or stop laying eggs. Use incandescent or fluorescent bulb for the purpose of artificial lighting. Fluorescent bulbs are very expensive than incandescent bulb. But fluorescent bulbs are very energy efficient and long lasting. However, use bulb according to your choice and demand. In the case of incandescent bulb use a 60 watt bulb for each 200 square feet area, and use a wide reflector always to maximize the light. Clean the bulbs regularly. You can use an automatic controller for maintaining a regular lighting period. Because if you forget to switch on the light manually, then it can hamper the egg and meat production of your poultry birds. Always use waterproof sockets inside the poultry housing system. Maintaining a lighting period inside the poultry house in morning is very effective than lighting in the evening. Adjust the lighting period according to the weather condition and season. Where there is no electricity or load shedding is very high, use batteries, heriken or solar panel for lighting the poultry house.
                <br/> <br/>

                <div style={style.root}>
      <GridList cellHeight={400} style={style.gridList}>
        {/* <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
        </GridListTile> */}
        {tileData1.map((tile) => (
          <GridListTile key={tile.img}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title=" "
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

              </Typography>







             


</div>
)
}
}


export default Hen;