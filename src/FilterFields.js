import React, {useEffect, useState} from "react";
import axios from "axios";
import {FormControl, Grid, MenuItem, Select} from "@mui/material";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";

const findValues = (fieldDescription, fields) => {
    let possibleValues = []
    let dictionary = {}
    fields.forEach(field => {
        if (field.description === fieldDescription) {
            dictionary = field.dictionary
        }
    })
    //
    for (let key in dictionary) {
        possibleValues.push(dictionary[key])
    }
    return possibleValues
}

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


export function FieldFilter({filters, setFilters}) {
    const classes = useStyles();
    const [fields, setFields] = useState([]);
    const [fieldsNames, setFieldsNames] = useState([]);
    const [selectedValue1, setSelectedValue1] = useState('');
    const [selectedValue2, setSelectedValue2] = useState('');
    const [possibleValues, setPossibleValues] = useState([]);
    const selectValue = (value) => {
        setSelectedValue1(value)
        let foundPossibleValues = findValues(value, fields)
        setPossibleValues(foundPossibleValues)
    }

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/filters`)
            .then(res => {
                setFields(res.data)
                let names = res.data.map(field => field.description)
                setFieldsNames(names)

            })

    }, []);

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
                {arr.map(el => <MenuItem value={el} key={Math.random()}>{el}</MenuItem>)}
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
                {arr.map(el => <MenuItem value={el} key={Math.random()}>{el}</MenuItem>)}
            </Select>
        </FormControl>

    )
}
