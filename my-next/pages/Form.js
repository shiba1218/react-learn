import React, {Component} from 'react';
import axios from 'axios';
import {Button, Table, TableBody, TableCell, TableRow, Radio, Paper, TableHead, TextField, Input, AppBar, Tabs, Tab} from '@material-ui/core';
import Radio from '@material-ui/core/Radio';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';



export default class Form extends Component{
    render(){
        return(
            <div>
            <AppBar position="static">
            <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                <Tab label="Item One" {...a11yProps(0)} />
                <Tab label="Item Two" {...a11yProps(1)} />
                <Tab label="Item Three" {...a11yProps(2)} />
            </Tabs>
            </AppBar>
            <br/>
            <Paper className="userFormarea">
                    <h4>ユーザー登録エリア</h4>
                    <div className="userForm">
                        <div>
                        <TextField id="standard-secondary" label="Name" color="secondary" />
                        <br/>
                        <TextField id="standard-secondary" label="item_color" color="secondary" />
                        <br/>
                        <TextField id="standard-secondary" label="board_color" color="secondary" />
                        <br/>
                        <TextField id="standard-secondary" label="my_shape" color="secondary" />
                        <br/>
                        <TextField id="standard-secondary" label="your_shape" color="secondary" />
                        <div>
                            <p>board_width</p>
                            <input type="radio" name="board-width" value="3" /> 3
                            <input type="radio" name="board-width" value="5" /> 5
                            <input type="radio" name="board-width" value="7" /> 7
                            <input type="radio" name="board-width" value="9" /> 9
                            <Radio
                                // checked={selectedValue === 'd'}
                                // onChange={handleChange}
                                value="d"
                                color="default"
                                name="radio-button-demo"
                                inputProps={{ 'aria-label': 'D' }}
                            />
                        </div>
                        </div>
                    </div>
            </Paper>
            <style jsx>
            {`
            .userForm{
                text-align:center;
                padding: 5px 10px 50px;
            }
            h4{
                padding-top: 15px;
                text-align:center;
            }
            `}</style>
            </div>
        )
    }
}