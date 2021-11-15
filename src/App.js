import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import axios from 'axios';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomNavbar from './Components/Layout_Components/CustomNavbar'
import Home from './Components/Home';
import SearchLead from './Components/SearchLead';
import CreateLead from './Components/CreateLead';
import Reporting from './Components/Reporting';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }

  render() {
    return(
      <div>
      <Router>
        <CustomNavbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/SearchLead" element={<SearchLead />} />
            <Route path="/CreateLead" element={<CreateLead />} />
            <Route path="/reporting" element={<Reporting />} />
        </Routes>
      </Router>
      </div>
    )
  }
}

export default App;
