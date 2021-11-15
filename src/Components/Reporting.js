import React from 'react';
import axios from 'axios';
import { Row, Col, Container } from 'react-bootstrap';
import CustomTable from './ReportingComponents/CustomTable';

class Reporting extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }

  render() {
    return(
        <div className="container my-5">
          <CustomTable />
        </div>
    )
  }
}

export default Reporting;