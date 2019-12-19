import React, {Component} from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

class AddTraining extends Component{

    constructor(props){
        super(props);
          this.state = { open: false, 
                        training: { date:'', duration:'', activity:''}
                      };
        };

    handleClickOpen = () => {
            this.setState({open: true});
          };
        
    handleClose = () => {
            this.setState({open: false});
          };
    
    handleInputChange = (event)=> {
            this.setState({...this.state.training, [event.target.name]: event.target.value});
        }
    
    addTraining =() =>{
            this.props.addTraining(this.state.training);
            this.handleClose();
        }
        render(){
            return(
            <div>
              <Button size="small"  color="primary" onClick={this.handleClickOpen}> Add Training </Button>
              <Dialog open={this.state.open} onClose={this.handleClose}>
                <DialogTitle id="form-dialog-title">Add new Training</DialogTitle>
                  <DialogContent>
                    <DialogContentText> Fill in Training info </DialogContentText>
                    <TextField
                      autoFocus
                      margin="dense"
                      name="date"
                      value= {this.state.training.date}
                      onChange={e => this.handleInputChange(e)}
                      label="Date"
                      fullWidth
                    />
                   <TextField
                      autoFocus
                      margin="dense"
                      name="duration"
                      value= {this.state.training.duration}
                      onChange={e => this.handleInputChange(e)}
                      label="Duration"
                      fullWidth
                    />
                    <TextField
                      autoFocus
                      margin="dense"
                      name="activity"
                      value= {this.state.training.activity}
                      onChange={e => this.handleInputChange(e)}
                      label="Activity"
                      fullWidth
                    />
                  </DialogContent>
                <DialogActions>
                  <Button onClick={this.handleClose} color="secondary"> Cancel</Button>
                  <Button onClick={this.addTraining} color="secondary"> Save</Button>
                </DialogActions>
              </Dialog>  
            </div>
            )
          };
      }
      
      export default AddTraining;