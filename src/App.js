import logo from './logo.svg';
import PieChart from './PieChart';
import DoughnutChart from './Components/DoughnutChart';
import BarGraph from './Components/BarGraph';
import './App.css';
import React from 'react';
import axios from 'axios';
import CarouselComponent from './Components/CarouselComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import TopAgents from './Components/TopAgents';
import MSBI from './Components/MSBI'
import CustomNavbar from './Layout_Components/CustomNavbar'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }

  render() {
    return(
      <div className="App">
        <CustomNavbar />
        <div class="header-text">
          <h1>Pain Relief Network Houston TX</h1>
        </div>
        <div>
          <TopAgents />
        </div>
        <div>
          <DoughnutChart />
        </div>
        <div>
          <PieChart />
        </div>
        <div>
          <BarGraph />
        </div>
        <div>
          <CarouselComponent />
        </div>
        {/* <div>
          <MSBI />
        </div> */}
      </div>
    )
  }
}

export default App;
