import React, { Component } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';

class Customers extends Component{

constructor(props){
  super(props);
    this.state = { customers: [] };
  }

componentDidMount() {
  fetch('https://customerrest.herokuapp.com/api/customers')
  .then(res => res.json())
  .then((data) => {
    this.setState({customers: data.content});
  })
}


render() {

 const columns= [
        {
          Header: 'Firstname ',
          accessor: 'firstname',
          width: 100,
        },
        {
          Header: 'Lastname',
          accessor: 'lastname',
          width: 100
        },
        {
          Header: 'Streetaddress',
          accessor: 'streetaddress',
          width: 200
        },
        {
          Header: 'Postcode',
          accessor: 'postcode',
          width: 100
        },
        {
          Header: 'City',
          accessor: 'city',
          width: 100
        },
        {
          Header: 'Email',
          accessor: 'email',
          width: 200
        },
        {
          Header: 'Phone',
          accessor: 'phone',
          width: 150
        },
      ]
      return(
        <div>
          <ReactTable data={this.state.customers} columns={columns} filterable={true} sortable='true' defaultPageSize='10' align="center" />
        </div>
      )
    };
  }


  export default Customers;