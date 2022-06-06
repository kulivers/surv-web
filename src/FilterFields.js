import React, {useEffect, useState} from "react";
import axios from "axios";
import {FormControl, Grid, MenuItem, Select} from "@mui/material";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";

const findPossibleValuesInDictionary = (fieldDescription, fields) => {
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

const getValueInDictionary = (fields, fieldDescription, value) => {
    //todo get value by key
    let dictionary = {}
    fields.forEach(field => {
        if (field.description === fieldDescription) {
            dictionary = field.dictionary
        }
    })

    let possibleValues = findPossibleValuesInDictionary(fieldDescription, fields)
    // console.log('dictionary', dictionary)
    // console.log('possibleValues', possibleValues)
    // console.log('value', value)

    for (let i = 0; i < possibleValues.length; i++) {
        if (possibleValues[i] === value)
        {
            // console.log("i",i)
            return ''+i
        }
    }
}

const getNameFromDescription = (fields, fieldDescription) =>{
    //todo doesnt work
    fields.forEach(field => {
        if (field.name === fieldDescription) {
            return field.name
        }
    })


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
    const formirateFilters = () => {
        // { "filters": [
        //     {"name": "hsct_type", "value": 1},
        //     {"name": "hsct_processing", "value": 1}
        // ]        }
        // let filtersArr = filters["filters"]
        // let res = [...filtersArr, {"newOBJECT": "xyu"}]
        let value = getValueInDictionary(fields, selectedValue1, selectedValue2)
        let name = getNameFromDescription(fields, selectedValue1)
        console.log('value', value)
        console.log('name', name)
    }
    const selectValue1 = (value) => {
        setSelectedValue1(value)
        let foundPossibleValues = findPossibleValuesInDictionary(value, fields)
        setPossibleValues(foundPossibleValues)
    }

    const selectValue2 = (value) => {
        setSelectedValue2(value)
        formirateFilters()
    }


    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/filters`)
            .then(res => {
                setFields(res.data)
                let names = res.data.map(field => field.description)
                setFieldsNames(names)
            })

    }, []);


    return (<Grid container style={{marginTop: '20px', border: '1px solid red'}} spacing={3} justifyContent="center">
            <button onClick={() => { console.log(selectedValue1, selectedValue2) }}>sadada</button>
            <Grid item>
                <Typography variant="h4" className={classes.title}>
                    Поле
                </Typography>
                <MyMenu1 arr={fieldsNames} selectValue={selectValue1} key={1}/>
            </Grid>
            <Grid item>
                <Typography variant="h4" className={classes.title}>
                    Значения
                </Typography>
                <MyMenu2 arr={possibleValues} selectValue={selectValue2} key={3}/>
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
