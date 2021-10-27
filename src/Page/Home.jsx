import React, { Component } from 'react'
import fetch from "cross-fetch";
import {Container, Table} from 'react-bootstrap'

export default class Home extends Component{
      constructor(props){
            super(props)
            this.state={
                  data:[]
            }
      }

      componentDidMount(){
            fetch("http://localhost:3001/api/findAll/")
            .then((res) => res.json())
            .then((data) => {
            console.log(data.getData);
            this.setState({ data: data.getData });
      });

      }
      render(){
            return(
                  <>
                  <Container className=' pt-5 mt-20'>
                        <Table>
                              <thead>
                                    <tr>
                                    <th>Product Id</th>
                                    <th>Product Details</th>
                                    <th>Value</th>
                                    <th>A/V</th>
                                    <th>CD</th>
                                    <th>RD</th>
                                    <th>SD</th>
                                    <th>Total</th>
                                    </tr>
                              </thead>
                              <tbody>
                                    {this.state.data.map((v,i)=>{
                                          return(
                                                <tr key={i}>
                                                      <td>{v.productId}</td>
                                                      <td>{v.description}</td>
                                                      <td>{v.value}</td>
                                                      <td>{v.av}</td>
                                                      <td>{v.cd}</td>
                                                      <td>{v.rd}</td>
                                                      <td>{v.sd}</td>
                                                      <td>{v.total}</td>

                                                </tr>
                                    )

                                    })}
                              </tbody>
                        </Table>
                  </Container>
                  </>
            )
      }
}