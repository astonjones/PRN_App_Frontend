import React from 'react';
import axios from 'axios';
import { Container, Row, Col, Card } from "react-bootstrap";
import DoughnutChart from './ReportingComponents/DoughnutChart';
import BarGraph from './ReportingComponents/BarGraph';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }

  render() {
    return(
      <Container className="my-5">
          <Row>
              <Col xs="12" lg="6">
                <Card style={{ width: '100%' }}>
                    <Card.Header>Agent performance Doughtnut Chart</Card.Header>
                    <DoughnutChart />
                </Card>
              </Col>
              <Col xs="12" lg="6">
                <Card className="my-5" style={{ width: '100%'}}>
                    <Card.Header>Agent Performance Bar Graph</Card.Header>
                    <BarGraph />
                </Card>
              </Col>
          </Row>
      </Container>
    )
  }
}

export default Home;