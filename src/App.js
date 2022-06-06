import React, {useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import './App.css';
import MyNavBar from "./NavBar";
import {Hello} from "./Hello";
import {KaplanAnalisys, KaplanAnalisys2} from "./KaplanAnalisys";


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
    const [showSecond, setShowSecond] = useState(false);
    return (
        <div className="App">
            <button onClick={() => {
                console.log(showSecond);
            }}>clg show second
            </button>
            <MyNavBar setShowSecond={setShowSecond}/>
            <Hello/>
            <KaplanAnalisys/>
            <br/>
            <br/>
            {showSecond ? <KaplanAnalisys2/> : null}
        </div>
    );

}


export default App;
