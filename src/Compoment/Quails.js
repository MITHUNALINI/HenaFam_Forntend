import React, { Component } from "react";
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import image from './Qul.jpeg'
import image1 from './raisingquail.jpg'
import image2 from './Diases.jpeg'
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
      width:400,
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
   const tileData2 = [
    {
       img: image2,
       title: 'Image',
       author: 'author',
     },
     
   ];

  class Quails extends Component {
      render(){
          return (
            <div style={style.root}>
            <h1 style={{fontSize:50,color:"#e53935"}}><strong>Quail Farming</strong></h1> 
            <Typography variant="body2" color="textSecondary" component="p" style={{"fontSize":15}}>

                Before discussing more about commercial quail farming business, let me first explain ‘what is quail farming?’ Actually the term ‘quail farming’ means, raising quails commercially (like other poultry birds) for the purpose of profitable eggs and meat production. As far as we have experienced, quail farming business is very easy, lucrative and entertaining.
                   <br/> <br/>

                It’s very easy to maintain a quail farm, because quails are among the smallest species of poultry birds. The Japanese scientists first tamed the wild quails and revealed the ways to raise them as domestic birds. Commercial quail farming in Japan has spread tremendously. Now, people throughout the world performing quail farming business commercially for the purpose of meat and egg production.
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

                  Quail farming is very profitable like other farming ventures, such as chicken, turkey or duck farming business. Almost all types of weather conditions are suitable for starting quail farming business. Meat and eggs of quail are very tasty and nutritious. Quail eggs are very nutritious than other poultry eggs. Because quail eggs contain comparatively more protein, phosphorus, iron, vitamin A, B1 and B2.
                     <br/>

                  Quail farming can play a vital role to meet up the demand of food and nutrition. Quail farming business require small capital and labor. Quails can be raised along with your other poultry birds for meat or eggs production.
            
             <h3>Characteristics of Quail</h3>
                <ul>
                    <li>
                       Quails are very small sized bird.
                    </li>
                    <li>
                      An adult quail weights between 150 to 200 grams and an egg weights around 7 to 15 grams.
                    </li>
                    <li>
                      Female quails start laying eggs within their 6 to 7 weeks of age and continuously lay one egg daily.
                    </li>
                    <li>
                       They lay about 300 eggs in their first year of life. After that they produce about 150 to 175 eggs in second year. Eggs production gradually decrease after their first year of laying period.
                    </li>
                    <li>
                      Quail egg is very suitable for human health. It contains 2.47 % less fat than chicken egg. Many people believe that ‘quail eggs help to prevent blood pressure, diabetic, pant etc’.
                    </li>
                    <li>
                      Quail meat is very tasty and nutritious. Fat is very low in their meat. So quail meat is very suitable for blood pressure patients.
                    </li>
                    <li>
                    Eggs are very beautiful with multiple color. 
                    </li>
                </ul>

                <h3>Advantages of Quail Farming</h3>
                   Quails are smaller sized poultry birds, and it’s very easy to handle them. The main benefits of starting quail farming business are listed below.
                <ul>
                    <li>
                       Quails are smaller sized bird, so they can be raised within small place.
                    </li>
                    <li>
                       Feeding cost of quails are comparatively lower than chickens or other poultry birds.
                    </li>
                    <li>
                       Diseases are less in quails, and they are very hardy.
                    </li>
                    <li>
                      Quails grow very fast and gain maturity faster than any other poultry birds
                    </li>
                    <li>
                       They start laying eggs within their 6 to 7 weeks of age.
                    </li>
                    <li>
                       It takes about 16 to 18 days to hatch their eggs.
                    </li>
                    <li>
                       Meat and eggs of quail are very tasty, delicious and nutritious. So it’s a great source of food and nutrition.
                    </li>
                    <li>
                       Quail farming needs small capital, and labor cost is very low.
                    </li>
                    <li>
                       Quails can be raised successfully in commercial method. Some people have already started commercial quail farming business.
                    </li>
                    <li>
                      Quails are very strong bird and diseases or other health problems are less. So risks are less in this business.
                    </li>
                    <li>
                      Quail meat contain less fat. So, it is suitable for high blood pressure patients
                    </li>
                    <li>
                      As it is a lucrative business venture, so commercial quail farming business can be a great source of income and employment for the unemployed educated people. Even, you can start raising a few quails along with your current profession.
                    </li>
                </ul>

                <h3>Life Cycle of Quails</h3>

                Quail generally survive for 3 to 4 years. An adult quail weights between 150 to 200 grams. Female quails start laying eggs from their 6 to 7 weeks of age. Each egg weights between 7 to 15 grams. They lay more than 300 eggs per year. Their eggs are very beautiful. Presence of light increase the egg productive efficiency of quails. They usually lay eggs at afternoon. It takes about 17 days to hatch their eggs.
                   <br/> <br/>
                 A newly born quail chick weights around 6 to 7 grams. Quail never incubate their eggs. For successful breeding purpose keep one male quail with every five female quails. Quail chicks become very sensitive and take about two weeks to be strong enough. Eggs of 9 to 11 grams weight with smooth and hard eggshell are perfect for hatching and producing chicks.
            </Typography>

            <h1 style={{fontSize:50,color:"#e53935"}}><strong>Quail Breeds</strong></h1> 
            <Typography variant="body2" color="textSecondary" component="p" style={{"fontSize":15}}>
                 At present there are 18 species of quails are available, which are very suitable for profitable quail farming business. Some of these breeds are famous for egg production and some are popular for meat production. According to their production, quail breeds are of two types such as broilers and layers. Here we have stated some popular broiler and layer quail breeds.
                 
            <h3>Layer Quail Breeds</h3>
            <ul>
                <li>
                  Tuxedo
                </li>
                <li>
                  Pharaoh
                </li>
                <li>
                  British Range
                </li>
                <li>
                  English White
                </li>
                <li>
                   Manchurian Golden
                </li>
             </ul>

             <h3>Broiler Quail Breeds</h3>
             <ul>
                 <li>
                   Bobwhite (American)
                 </li>
                 <li>
                   White Breasted (Indian)
                 </li>
             </ul>
             <h2>Housing</h2>
                Housing is very important for quail farming. Follow the instructions mentioned below while making house or cages for your quails.
                <ul>
                    <li>
                    Quail can be raised in both litter and cage systems. But quail farming in cage system is more suitable than raising them in deep litter system. In cage system, management is very easy and diseases or other problems are less.
                    </li>
                    <li>
                    Make a proper ventilation system and ensure proper flow of air and light inside their house.
                    </li>
                    <li>
                    You can raise 50 quails in a cage measuring 120 cm length, 60 cm wide and 25 cm height.
                    </li>
                    <li>
                    Use wire net for making their cages.
                    </li>
                    <li>
                    Measurement of the net would be 5 mm x 5 mm for adult quails.
                    </li>
                    <li>
                    The house must have to be out of the reach of wild animals. Also prevent all types of predators.
 
                    </li>
                </ul>
            </Typography>

            <h1 style={{fontSize:50,color:"#e53935"}}><strong>Quail Feed</strong></h1> 
            <Typography variant="body2" color="textSecondary" component="p" style={{"fontSize":15}}>
               For keeping your quails healthy, proper growing and highly productive, provide them balanced feed regularly. An adult quail consumes about 20 to 25 grams of food daily. Chick feed should contain 27%  and adult feed 22-24% of protein.
              
              <h2>Egg Production</h2>
                 Presence of adequate light is highly recommended for desired egg production from your quails. You can provide artificial light and heat by using electric bulb or heater. You can use 40 to 100 watt bulb for this purpose. Demand of light and heat varies depending on the season.
                   If you want successful breeding and want to hatch their eggs, then keep one male with every five female quails. For getting better egg production, select highly productive  breeds and always keep their house dry and clean.
                  <br/> <br/>
                  <div style={style.root}>
      <GridList cellHeight={250} style={style.gridList}>
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


                  Egg production also depends on temperature, feeding , water, care and management. To get desired egg production from your quails, light play a vital role.
            

            <h2>Raising Quail Chicks</h2>
            Quails never incubate their eggs. So, you can produce chicks by hatching their eggs through chickens or artificially through using incubators. Incubation period for quail egg is about 16 to 18 days. For maximum egg production, 16 hours of lighting period is required daily inside the quail house. Keep newly born quail chicks in a brooder house.
              <br/> <br/>
           Chicks need artificial heat and temperature management system for 14 to 21 days from their birth. Quail chick become very sensitive. They can be raised in both litter and battery system. Keep in mind the following factors while raising quail chicks.
             
             <ul>
                 <li>
                 Adequate temperature
                 </li>
                 <li>
                 Sufficient light
                 </li>
                 <li>
                 Proper air movement
                 </li>
                 <li>
                 Density of quail chicks
                 </li>
                 <li>
                 Supply of food and water
                 </li>
                 <li>
                 Hygienic rearing rules
                 </li>
             </ul>

            </Typography>

            <h1 style={{fontSize:50,color:"#e53935"}}><strong>Quail Diseases</strong></h1> 
            <Typography variant="body2" color="textSecondary" component="p" style={{"fontSize":15}}>
            Diseases are less in quails, compared to other poultry birds. But you have to take good care and manage them properly, to keep them free from all types of diseases or illness. Good care and management is a must for profitable quail farming business. Generally they are not provided any disease preventive vaccines.
            Quail chicks can’t tolerate weather change, and sudden temperature change. So they get affected by disease, if they experience sudden temperature or weather changes. Be very careful during this period. Following diseases are very harmful for the quails.
              
           < div style={style.root}>
      <GridList cellHeight={250} style={style.gridList}>
        {/* <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
        </GridListTile> */}
        {tileData2.map((tile) => (
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


              <ul>
                  <li>
                    Coccidiosis: If the quails get affected by coccidiosis disease, serve them coaxial 20 by mixing with water (two grams per litter) for three days. Otherwise feed this according to the advice of a veterinarian.
                  </li>
                  <li>
                  Ulcerative Enteritis: Mix one gram streptomycin with one litter water and serve it to the quails for three days. This will stop ulcerative enteritis disease.
                  </li>
              </ul>
            </Typography>

            <h1 style={{fontSize:50,color:"#e53935"}}><strong>Quail Marketing</strong></h1> 
            <Typography variant="body2" color="textSecondary" component="p" style={{"fontSize":15}}>
            Quail meat and eggs are very tasty and highly enriched with nutrient elements. So there is already an established market for quail products. As quail birds and their eggs are small in size, so it is cheap in price and all types of people can purchase. So you don’t have to worry much about marketing your products. You can easily sell the eggs and meat in your local market. But it will be better if you determine your marketing strategies before starting this business. Because all places around the world have not the same marketing facilities.
                   <br/> <br/>
             In a word, quail farming is playing an important role for fulfilling the daily family nutrition demands and earning livings. And commercial quail farming can be a great source of employment, and earning some extra income along with your current job or profession. Quail farming is also very entertaining and it is very easy to raise some quails. If you intend to join this business venture, then try to visit some farms in your area. And finally do it. God bless you!
            </Typography>
            </div>

          )
      }
  }


  export default Quails;