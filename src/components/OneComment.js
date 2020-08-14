import React, { Component } from 'react'
import { Divider, Avatar, Grid } from "@material-ui/core";

export default class OneComment extends Component {
    render() {
        const {theComment}=this.props;
        return (
            <div>
            <Divider variant="fullWidth" style={{ margin: "30px 0" }} />
            <Grid container wrap="nowrap" spacing={2}>
             <Grid item>
            <Avatar alt={theComment.name} src={theComment.photo} />
          </Grid>
          <Grid justifyContent="left" item xs zeroMinWidth>
        <h4 style={{ margin: 0, textAlign: "left" }}>{theComment.name}</h4>
            <p style={{ textAlign: "left" }}>
        {theComment.content}
        
        {" "}
            </p>
            <p style={{ textAlign: "left", color: "gray" }}>
              {theComment.time}
            </p>
          </Grid>
        </Grid>
            </div>
        )
    }
}
