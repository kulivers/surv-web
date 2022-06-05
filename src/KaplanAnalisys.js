import {Container, Paper} from "@mui/material";
import Typography from "@material-ui/core/Typography";
import Button from "@mui/material/Button";
import {ChartSection} from "./ChartSection";
import React from 'react'
import {makeStyles} from "@material-ui/core/styles";
import {FieldFilter} from "./FilterFields";


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

export function KaplanAnalisys() {
    const testchart1Data = [
        {x: 1, y: 0},
        {x: 2, y: 5},
        {x: 3, y: 15},
        {x: 3, y: 4},
        {x: 3, y: 8}
    ]
    const classes = useStyles();


    return (
        <Container maxWidth={'lg'}>
            <Paper elevation={10}>
                <Container style={{
                    // backgroundColor: "green",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-around",
                    alignItems: "center",
                    padding: "20px"
                }}>
                    <Typography variant="h4" className={classes.title}>
                        Анализ Каплана Майера
                    </Typography>
                    <Button variant="contained" color="primary" style={{marginRight: '8px'}}>Рассчитать</Button>
                    <Button variant="contained" color="secondary">Добавить фильтр</Button>
                </Container>
                <FieldFilter/>
                <br/>
                <ChartSection data={testchart1Data}/>
                <br/>
                <br/>
            </Paper>
        </Container>
    );
}

