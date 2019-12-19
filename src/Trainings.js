
import React, { Component } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import moment from 'moment';
import AddTraining from './AddTraining';
import Grid from '@material-ui/core/grid';

class Trainings extends Component{
  constructor(props){
    super(props);
      this.state = { trainings: [], message:'', open: false };
    }

  componentDidMount(){
      this.fetchTrainings();
    }

  fetchTrainings() {
    fetch('https://customerrest.herokuapp.com/gettrainings')
    .then(res => res.json())
    .then((data) => {
      this.setState({trainings: data});
    })
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
            Header: 'Customer ',
            accessor: 'customer.firstname',
            width: 150,
          },
          {
            Header: 'Activity',
            accessor: 'activity',
            width: 150
          },
          {
            Header: 'Date',
            accessor: 'date',
            Cell: ({value}) => moment(value).format("DD.MM.YYYY h:mm"),
            width: 270
          },
          {
            Header: 'Duration',
            accessor: 'duration',
            width: 270
          },
          {
            sortable: false,
            filterable: false,
            width: 100,
            Cell: row => <AddTraining addTraining={this.addTraining} training={row.original}/>
          },
        ]
  return(
    <div>
    <Grid container>
      <Grid item>
          <AddTraining addTraining={this.addTraining}/>
      </Grid>
    </Grid>
    <ReactTable data={this.state.trainings} columns={columns} filterable={true} sortable='true' defaultPageSize='10' align="center" />
    </div>
    )
      };
    }

    export default Trainings;