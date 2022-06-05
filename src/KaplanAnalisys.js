import {Container, FormControl, Grid, MenuItem, Paper, Select} from "@mui/material";
import Typography from "@material-ui/core/Typography";
import Button from "@mui/material/Button";
import {ChartSection} from "./ChartSection";
import React, {useState, useEffect} from 'react'
import {makeStyles} from "@material-ui/core/styles";
import {Filter} from "@mui/icons-material";
import axios from 'axios';


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

    const [fields, setFields] = useState([]);
    const [fieldsNames, setFieldsNames] = useState([]);

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/filters`)
            .then(res => {
                setFields(res.data)
                let names = res.data.map(field => field.description)
                setFieldsNames(names)

            })

    }, []);


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
                <FieldFilter fieldsNames={fieldsNames} fields={fields}/>
                <br/>
                <ChartSection data={testchart1Data}/>
                <br/>
                <br/>
            </Paper>
        </Container>
    );
}

const findValues = (fieldDescription, fields) => {
    let possibleValues = []
    let dictionary ={}
    fields.forEach(field => {
        if (field.description === fieldDescription) {
            dictionary=field.dictionary
        }
    })
    //
    for (let key in dictionary) {
        possibleValues.push( dictionary[key])
    }
    return possibleValues
}

function FieldFilter({fieldsNames, fields}) {
    const classes = useStyles();
    const [selectedValue1, setSelectedValue1] = useState('');
    const [selectedValue2, setSelectedValue2] = useState('');
    const [possibleValues, setPossibleValues] = useState([]);
    const selectValue = (value) => {
        setSelectedValue1(value)
        //set possible values - make promise
        let foundPossibleValues = findValues(value, fields)
        setPossibleValues(foundPossibleValues)
    }

    return (<Grid container style={{marginTop: '20px'}} spacing={3} justifyContent="center">
            <button onClick={() => {
                console.log('console.log(fieldsNames)', fieldsNames)
                console.log('possibleValues', possibleValues)
                console.log('selectedValue1', selectedValue1)
                console.log('selectedValue2', selectedValue2)
            }}>DOOOo
            </button>
            <Grid item>
                <Typography variant="h4" className={classes.title}>
                    Поле
                </Typography>
                <MyMenu1 arr={fieldsNames} selectValue={selectValue} key={1}/>
            </Grid>
            {/*<Grid item>*/}
            {/*    <Typography variant="h4" className={classes.title}>*/}
            {/*        Предикат*/}
            {/*    </Typography>*/}
            {/*    <MyMenu1 arr={['<', '>', '=', '>=', '<=']} key={2}/>*/}
            {/*</Grid>*/}
            <Grid item>
                <Typography variant="h4" className={classes.title}>
                    Значения
                </Typography>
                <MyMenu2 arr={possibleValues} selectValue={setSelectedValue2} key={3}/>
            </Grid>
        </Grid>
    )
}

function MyMenu1({arr, selectValue}) {
    const [value, setValue] = React.useState('');
    const handleChange = (event) => {
        setValue(event.target.value);
        selectValue(event.target.value)
    };
    return (
        <FormControl fullWidth>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={value}
                onChange={handleChange}
            >
                {arr.map(el => <MenuItem value={el} key = {Math.random()}>{el}</MenuItem>)}
            </Select>
        </FormControl>

    )
}

function MyMenu2({arr, selectValue}) {
    const [value, setValue] = React.useState('');
    const handleChange = (event) => {
        setValue(event.target.value);
        selectValue(event.target.value)
    };
    return (
        <FormControl fullWidth>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={value}
                onChange={handleChange}
            >
                {arr.map(el => <MenuItem value={el} key = {Math.random()}>{el}</MenuItem>)}
            </Select>
        </FormControl>

    )
}
