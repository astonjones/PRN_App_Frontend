import React from 'react';
import {Bar} from 'react-chartjs-2';

class BarGraph extends React.Component {
constructor(props) {
    super(props);
    this.state = {
        //need to populate these with top 5 agents
        labels: ['January', 'February', 'March',
        'April', 'May'],
        datasets: [
            {
            label: 'Calls',
            backgroundColor: 'rgba(75,192,192,1)',
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 2,
            //need to populate this with actual calls
            data: [65, 59, 80, 81, 56]
            },
        ]
    }
}

  render() {
    return (
      <div style={{ width: "500px"}}>
        <Bar
          data={this.state}
          options={{
            title:{
              display:true,
              text:'Average Rainfall per month',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
      </div>
    );
  }
}

export default BarGraph;