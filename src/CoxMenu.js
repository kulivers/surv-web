import * as React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};


const names = [
        "Статус до ТГСК",
        "Статус после ТГСК",
        "Вид клеточной терапии",
        "Уточнение вида клеточной терапии",
        "Дата клеточной терапии",
        "Окончание 1-го этапа",
        "Кондиционирование",
        "Тип процессинга",
        "Тип трансплантата",
        "Тип донора",
        "ID донора в МИС",
        "Год рождения донора",
        "Дата рождения донора",
        "Возраст донора",
        "Пол донора",
        "CMV-статус реципиента",
        "CMV-статус реципиента",
        "CMV-статус донора",
        "Дата рождения",
        "Диагноз 1",
        "Дата постановки",
        "Комплексный кариотип",
        "Дата последнего наблюдения",
    ]


export default function CoxMenu() {
    const [personName, setPersonName] = React.useState([]);

    const handleChange = (event) => {
        const {
            target: {value},
        } = event;
        setPersonName(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    return (
        <div>
            <FormControl sx={{m: 1, width: 300}}>
                <InputLabel id="demo-multiple-checkbox-label">Предикаты для оценки</InputLabel>
                <Select
                    labelId="demo-multiple-checkbox-label"
                    id="demo-multiple-checkbox"
                    multiple
                    value={personName}
                    onChange={handleChange}
                    input={<OutlinedInput label="Предикаты для оценки"/>}
                    renderValue={(selected) => selected.join(', ')}
                    MenuProps={MenuProps}
                >
                    {names.map((name) => (
                        <MenuItem key={name} value={name}>
                            <Checkbox checked={personName.indexOf(name) > -1}/>
                            <ListItemText primary={name}/>
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    );
}
