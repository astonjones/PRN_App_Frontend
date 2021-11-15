import React from 'react';
import axios from 'axios';

class TopAgents extends React.Component {
constructor(props) {
    super(props);
    this.state = {
        data: []
    }
}

componentDidMount() {
    axios.get('http://localhost:5500/topagents')
      .then(res => {
        let data = res.data.recordset;
        data = data.slice(2);
        this.setState({ data: data });
      })
  }

render() {
    return (
        <div style={{width: "500px"}}>
            <ul style={{ listStyle: "none "}}>
                { this.state.data.map(item => <li>name: {item["USER NAME"]} transfers: {item.XFER}</li>) }
            </ul>
        </div>
    );
}
}

export default TopAgents;