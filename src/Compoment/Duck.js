import React, { Component } from "react";
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import image from './Duck.jpeg'
import image1 from './MeatDuck.jpeg'
import image2 from './Egg.jpg'
import image3 from './Duble.jpeg'
import image4 from './Duckfeeding.jpeg'
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
   const tileData3 = [
    {
       img: image3,
       title: 'Image',
       author: 'author',
     },
     
   ];
   const tileData4 = [
    {
       img: image4,
       title: 'Image',
       author: 'author',
     },
     
   ];
class Duck extends Component {
    render (){
        return(
            <div style={style.root}>
                <h1 style={{fontSize:50,color:"#e53935"}}><strong>Duck Farming</strong></h1> 
                <Typography variant="body2" color="textSecondary" component="p" style={{"fontSize":15}}>
                       Duck farming is very popular and absolutely a lucrative business. Ducks are highly available around the world. There <br/>
                       are numerous meat and egg productive duck breeds available throughout the world. All the present domestic ducks around<br/>
                       the glove come from the wild birds.<br/>
                       Those wild birds wonder around the world, and some of them have been domesticated as a good source of food. Almost all <br/>
                       those wild birds are from mallard species. Incidentally, all hen of the world comes from red wild hen. You might know that,<br/>
                       ducks are aquatic organism.
                        
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
                  <br/>
                        Some people think that, duck without water and pond without water are the same. Even, some people think, ducks can’t live without water.<br/>
                        But it’s totally wrong. You can not imagine pond without water, but duck can be raised without water. Thousands of ducks can be raised without <br/>
                        water by keeping them inside house, in the same way you raise chickens or other types of poultry birds.<br/>

                        But, keep in mind that, in case of raising ducks without water ‘your ducks will lay unfertilized egg’. That means you can’t hatch the eggs for producing<br/>
                         ducklings. If you want fertile eggs, male ducks and water are essential. You can easily raise ducks without water, they just need water for reproduction or mating purposes.

                         <h3>Importance of duck</h3>

                         <ul>
                             <li>
                               Egg and meat production 
                             </li>

                             <li>
                               Organic manure production 
                             </li>

                             <li>
                                Good income 
                             </li>

                             <li>
                               Less canibolisum
                             </li>
                             <li>
                               Less broadeness
                             </li>

                             <li>
                               Less intensive care
                             </li>
                         </ul>

                         <h2> Advantages Of Duck Farming</h2>
                              There are numerous advantages of starting duck farming business. In many countries, ducks rank next to chicken for meat and egg production. You<br/>
                               can raise ducks in both commercial and small scale meat or egg production purpose. Even, you can raise some ducks on your own backyard with other<br/>
                                birds or animals. Some notable advantages of duck farming business are shortly described here.
                                
                                <ul>
                                    <li>
                                       Ducks need less expensive, simple and non-elaborate housing facilities. As a result housing costs are very less for setting up commercial duck farming business.
                                    </li>

                                    <li>
                                      Ducks are very hardy bird and they need less care or management. They can adopt themselves with almost all types of environmental conditions.
                                    </li>

                                    <li>
                                       They lay eggs either at night or in the morning. So you can collect their fresh eggs every morning :). And you can do your other work during rest of the day and you don’t have to spend time for caring your ducks.
                                    </li>

                                    <li>
                                       You need comparatively less space for raising ducks. Ducks have comparatively shorter brooding period and ducklings grow faster. Ducklings grow so fast that, you can dispense artificial heat within their 5 to 7 days. Although they will require a little longer heating period during cold months. 
                                    </li>

                                    <li>
                                      Ducks are highly resistant to the common avian diseases.
                                    </li>
                                    <li>
                                      You can feed your ducks with a wide variety of foods. A duck’s regular food includes cassava, copra, corn, rice, fruits and any other low cost and easily available foods. They also have the natural tendency of foraging on aquatic weeds, algae, green legumes, fungi, earthworms, maggots, snails, various types of insects etc. which directly reduce feeding cost.
                                    </li>
                                    <li>
                                       Duck products such as eggs and meat have a great demand in the local and international market. So commercial duck farming business can be a great source of earning. There are already many successful farmers who are making a high profit from their duck farming business.
                                    </li>
                                    <li>
                                      Duck farming business can also be a stable employment source. Young unemployed educated people can join this business and make their own employment source
                                    </li>
                                </ul>
                </Typography>
                <h2 style={{fontSize:50,color:"#e53935"}}><strong>Duck Breeds</strong></h2>
                <Typography variant="body2" color="textSecondary" component="p" style={{"fontSize":15}}>
                     There are numerous duck breeds available throughout the world. Although all of those breeds are not suitable for commercial duck farming business. Some of those breeds<br/>
                      are suitable for egg production and some are ideal for commercial meat production. Usually ducks are of three types according to their production type.

                      <ul>
                        <li>
                           Meat productive duck breeds
                        </li>
                        <li>
                          Egg productive duck breeds
                        </li>
                        <li>
                           Famous for both meat and egg production.
                        </li>
                      </ul>

                      <h3> Meat productive duck breeds</h3>
                           There are numerous duck breeds available which are famous for meat production. Peking, Ayleshbari, Maskovi, Ruel Kagua and the Swiden ducks are most popular for meat<br/>
                            production. Usually meat productive male ducks weight about 5 kg and female weight about 4 kg.<br/>
                            <br/>

                          <div style={style.root}>
      <GridList cellHeight={250} style={style.gridList}>
        {/* <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
        </GridListTile> */}
        {tileData2.map((tile) => (
          <GridListTile key={tile.img}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title=" Muscovy duck"
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


                      <h3>Egg productive duck breeds</h3>
                         Indian Runner is a popular layer duck breed and very famous for their egg production capability. There are three types of Indian runner ducks available. White and grayish<br/>
                         Indian runners are good layers. Khaki Campbell ducks are also very popular duck breed for high egg production.<br/>
                         <br/>
                         <div style={style.root}>
      <GridList cellHeight={250} style={style.gridList}>
        {/* <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
        </GridListTile> */}
        {tileData1.map((tile) => (
          <GridListTile key={tile.img}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title=" Indian runner duck"
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


                     <h3>Famous for both meat and egg production.</h3>
                         Khaki Campbell ducks are suitable for both meat and egg production. They came from Indian Runner and Ruel Kagua. Indian runners are famous for egg production and second one is popular for meat production.<br/>
                         <br/>
                       
                         

                         <div style={style.root}>
      <GridList cellHeight={250} style={style.gridList}>
        {/* <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
        </GridListTile> */}
        {tileData3.map((tile) => (
          <GridListTile key={tile.img}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title="Khaki campell duck"
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

                <h2 style={{fontSize:50,color:"#e53935"}}><strong>Duck Feed</strong></h2>
                <Typography variant="body2" color="textSecondary" component="p" style={{"fontSize":15}}>
                       Duck farming is not an easy task. The main considerable subject for successful duck farming is duck feed.  If you want to keep ducks for commercial purpose, then you must have <br/>
                       to know what feed is essential and what should not feed to the ducks. To get desired profit from duck farming business, you have to ensure balance diet. This makes sure that the <br/>
                       ducks will grow up in a healthy way.
                       Most of the ducks are reared in farms. However, a number of ducks are also reared in open space or ponds. Many people think that bread or bread crumbs are suitable duck feed but<br/>
                       it not absolutely true. Just like all the creatures ducks need balance diet for proper growing.
                  
                  <h3>Feeding Ducklings</h3>
                      Ducks are considered as a good pet and egg or meat source. So, if farmer wants to raise ducks, they must have to feed them properly. In this case, feeding ducklings is very important because <br/>
                      baby ducks become very weak and sensitive. After the birth of ducklings, farmer should provide wet started mash for eight weeks. It is better to provide feed at night during the first few days<br/>
                      and drinking water can be given from the 2nd day through fountains and troughs. After the fourth day, farmer must add finely chopped small shrimps boiled rice. Besides, amount of feed must be <br/>
                      increase with the increase of ducklings’ age. When ducklings reach at the age of one month, farmer should provide tiny fresh water snails and boiled unhulled rice. Mask feed that is given to ducklings<br/>
                      is composed of fish meal, rice bran with oyster shell, corn, soybean meal, dried whey and bone meal with mineral vitamin supplements.   Starter mash with 10-20% crude protein gives one day to six weeks<br/>
                      aged ducklings; mash with 16% crude protein gives for 6 weeks old to 4 month old ducklings; layer mash with 16% crude with gives 4 month old ducks and above aged.
                      
                      <br/> <br/>
                      <div style={style.root}>
      <GridList cellHeight={200} style={style.gridList}>
        {/* <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
        </GridListTile> */}
        {tileData4.map((tile) => (
          <GridListTile key={tile.img}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title=""
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

                    

                      Provide enough mash to consume quickly at one time for 10 to 15 minutes, if mash feed is preferred. Wet mash trends to spoil when left long in hoppers. It is better to give feed at regular intervals. For<br/>
                      this reason, ducklings learn to eat more feed and appetites are developed to stuff themselves in between drinks, digest feed quickly Farmer should provide feed four to five times a day that is sufficient for <br/>
                      over 2 weeks old ducklings and provide plenty of clean, fresh water.When ducks eat their feed they waste too much for this reason give sufficient feed to prevent much waste.

                      <h3>Growing Duck Feed</h3>
                          Ducks, generally raised as farm or pet animals, are useful animals to keep domestically and a reliable source of meat and egg. However, ducks need special nutrition to survive. If ducks do not get enough nutrition,<br/>
                          they will not grow properly. Besides, they also suffer from malnutrition that may cause of illness and even death of duck flock. If a farmer provides wrong feed, then the ducks will waste it. Here are some instructions about how to feed fully grown ducks.

                          <ul>
                            <li>
                              At first prepare the bin feeder. Properly clean and dry the surface of the feeder and then any sharp egged should be covered by duct tape and hang it in a safe place within the ducks’ enclosed space.
                            </li>
                            <li>
                              For providing correct amount of nutrition, provide a commercial duck feed. Egg productive duck breeds need 16-18 percent protein in their feed. 14-16 percent protein needs non-laying adults in their feed.
                            </li>
                            <li>
                              Too much protein can cause of angel wing that causes the wing, feathers to stick up. Besides lack of enough protein may causes serious nutrition problem that hamper egg laying.
                            </li>
                            <li>
                              Give your ducks fresh greens, such as vegetable trimmings, although your ducks may eat weeds and grass in your yard whenever you keep your ducks in outside.
                            </li>
                            <li>
                               Make your duck’s feed with the help of chopped up hard boiled eggs, cracked corn and worms. You have to keep away from using whole corn because it is not easy digestible. In winter season. Large amount of cracked corn should feed. A study ensures that cracked corn contains half of the protein that the ducks need.
                            </li>
                            <li>
                              You should preserve your duck feed carefully because it may grow bacteria and other microorganism that is harmful to your ducks health.
                            </li>
                          </ul>

                          <h3>Good Duck Feeds</h3>
                              The feeds that contain the nutrients, minerals and vitamins and necessary ingredients for healthy growth and development of ducks are the best feed for ducks. Most of these feeds has a similarity to the natural grains, seeds and plants that the birds search for their own. The best feed list for ducks described below.

                              <ul>
                                <li>
                                  Cracked corn
                                </li>
                                <li>
                                  Milo
                                </li>
                                <li>
                                  Birdseed
                                </li>
                                <li>
                                  Oats
                                </li>
                                <li>
                                  Barley
                                </li>
                                <li>
                                  Grapes
                                </li>
                                <li>
                                  Chopped lettuce
                                </li>
                                <li>
                                   Vegetable trimmings
                                </li>
                              </ul>

                              It can be added that pellets or poultry starter pellets are another great feed for duck that can be purchased from farming or agriculture supply stores.

                              

                </Typography>
            </div>
        )
    }
}

export default Duck