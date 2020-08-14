import React, { Component } from 'react'
import {  Paper, Grid } from "@material-ui/core";
import CommentConsumer from "../Context";
import OneComment from "./OneComment"
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import TextField from "@material-ui/core/TextField";

export default class Comments extends Component {
    constructor(props){
        super(props);
        this.state={
            dialog:false,
            commentName:"",
            commentPhoto:"",
            commentContent:"",
        }
    }
    handelChangeName=(e)=>{
      const val=e.target.value;
      this.setState(
        {
          commentName:val
        }
      )
    }
    handelChangePhoto=(e)=>{
      const val=e.target.value;
      this.setState(
        {
          commentPhoto:val
        }
      )
     }
     handelChangeContent=(e)=>{
       const val=e.target.value;
      this.setState(
       {
          commentContent:val
        }
      )
     }
    handleClose=()=>{
      this.setState(
        {
          dialog:false
        }
      )
    }
    sendtoDispatch=(dispatch)=>{

      dispatch(
        {
          "type":"newComment",
          "name":String(this.state.commentName),
          "photo":String(this.state.commentPhoto),
          "content":String(this.state.commentContent),
        }
      )
    }
    sendComment=(dispatch,e)=>{
      this.handleClose()
      this.sendtoDispatch(dispatch)

    }
    newComment=()=>{
      this.setState(
        {
          dialog:true
        }
      )
    }
    render() {
        const open=this.state.dialog;
        return (
            <div>
                 <Paper style={{ padding: "40px 20px" }}>
                     <h1>Comments</h1>
                     <br></br>
                     <br></br>
                     <Button
                     onClick={this.newComment}
                     variant="contained"
                     color="secondary"
                     className="NewCommentBtn"
                      >
                      New Comment</Button>
                    <CommentConsumer>
                        {
                            value=>{
                                const {comments}=value;
                                return(
                                    <div>
                                        {
                                            comments.map(
                                                comment=>{
                                                   return(
                                                       <OneComment key={comment.id} theComment={comment}></OneComment>
                                                   )
                                                }
                                            )
                                        }
                                    </div>
                                )
                            }
                        }
                    </CommentConsumer>



                </Paper>

                








{/* new comment diallog */}

          <CommentConsumer>
                {
                  value=>{
                    const {dispatch}=value;
                    return(
                      <Dialog fullScreen open={open} onClose={this.handleClose}>


<AppBar color="secondary">
          <Toolbar>
            <Grid>
            <IconButton edge="start" color="inherit" onClick={this.handleClose} aria-label="close">
              <CloseIcon />
            </IconButton>
            </Grid>
            <Grid>
            <Typography variant="h6">
              Type your new comment
            </Typography>
            </Grid>
            <Grid style={{flex:1}}>
            <Button id="right-side" autoFocus color="inherit"  onClick={this.sendComment.bind(this,dispatch)}>
              Send
            </Button>
            </Grid>
           
       
          </Toolbar>
        </AppBar>
        <List>
          <ListItem button>
            <ListItemText primary="Phone ringtone" secondary="Titania" />
          </ListItem>
          <Divider />
          <ListItem >
          <TextField
          color="secondary"
          onChange={this.handelChangeName.bind(this)}               
          className="field"
          label="Name"
          placeholder="Type your name here"
          variant="outlined"
        />
          </ListItem>
          <ListItem >
          <TextField
          onChange={this.handelChangePhoto.bind(this)}    
          color="secondary"

          className="field"
          label="Photo link"
          placeholder="Copy your profile photo link here"
          variant="outlined"
        />
          </ListItem>
          <ListItem >
          <TextField
          onChange={this.handelChangeContent.bind(this)}    
          color="secondary"
          className="field"
          id="outlined-textarea"
          label="Your Comment"
          multiline
          placeholder="Type your comment here"
          variant="outlined"
        />
          </ListItem>
        </List>





                        </Dialog>
                    )
                  }
                  
                }

          </CommentConsumer>










            </div>
        )
    }
}
