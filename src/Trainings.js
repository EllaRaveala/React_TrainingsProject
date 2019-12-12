
import React, { Component } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import moment from 'moment';

class Trainings extends Component{
  constructor(props){
    super(props);
      this.state = { trainings: [] };
    }

  componentDidMount() {
    fetch('https://customerrest.herokuapp.com/gettrainings')
    .then(res => res.json())
    .then((data) => {
      this.setState({trainings: data});
    })
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
        ]
  return(
    <div>
    <ReactTable data={this.state.trainings} columns={columns} filterable={true} sortable='true' defaultPageSize='10' align="center" />
    </div>
    )
      };
    }

    export default Trainings;