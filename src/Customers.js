import React, { Component } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import EditCustomer from './EditCustomer';
import AddCustomer from './AddCustomer';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/grid';
import AddTraining from './AddTraining';

class Customers extends Component{

constructor(props){
  super(props);
    this.state = { customers: [], message:'', open: false };
  }

handleClose(event, reason){
    this.setState({open:true});
  };

componentDidMount(){
    this.fetchCustomers();
  }

fetchCustomers() {
  fetch('https://customerrest.herokuapp.com/api/customers')
  .then(res => res.json())
  .then((data) => {
    this.setState({customers: data.content});
  })
}

updateCustomer= (customer, link)=>{
  fetch(link, {
      method: 'PUT',
      headers:{
          'Content-type': 'application/json'
      },
      body: JSON.stringify(customer)
  })
  .then(res=>this.fetchCustomers())
  .catch(err=>console.error(err))
}

deleteCustomer =(link) => {
  if(window.confirm('Are you sure?')){
      fetch(link, {method: 'DELETE'})
      .then(res=>this.fetchCustomers())
      .then(res=>this.setState({message: 'Customer deleted'}))
      .then(res=>this.setState({open: true}))
      .catch(err=> console.error(err))
  }
}

saveCustomer =(newCustomer)=>{
  fetch('https://customerrest.herokuapp.com/api/customers',
      {
      method: 'POST',
      headers:{
      'Content-type': 'application/json'
      },
      body: JSON.stringify(newCustomer)
      }
  )
  .then(res=> this.fetchCustomers())
  .then(res=>this.setState({message: 'Customer saved'}))
  .then(res=>this.setState({open: true}))
  .catch(err=> console.error(err))

  }

  addTraining =(newTraining)=>{
    fetch('https://customerrest.herokuapp.com/api/trainings',
      {
        method: 'POST',
        headers:{
          'Content-type':'application/json'
        },
        body: JSON.stringify(newTraining)
      })
      .then(res=> this.fetchTrainings())
      .then(res=>this.setState({message: 'Training saved'}))
      .then(res=>this.setState({open: true}))
      .catch(err=> console.error(err))
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
          width: 170
        },
        {
          Header: 'Postcode',
          accessor: 'postcode',
          width: 100
        },
        {
          Header: 'City',
          accessor: 'city',
          width: 120
        },
        {
          Header: 'Email',
          accessor: 'email',
          width: 200
        },
        {
          Header: 'Phone',
          accessor: 'phone',
          width: 130
        },
       {
          sortable: false,
          filterable: false,
          width: 70,
          Cell: row => <EditCustomer updateCustomer={this.updateCustomer} customer={row.original}/>
        },
        {
          sortable: false,
          filterable: false,
          width:80,
          accessor: 'links[1].href',
          Cell: ({value})=> <Button size="small" color="secondary" onClick={()=>this.deleteCustomer(value)}>Delete</Button>
        },  
        {
          sortable: false,
          filterable: false,
          width: 120,
          Cell: row => <AddTraining addTraining={this.addTraining} training={row.original}/>
        },
      ]

      return(
        <div>
          <Grid container>
            <Grid item>
              <AddCustomer saveCustomer={this.saveCustomer}/>
            </Grid>
          </Grid>
          <ReactTable data={this.state.customers} columns={columns} filterable={true} sortable='true' defaultPageSize='10' align="center" />
        </div>
      )
    };
  }


  export default Customers;