import React from 'react';
import axios from 'axios';
import CreateLeadForm from './LeadComponents/CreateLeadForm';

class CreateLead extends React.Component {
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
          <h1>Manually Create Lead</h1>
          <CreateLeadForm />
        </div>
      </div>
    )
  }
}

export default CreateLead;