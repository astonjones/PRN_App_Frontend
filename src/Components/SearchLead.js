import React from 'react';
import axios from 'axios';
import LeadSearchForm from './LeadComponents/LeadSearchForm';

class SearchLead extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }

  render() {
    return(
      <div>
        <div className="container my-5">
          <h1>Lead Search</h1>
          <LeadSearchForm />
        </div>
      </div>
    )
  }
}

export default SearchLead;