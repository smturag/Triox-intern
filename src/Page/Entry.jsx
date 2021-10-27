import React, { Component } from "react";
import { Container, Form, Button, Col, Row, Table } from "react-bootstrap";
import fetch from "cross-fetch";

class Entry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productId:"",
      productDetails: "",
      pValue:0.0,
      eRate: 0.0,
      cd: 0.0,
      rd: 0.0,
      sd: 0.0,
      vat: 0.0,
      insurance:0.0,
      charge:0.0,
      ftValue:0.0,
      tValue:0.0,
      av:0.0,
      cdP:0.0,
      rdP:0.0,
      sdP:0.0,
      vatP:0.0,
      generate:false


    };
    this.generate = this.generate.bind(this);
    this.insert = this.insert.bind(this);
  }
  generate() {

    let insurance = parseFloat(this.state.pValue*1/100)
    let ftValue = (2*insurance)+parseFloat(this.state.pValue)
    let av = ftValue*parseFloat(this.state.eRate)
    let cd = av*parseFloat(this.state.cdP/100)
    let rd =  av*parseFloat(this.state.rdP/100)
    let sd = (av+cd+rd)*parseFloat(this.state.sdP/100)
    let vat = (av+cd+rd+sd)*parseFloat(this.state.vatP/100)
    let tValue = av+cd+rd+sd+vat
     this.setState({
      insurance: insurance,
      charge: insurance,
      ftValue:ftValue,
      av:av,
      cd:cd,
      rd:rd,
      sd:sd,
      vat:vat,
      tValue:tValue,
      generate:true

    })
    console.log(this.state.ftValue);
    }
  async insert() {
    if(this.state.generate===true){
      let dataBody={
        productId: this.state.productId,
        description: this.state.productDetails,
        value: this.state.ftValue,
        av: this.state.av,
        cd: this.state.cd,
        rd: this.state.rd,
        sd:this.state.sd,
        total:this.state.tValue
      }
      const res = await fetch("http://localhost:3001/api/insert", {
        method: "POST",
        body: JSON.stringify(dataBody),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      alert('Successful')
      this.setState({
        productId:"",
      productDetails: "",
      pValue:0.0,
      eRate: 0.0,
      cd: 0.0,
      rd: 0.0,
      sd: 0.0,
      vat: 0.0,
      insurance:0.0,
      charge:0.0,
      ftValue:0.0,
      tValue:0.0,
      av:0.0,
      cdP:0.0,
      rdP:0.0,
      sdP:0.0,
      vatP:0.0,
      generate:false
      })
      return console.log(data);
        
    }else{
      alert('boka')
    }
    
  }
  render() {
    return (
      <>
        <Container>
          <Form>
            <Row>
              <Col>
                <Form.Group className="mb-3">
                  Product Id
                  <Form.Control
                    size="sm"
                    type="number"
                    placeholder="Product Id"
                    value={this.state.productId}
                    onChange={(e) =>
                      this.setState({ productId: e.target.value})
                    }
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3">
                  Product Details
                  <Form.Control
                    size="sm"
                    type="text"
                    placeholder="Product Details"
                    value={this.state.productDetails}
                    onChange={(e) =>
                      this.setState({ productDetails: e.target.value })
                    }
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group className="mb-3">
                  Value
                  <Form.Control
                    size="sm"
                    type="number"
                    placeholder="Value"
                    value={this.state.pValue}
                    onChange={(e) => this.setState({ pValue: e.target.value })}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3">
                  Exchange Rate
                  <Form.Control
                    size="sm"
                    type="number"
                    placeholder="Exchange Rate"
                    value={this.state.eRate}
                    onChange={(e) => this.setState({ eRate: e.target.value })}
                  />
                </Form.Group>
              </Col>
            </Row>
          </Form>
          <Container>
            <Row>
              <Col>
                <Row>
                  <Col>
                    <p>Insurance 1% </p>
                    <p>Charge 1%</p>
                  </Col>
                  <Col>
                    <p>{this.state.pValue*1/100}  USD</p>
                    <p>{this.state.pValue*1/100}  USD</p>
                  </Col>
                </Row>
                <hr />
                <Row>
                  <Col>
                    <p>Total value</p>
                  </Col>
                  <Col>
                    <p>{this.state.ftValue}   TK</p>
                  </Col>
                </Row>
              </Col>
              <Col></Col>
            </Row>
            <Row>
              <Table>
                <tbody>
                  <tr>
                    <td>A/V</td>
                    <td></td>
                    <td>{this.state.av}TK</td>
                  </tr>
                  <tr>
                    <td>CD</td>
                    <td>
                    <input
                      type="number"
                      value={this.state.cdP}
                      onChange={(e) => this.setState({ cdP: e.target.value})}
                    />
                    </td>
                    
                    <td>{this.state.cd}    TK</td>
                  </tr>
                  <tr>
                    <td>RD</td>
                    <td>
                    <input
                      type="number"
                      value={this.state.rdP}
                      onChange={(e) => this.setState({ rdP: e.target.value })}
                    />
                    </td>
                    
                    <td>{this.state.rd}   TK</td>
                  </tr>
                  <tr>
                    <td>SD</td>
                    <td>
                    <input
                      type="number"
                      value={this.state.sdP}
                      onChange={(e) => this.setState({sdP: e.target.value })}
                    />

                    </td>
                    
                    <td>{this.state.sd}   TK</td>
                  </tr>
                  <tr>
                    <td>VAT</td>
                   <td>
                   <input
                      type="number"
                      value={this.state.vatP}
                      onChange={(e) => this.setState({ vatP: e.target.value })}
                    />
                     </td> 
                    <td>{this.state.vat}   TK</td>
                  </tr>
                  <tr>
                    <td>Total Value</td>
                    <td></td>
                    <td>{this.state.tValue}   TK</td>
                  </tr>
                </tbody>
              </Table>
            </Row>
          </Container>
          <Row>
            <Col>
              <Button variant="outline-primary" onClick={this.generate}>
                Generate
              </Button>
            </Col>
            <Col>
              <Button variant="outline-primary" onClick={this.insert}>
                Insert
              </Button>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default Entry;
