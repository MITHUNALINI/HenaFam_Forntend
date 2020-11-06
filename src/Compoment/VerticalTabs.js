import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Paper, Grid, Card, CardContent } from '@material-ui/core';

import AppBar from '@material-ui/core/AppBar';
import SimpleTabs from './SimpleTabs';





function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: 400,
  
        marginTop:40,
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));

export default function VerticalTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root} style={{marginLeft:"15%",width:100}} elevation={0}>
      <Paper>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        <Tab label="Hen" {...a11yProps(0)} />
        <Tab label="Duck" {...a11yProps(1)} />
        <Tab label="Quails" {...a11yProps(2)} />
        <Tab label="Guineafowl" {...a11yProps(3)} />
        <Tab label="Turkey" {...a11yProps(4)} />
        
      </Tabs>
      </Paper>
      <SimpleTabs/>
      
      
    </div>
    

    
  );
}

	
