import React, {Component} from "react";
import {Table, Button} from 'reactstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faImage, faThumbsDown, faThumbsUp, faMoneyCheckAlt, faSearchDollar} from '@fortawesome/free-solid-svg-icons'


class App extends Component {
  state = { 
            isLoading: false, 
            invoices: []
  }

  remove(id) {
    let updatedInvoices = [...this.state.invoices].filter(i => i.Id !==id);

    this.setState({invoices: updatedInvoices});
  }

  async componentDidMount() {
    const response = await fetch('https://c2jmu36stf.execute-api.eu-west-1.amazonaws.com/Dev');
    const body = await response.json();
    this.setState({invoices: body, isLoading: false});
  }

  render() {
      const isLoading = this.state.isLoading;
      const allInvoices = this.state.invoices;

        if (isLoading)
          return (<div>Loading...</div>)

        let invoices = allInvoices.map( invoice => 
          <tr key={invoice.Id}>
            <td>{invoice.Vendor}</td>
            <td>{invoice.Amount}</td>
            <td>{invoice.Id}</td>
            <td>{invoice.Date}</td>
            <td><Button className="btn btn-large btn-success" onClick={() => this.remove(invoice.Id)}><FontAwesomeIcon icon={faThumbsUp} /> OK </Button></td>
            <td><Button className="btn btn-large btn-danger" onClick={() => this.remove(invoice.Id)}><FontAwesomeIcon icon={faThumbsDown} /> NOK </Button></td>
            <td><Button className="btn btn-large btn-info" onClick={() => this.remove(invoice.Id)}><FontAwesomeIcon icon={faMoneyCheckAlt} /> 50% </Button></td>
            <td><Button className="btn btn-large btn-warning" onClick={() => this.remove(invoice.Id)}><FontAwesomeIcon icon={faSearchDollar} /> ?? </Button></td>
            <td><Button className="btn btn-large btn-primary" onClick={() => this.remove(invoice.Id)}><FontAwesomeIcon icon={faImage} /> Image </Button></td>
          </tr>  
        )
        

        return (
          <div className="container border border-secondary rounded center">
            <div className="row">
              <div className="col-12">
                <h4>Pending Invoices</h4>
              </div>
            </div>

            <div className="row">
              <div className="col-12 center text-center">
                <Table dark responsive striped bordered hover>
                  <thead>
                    <tr>
                      <th scope="row">Vendor</th>
                      <th scope="row">Amount</th>
                      <th scope="row">Invoice #</th>
                      <th scope="row">Date</th>
                      <th scope="row" colSpan="4">Actions</th>
                      <th scope="row">Image</th>
                    </tr>
                  </thead>

                  <tbody>
                    { this.state.invoices.length === 0 ? <tr><td colSpan="9">All Done!</td></tr> : invoices}
                  </tbody>
                </Table>
              </div>
            </div>

          </div>
        );
  }
}

export default App;