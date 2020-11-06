import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom'

import Seaction from './Seaction';
import { DataProvider } from './Seaction/Context';
import App from '../App';


class Main extends React.Component{
  render(){
    return(
      <DataProvider>
      <div className="app">
        <Router>
          <App/>
          <Seaction/> 
        </Router>
      
      </div>
      </DataProvider>
    )
  }
}

export default Main;
