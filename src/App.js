import React from 'react';
import './App.css';
// import {Typography} from '@material-ui/core';
import {Container} from '@material-ui/core';
import Comments from "./components/Comments"
// import { Divider, Avatar, Grid, Paper } from "@material-ui/core";
function App() {

  return (
    <div className="App">
      <Container maxWidth="sm">
       <Comments></Comments>
      </Container>
    </div>
  );
}

export default App;
