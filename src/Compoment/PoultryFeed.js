import React, { Component } from "react";
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import image from './protin.jpg'
import image1 from './fat.jpg'
import Card from '@material-ui/core/Card';
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
      //transform: 'translateZ(10)',
      width: 600,
      height: 320,
    },
  }

  const tileData = [
    {
       img: image,
       title: 'Image',
       author: 'author',
       alignItems:'center',
     },
     
   ];

   const tileData1 = [
    {
       img: image1,
       title: 'Image',
       author: 'author',
       alignItems:'center',
     },
     
   ];

class PoultryFeed extends Component {
  

  render() {
    return (
       
        <div style={style.root} align="justify" style={{height:1000}}>
            

              <h2 style={{fontSize:50,color:"#e53935"}}><strong>Poultry Feed</strong></h2>

              <Typography variant="body2" color="textSecondary" component="p" style={{"fontSize":15}} align="justify">
                  Poultry farming is a lucrative and popular business throughout the world. But it can be a risky business suddenly,
                  especially if you are not concerned about poultry feed management. Success in the poultry farming business mostly
                  depends on feeding quality feed and feed formulation system. For proper growth, egg production and good health,
                   poultry birds require energy. In order to obtain desired growth rate, you must have to purchase and provide 
                   highly nutritious poultry feed.
              </Typography>


              <Typography variant="body2" color="textSecondary" component="p" style={{"fontSize":15}} align="justify">
                <h2>Essential Nutrients</h2>
                     For healthy life, proper growth, maximum production and suitable breeding, all types of poultry birds need some 
                     essential nutrients. Most of these essential nutrients come from  the natural sources. Pasture, grains  and seeds,
                      bugs and insects, sunshine, gravel etc. meet up the demands of necessary nutrients.
                 
                <h2 align="justify">Water</h2>
                <ul>
                  <li>
                    Cheapest nutrient .<br/>
                  </li>
                  <li>
                    Provides the basis for all fluid in animals body.<br/>
                  </li>
                  <li>
                    Used in the blood supply.<br/>
                  </li>
                  <li>
                    Digestion requires moisture for the breakdown of nutrients.<br/>
                  </li>
                  <li>
                    Needed in the movement of feed through the digestive track.<br/>
                  </li>
                  <li>
                    Some medications are administered in the drinking water.<br/>
                  </li>
                </ul>
                <h2 align="justify">Protein</h2>
                The most expensive poultry feed element is protein. But it is a must to provide your poultry birds sufficient amount
                 of protein contained feed. There are two types of protein source are available. Animal and vegetable protein. Animal 
                  protein  is a great source of adding required protein in poultry feed. The animals protein means that comes from 
                  animals sources such as meat, meat meal, milk, liver etc. This type of protein sources are very helpful for proper
                   growth and better egg production, than  vegetable protein.  Although, adding excess amount of protein in poultry 
                   feed can create a negative effect on your poultry bird’s health
                    
                    <br/> <br/>
                    
                   
      <GridList cellHeight={300} style={style.gridList}>
        {/* <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
        </GridListTile> */}
        {tileData.map((tile) => (
          <GridListTile key={tile.img}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title=" Protein"
              actionIcon={
                <IconButton aria-label={`info about ${tile.title}`} style={style.icon}>
                  <InfoIcon />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
                  <h2 align="justify">Fat</h2>
                    Proper ratio of fat in poultry feed is also very essential. Usually fat is available in almost all types of feed
                     elements. But an excess amount of fat that comes from  fish products, fish oil or meat can causes digestive problem 
                      and lead to various poultry disease.
                     
                    <GridList cellHeight={300} style={style.gridList}>
        {/* <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
        </GridListTile> */}
        {tileData1.map((tile) => (
          <GridListTile key={tile.img1}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title=" Fat"
              actionIcon={
                <IconButton aria-label={`info about ${tile.title}`} style={style.icon}>
                  <InfoIcon />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
                    <br/><br/>
                    
                  <h2>Minerals</h2>
                  Calcium carbonate (which is present in vitamin D) helps to formulate the egg shell. Calcium and phosphorous make the major
                   part of poultry bird’s bone. But excess amount of phosphorous in poultry feed lead to crooked bones and slipped tendons in 
                   chickens and poultry birds. Salt is also a reliable source of essential minerals. Small amount of some highly important minerals
                    can be found in green foods.


                   <h3>Vitamin</h3>
                     Any vitamin deficiency in poultry feed rations can hinder the natural growth of young poultry birds. The term vitamin describe 
                      a variety of essential nutrients that are differ from one another. The activities of different vitamins are different.
                    <br/>
                    <ul>
                      <li>
                        Vitamin A : Vitamin A comes from green feed ingredients, yellow corn and fish oils. 
                                  It is essential to protests the poultry birds against colds and infections.
                      </li>

                      <br/>

                      <li>
                        Vitamin D : Vitamin D help to prevent leg weakness and rickets. It is found in synthetic 
                         products and also available in sea fishes. Vitamin D is a  must added elements in poultry feed.
                      </li>

                      <br/>

                      <li>
                        Vitamin B Complex : Vitamin B complex is available in milk, green feed, liver, synthetic riboflavin etc. It helps to increase
                         the growth of poultry and chickens. It also helps to prevent curled-toe paralysis in young chickens. While preparing poultry 
                         feed, you must have to be careful about adding adequate amount of Vitamin B Complex in the poultry feed mixture.
                      </li>
                    </ul>
                    <h3>Poultry Feed Ingredients</h3>
                    Poultry farming business is very common and popular throughout the world. So poultry feed ingredients are 
                    also easily available.

                    <br/> <br/>
                    <ul>
                      <li>
                        Wheat : Wheat is one of the best grains as poultry feed ingredients. For this reason, you should include  
                        a certain amount of wheat in the poultry feed ration. During the wheat harvesting season, you can feed the 
                        poultry birds as mash or as scratch feed. You can also use wheat as a poultry feed ingredient throughout the year.
                      </li>
                      
                      <br/>

                      <li>
                      Barley: Generally barley is not delicious like wheat and oats. But it contains more fiber and a great source of fat.
                       You can feed barley to your poultry birds, when oats and wheat are not available (or in poor quality).
                      </li>
                      
                      <br/>

                      <li>
                      Corn: Corn can be a very effective grain for your poultry birds. You can feed whole, cracked or by grinding. You 
                       can feed the ripe corn to your hens. But feed the shelled corn with other grains as an scratch feed.
                      </li>

                      <br/>

                      <li>
                      Millet: Millet has good advantages as poultry feed. You can use millet in growing, laying and fattening 
                       ration. Millet is easily digestible and help to increase body temperature.
                      </li>

                      <br/>

                      <li>
                      Rye: Rye is not so palatable poultry feed elements such as wheat, oats and barley. So feed rye to your 
                       poultry birds in small amount as a scratch feed with two or more other grains. Huge amount of rye in poultry 
                       feed may cause digestive disorder in your birds.
                      </li>

                      <br/>

                      <li>
                      Skim Milk and Butter Milk: Skim and butter milk are very useful for all kinds of poultry birds. Especially 
                      for the growing, young chicks and laying hens. Skim and butter milk play a vital role to get high quality eggs 
                      for hatching. And it’s also a reliable source of protein.
                      </li>

                      <br/>

                      <li>
                      Balancers and Concentrates: For preparing the poultry feed, concentrates and balancers are special supplement which 
                       are prepared by the commercial poultry feed companies. They are basically fed with home grown chopped grains.
                      </li>

                      <br/>

                      <li>
                      By Products of Grain: By products of grains have a great health value and suitable for feeding the poultry birds.
                       Especially various types of by products of grains are available in the shop where poultry feed are prepared or sold. 
                       It’s price is comparably higher than any other poultry feed ingredients.
                      </li>
                    </ul>

                    <h3>Growing Chickens Feed</h3>
                         For raising young chicks, a diet enriched with protein and containing balanced mineral is very useful. Two pounds of 
                         chicken starter dry mash is suitable enough for one chicken that is about six weeks of age. You always have to concentrate 
                          about the diet of growing chicks to ensure rapid growth and good health of chickens. For better result, you can mix starter 
                           at home.Usually 200 pounds of commercial starter mash is sufficient enough for each 100 chickens. While purchasing commercial 
                           starter mash, choose popular brand in the market. Avoid out dated and less tasty ground mixtures. Store the feed in a cool and 
                           dry place, and provide fresh food daily. After hatching, start feeding the chicks when they want to eat. Provide them dry mash by 
                            using a clean cardboard. After their two or three days of age, give them dry  mash with self feeders (when all the chicks can eat).
                             You must have to ensure constant supply of adequate fresh and clean water according to their demand. Separate all the hard insoluble 
                              grit from their food by keeping the food in pans or hoppers. Add some dry cracked wheat with dry mash, when the bird reach the age of
                               three or four weeks.  Poultry feed mixture for different aged bird are shown below.


                </Typography>

</div>
)
}
}


export default PoultryFeed;