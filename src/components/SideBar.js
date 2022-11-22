import React, { Component, useState } from 'react';
import axios from 'axios';
import { Box, List, ListItem, ListItemButton, ListItemText, Drawer } from "@mui/material";

const list = (locked) => (
    <Box>
        <List>
            {['Shop', 'Offers', 'Log Out'].map(text => (
                <ListItem key={text} disablePadding>
                    <ListItemButton disabled={locked}>
                        <ListItemText primary={text}/>
                    </ListItemButton>
                </ListItem>
            ))}
        </List>
    </Box>
)

export default class SideBar extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <Drawer 
                variant="permanent" 
                anchor="left"
                sx={{
                    minWidth: 1000
                }}>
                <Box sx={{minWidth: 200}} role="presentation">
                    <ListItem>
                        <ListItemText>{this.props.username !== "" ? "Menu" : "Login & Register"}</ListItemText>
                    </ListItem>
                    {list(this.props.username === "")}
                </Box>
            </Drawer>
        )
    }
}
