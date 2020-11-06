import React, { Component } from "react";
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import image from './index.jpeg';
import image1 from './Feeding.jpeg';
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

  class GuineaFowl extends Component {
      render(){
          return(
            <div style={style.root}>
                <h1 style={{fontSize:50,color:"#e53935"}}><strong>Guinea Fowl Farming </strong></h1> 
                <Typography variant="body2" color="textSecondary" component="p" style={{"fontSize":15}}>
                The guinea fowl are poultry birds originating from Africa. Many poultry farmers in Africa are doing Guinea Fowl farming business successfully, mainly for profit. The Guineas are also sometime called as guineas, pintades or gleanies. They were actually wild birds and the modern birds are the domesticated form of the helmeted Guinea Fowl. And they are related to other game birds such as the turkeys, partridges and pheasants. There is evidence that domestic Guinea Fowl were present in Greece by the 5th century BC, although the exact timing of their domestication is unknown.
                  <br/> <br/>

                 The guinea fowl are very hardy, vigorous and largely disease-free birds. They are increasingly popular among the keepers of small and backyard flocks. Currently they are available not only in Africa, but also found and popular throughout the world.
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

                 People prefer guinea fowl farming for many reasons. The guineas sound an alarm whenever anything unusual occurs on the farm, and the loud sound has also been shown to discourage rodents from invading the area. Some people find this to be a nuisance, but others find it to be an effective tool for protecting the farm. The guineas are also an effective means of pest control. The flocks of guineas generally will kill and eat mice and small rats. They can also be used for controlling insects, without affecting garden vegetables or flowers. They are used for controlling wood ticks and insects such as crickets, grasshoppers and flies.
                 <br/> <br/>

                 There are also some downfalls of guinea fowl farming. They are noisy, so your neighbors might not appreciate your new flock. Guineas generally much prefer to roam freely, although they can be kept confined. The more space you have to allow your birds to roam, the happier they will be. In most cases, the guineas are not as tame as the chickens and they are hard to catch if you let them roam. However, read some more information about guinea fowl farming below.
                 

                 <h2>Feeding</h2>
                     The guineas generally love to roam freely, and they forage for themselves and are able to meet most of their nutrition requirements on their own. They generally consume a variety of insects and arachnids, weed seeds, slugs, worms and caterpillars. They need to consume some greens for maintaining good digestion. So they eat grasses, weeds, dandelions and other vegetation. It is important to ensure the availability of grit, because they love to consume vegetation. They also benefit from having oyster shell available. They generally prefer wheat, sorghum or millet grain and they will ignore whole corn kernels. Restricting their feed will encourage them to spend more time eating insects if you are keeping them for pest control.
                       <br/> <br/>
                      If you want to keep your birds confined, and if they are not allowed to forage freely then you can feed them commercial poultry feed. Using unmedicated feeds is good for them. Compared to chickens, the guineas require a higher protein enriched feed. But they generally do quite well on regular poultry diet. The keets need extra protein, so keeping between 24 and 26 percent protein will be good. The protein level should be reduced to 18% to 20% for the fifth to eighth weeks. After eight weeks, the keets can be fed a 16% layer mash. You can mix a higher protein feed with a lying-hen mash to get the proper protein level, if you can’t find feeds in the proper protein levels. Pelleted feed is not recommended for the guineas, and they should be fed mash or crumbles.
                        <br/> <br/>
                      Providing supplemental greens will be good for the guineas (such as leafy alfalfa), and they will eat the leaves. It is also important to remove any leftovers daily for preventing a mold problem.
                        
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

                  <h2>Housing</h2>
                  The Guineas generally require less housing facilities compared to other common poultry birds. They are often left to fend for themselves. But it is wise to provide a shelter for protecting them from high winds, sun, cold, rain and predators. Their house or shelter can be a room allocated in the barn or a purpose-built facility specifically for guineas. Generally 2-3 square feet space will be good for each bird. It is important to provide the guineas plenty of room, if you confine your birds. The more room they have, the less likely they are to become stressed. Consider good flooring facilities, and the floor of the pen should be covered with an absorbent bedding material such as wood shavings or chopped hay or straw. If the litter is kept dry, it can stay in place for several months. Providing perches is very important, because guinea fowl prefer to roost.
                     <br/> <br/>

                    You must keep your guineas in covered pens, if you want to keep your birds from wandering in a specific area. The guineas are excellent flyers, and they are able to fly at a very early age. They are able to fly up to 400-500 feet at a time. They are also very good runners and they prefer to move on foot, including when escaping from predators.
                    <br/> <br/>

                    If you have chickens in your farm, then you should not confine the male guineas with chickens especially if there are roosters in the same flock. The guineas will chase the roosters, keeping them from food and water when the male guineas are housed with the roosters full-time. But if your flock is allowed to range freely during the day and is locked up only at night, it is safe to keep the guineas and roosters in the same barn. It also safe to house them together in a short-term emergency such as a blizzard or other bad weather.
                    <br/> <br/>
                    Provide your guineas with some nest boxes if you are keeping your birds for egg production (for hatching or human consumption). Nest boxes available in the market which are designed for the chickens are generally acceptable. You can also provide them some homemade nest boxes. Keep the guinea hens confined to the house until noon each day so that they will lay eggs inside. Doing this will reduce the likelihood of hens laying eggs in hidden nests outside.

                </Typography>
                
                </div>


          )
      }
  }

  export default GuineaFowl;