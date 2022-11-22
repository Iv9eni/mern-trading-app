import React, { Component } from 'react';
import { 
  Box, 
  Button, 
  Container, 
  TextField, 
  Typography } from '@mui/material';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: this.props.username
    }
  }

  componentDidMount() {
    let getName = window.sessionStorage.getItem("username")
    if (getName != null)
      this.setState({username: getName})
  }

  render() {
    return (
      <div>
        
      </div>
    )
  }
}
