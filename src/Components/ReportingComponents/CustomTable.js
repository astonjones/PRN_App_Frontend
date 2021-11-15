import React from 'react';
import axios from 'axios';
import { Table, Form, FormGroup, Row, Col } from 'react-bootstrap'

class CustomTable extends React.Component {
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
        <>
            <Form className="my-3">
                <Row>
                    <FormGroup as={Col}>
                        <Form.Check
                            inline
                            label="1"
                            name="group1"
                            type="checkbox"
                            id={`inline-checkbox-1`}
                        />
                        <Form.Check
                            inline
                            label="2"
                            name="group1"
                            type="checkbox"
                            id={`inline-checkbox-2`}
                        />
                        <Form.Check
                            inline
                            disabled
                            label="3 (disabled)"
                            type="checkbox"
                            id={`inline-checkbox-3`}
                        />
                    </FormGroup>
                    <FormGroup as={Col}>
                        <Form.Select inline aria-label="Default select example">
                            <option>Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>
                    </FormGroup>
                </Row>
            </Form>

            <Table striped bordered hover>
            <thead>
                <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Phone Number</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                </tr>
            </tbody>
            </Table>
        </>
    );
}
}

export default CustomTable;