import {Doughnut} from 'react-chartjs-2';
import React from 'react';
import { UpdateModeEnum } from 'chart.js';
import axios from 'axios';

class DoughnutChart extends React.Component {
constructor(props) {
    super(props);
    this.state = {
        labels: [],
        datasets: []
    }
}

componentDidMount() {
    axios.get('http://localhost:5500/allagents')
        .then(res => {
        let data = res.data.recordset;
        let newData = [];
        let labels = [];

        data.map(item => {
            if(item["USER NAME"] != null){
                labels.push(item["USER NAME"]);
                newData.push(item.XFER);
            }
        })

        let newDatasets = [
            {
            label: 'AGENTS',
            backgroundColor: [
                '#B21F00',
                '#C9DE00',
                '#2FDE00',
                '#00A6B4',
                '#6800B4',
                '#40CF00'
            ],
            hoverBackgroundColor: [
            '#501800',
            '#4B5000',
            '#175000',
            '#003350',
            '#35014F',
            '#0081DB'
            ],
            data: newData
            }
        ]

        this.setState({
             labels: labels,
             datasets: newDatasets
        });

    })
}

render() {
    return (
        <div style={{width: "500px"}}>
        <Doughnut
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

export default DoughnutChart;