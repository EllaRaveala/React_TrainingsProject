import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

class EditCustomer extends Component{

    constructor(props){
        super(props);
          this.state = { open: false, 
                        customer: { firstname:'', lastname:'', streetaddress:'', postcode:'', city:'', email:'', phone:''} 
                      };
        }

    handleClickOpen = () => {
            this.setState({
                customer:{
                firstname: this.props.customer.firstname, 
                lastname: this.props.customer.lastname, 
                streetaddress: this.props.customer.streetaddress, 
                postcode: this.props.customer.postcode, 
                city: this.props.customer.city, 
                email: this.props.customer.email,
                phone: this.props.customer.phone
                },
                open: true 
            });
          };
        
    handleClose = () => {
            this.setState({open: false});
          };

    handleInputChange = (event)=> {
            this.setState({...this.state.customer, [event.target.name]: event.target.value});
        }
        
    updateCustomer = () =>{
              this.props.updateCustomer(this.state.customer, this.props.customer.links[1].href);
              this.handleClose();
          }

    render(){
      return(
      <div>
        <Button size="small"  color="primary" onClick={this.handleClickOpen}> Edit </Button>
        <Dialog open={this.state.open} onClose={this.handleClose}>
          <DialogTitle id="form-dialog-title">Edit customer</DialogTitle>
            <DialogContent>
              <DialogContentText> Edit customer details</DialogContentText>
              <TextField
                autoFocus
                margin="dense"
                name="firstname"
                value= {this.state.customer.firstname}
                onChange={e => this.handleInputChange(e)}
                label="Firstname"
                fullWidth
              />
             <TextField
                autoFocus
                margin="dense"
                name="lastname"
                value= {this.state.customer.lastname}
                onChange={e => this.handleInputChange(e)}
                label="Lastname"
                fullWidth
              />
              <TextField
                autoFocus
                margin="dense"
                name="streetaddress"
                value= {this.state.customer.streetaddress}
                onChange={e => this.handleInputChange(e)}
                label="Streetaddress"
                fullWidth
              />
              <TextField
                autoFocus
                margin="dense"
                name="postcode"
                value= {this.state.customer.postcode}
                onChange={e => this.handleInputChange(e)}
                label="Postcode"
                fullWidth
              />
              <TextField
                autoFocus
                margin="dense"
                name="city"
                value= {this.state.customer.city}
                onChange={e => this.handleInputChange(e)}
                label="City"
                fullWidth
              />
              <TextField
                autoFocus
                margin="dense"
                name="email"
                value= {this.state.customer.email}
                onChange={e => this.handleInputChange(e)}
                label="E-mail"
                fullWidth
              />
              <TextField
                autoFocus
                margin="dense"
                name="phone"
                value= {this.state.customer.phone}
                onChange={e => this.handleInputChange(e)}
                label="Phone"
                fullWidth
              />
            </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="secondary"> Cancel</Button>
            <Button onClick={this.updateCustomer} color="secondary"> Save</Button>
          </DialogActions>
        </Dialog>  
      </div>
      )
    };
}

export default EditCustomer;