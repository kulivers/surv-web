import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import './App.css';
import MyNavBar from "./NavBar";
import {FormControl, Grid, MenuItem, Select} from "@mui/material";
import {Hello} from "./Hello";
import {KaplanAnalisys} from "./KaplanAnalisys";


const useStyles = makeStyles((theme) => ({
    title: {
        flexGrow: 1,
        [theme.breakpoints.up("sm")]: {
            fontSize: "1.7rem",
        },
        [theme.breakpoints.down("xs")]: {
            fontSize: "1.3rem",
        },
    },
    chartSection: {
        display: "flex",
        flexDirection: "column",
        alignItems: 'center',
        justifyContent: 'center'
    }
}));

function App() {
    return (
        <div className="App">
            <MyNavBar />
            <Hello/>
            <KaplanAnalisys/>

        </div>
    );

}


export default App;
