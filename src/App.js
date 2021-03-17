import React, {Component} from "react";
import {Table, Button} from 'reactstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faImage, faThumbsDown, faThumbsUp, faMoneyCheckAlt, faSearchDollar} from '@fortawesome/free-solid-svg-icons'


class App extends Component {
  state = { 
            isLoading: false, 
            invoices: [
              {
                "id" : "100",
                "Vendor": "Hankook",
                "Amount": "€1800",
                "Date" : "08/21/2019"
              },
              {
                "id" : "101",
                "Vendor": "HP",
                "Amount": "€100",
                "Date" : "08/21/2019"
              },
              {
                "id" : "102",
                "Vendor": "SAP",
                "Amount": "€800",
                "Date" : "21/08/2021"
              }
            ]
  }

  remove(id) {
    let updatedInvoices = [...this.state.invoices].filter(i => i.id !==id);

    this.setState({invoices: updatedInvoices});
  }

  render() {
      const isLoading = this.state.isLoading;
      const allInvoices = this.state.invoices;

        if (isLoading)
          return (<div>Loading...</div>)

        let invoices = allInvoices.map( invoice => 
          <tr key={invoice.id}>
            <td>{invoice.Vendor}</td>
            <td>{invoice.Amount}</td>
            <td>{invoice.id}</td>
            <td>{invoice.Date}</td>
            <td><Button className="btn btn-large btn-success" onClick={() => this.remove(invoice.id)}><FontAwesomeIcon icon={faThumbsUp} /> OK </Button></td>
            <td><Button className="btn btn-large btn-danger" onClick={() => this.remove(invoice.id)}><FontAwesomeIcon icon={faThumbsDown} /> NOK </Button></td>
            <td><Button className="btn btn-large btn-info" onClick={() => this.remove(invoice.id)}><FontAwesomeIcon icon={faMoneyCheckAlt} /> 50% </Button></td>
            <td><Button className="btn btn-large btn-warning" onClick={() => this.remove(invoice.id)}><FontAwesomeIcon icon={faSearchDollar} /> ?? </Button></td>
            <td><Button className="btn btn-large btn-primary" onClick={() => this.remove(invoice.id)}><FontAwesomeIcon icon={faImage} /> Image </Button></td>
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
                      <th scope="row" colspan="4">Actions</th>
                      <th scope="row">Image</th>
                    </tr>
                  </thead>

                  <tbody>
                    { this.state.invoices.length === 0 ? <td colspan="9">All Done!</td> : invoices}
                  </tbody>
                </Table>
              </div>
            </div>

          </div>
        );
  }
}

export default App;