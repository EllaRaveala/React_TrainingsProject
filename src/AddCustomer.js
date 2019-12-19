import React, {Component} from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

class AddCustomer extends Component{

    constructor(props){
        super(props);
          this.state = { open: false, 
                        customer: { firstname:'', lastname:'', streetaddress:'', postcode:'', city:'', email:'', phone:''}
                      };
        };

    handleClickOpen = () => {
            this.setState({open: true});
          };
        
    handleClose = () => {
            this.setState({open: false});
          };
    
    handleInputChange = (event)=> {
            this.setState({...this.state.customer, [event.target.name]: event.target.value});
        }
    
    addCustomer =() =>{
            this.props.saveCustomer(this.state.customer);
            this.handleClose();
        }
        render(){
            return(
            <div>
              <Button size="small"  color="primary" onClick={this.handleClickOpen}> Add Customer </Button>
              <Dialog open={this.state.open} onClose={this.handleClose}>
                <DialogTitle id="form-dialog-title">Add new customer</DialogTitle>
                  <DialogContent>
                    <DialogContentText> Fill in Customer details </DialogContentText>
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
                  <Button onClick={this.addCustomer} color="secondary"> Save</Button>
                </DialogActions>
              </Dialog>  
            </div>
            )
          };
      }
      
      export default AddCustomer;