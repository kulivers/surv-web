import React, {useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from '@mui/material/Button';
import './App.css';
import {HorizontalGridLines, LineSeries, XAxis, XYPlot, YAxis} from "react-vis";
import MyNavBar from "./NavBar";
import {Box, Container, FormControl, Grid, InputLabel, Menu, MenuItem, Paper, Select} from "@mui/material";
import CoxMenu from "./CoxMenu";


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


const Chart = ({data}) => {
    return (<div>
        <XYPlot
            width={300}
            height={300}>
            <HorizontalGridLines/>
            <LineSeries
                data={data}/>
            <XAxis/>
            <YAxis/>
        </XYPlot>
    </div>)
}


function MyMenu(arr) {
    arr = arr.arr
    const [value, setValue] = React.useState('');
    const handleChange = (event) => {
        setValue(event.target.value);
    };
    return (
        <FormControl fullWidth>
            {/*<InputLabel id="demo-simple-select-label">Поле</InputLabel>*/}
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={value}
                onChange={handleChange}
            >
                {arr.map(el => <MenuItem value={el}>{el}</MenuItem>)}
            </Select>
        </FormControl>

    )
}

function Filter({fields, fieldValues}) {
    const classes = useStyles();
    console.log(fields)
    return (<Grid container style={{marginTop: '20px'}} spacing={3} justifyContent="center">
            <Grid item>
                <Typography variant="h4" className={classes.title}>
                    Поле
                </Typography>
                <MyMenu arr={fields} key={1}/>
            </Grid>
            <Grid item>
                <Typography variant="h4" className={classes.title}>
                    Предикат
                </Typography>
                <MyMenu arr={['<', '>', '=', '>=', '<=']} key={2}/>
            </Grid>
            <Grid item>
                <Typography variant="h4" className={classes.title}>
                    Значения
                </Typography>
                <MyMenu arr={fieldValues} key={3}/>
            </Grid>
        </Grid>
    )
}
function Filter2({fields, fieldValues}) {
    const classes = useStyles();
    console.log(fields)
    return (<Grid container style={{marginTop: '20px'}} spacing={3} justifyContent="center">
            <Grid item>
                <Typography variant="h4" className={classes.title}>
                    Поле
                </Typography>
                <MyMenu arr={fields} key={1}/>
            </Grid>
            <Grid item>
                <Typography variant="h4" className={classes.title}>
                    Предикат
                </Typography>
                <MyMenu arr={['<', '>', '=', '>=', '<=']} key={2}/>
            </Grid>
            <Grid item>
                <Typography variant="h4" className={classes.title}>
                    Значения
                </Typography>
                <MyMenu arr={fieldValues} key={3}/>
            </Grid>
        </Grid>
    )
}

function ChartSection({data}) {
    const classes = useStyles();
    return (
        <div className={classes.chartSection}>
            <div>
                <Typography variant="h4" className={classes.title}>
                    Результат анализа выживаемости
                </Typography>
            </div>
            <Chart data={data}/>
        </div>
    );
}

function App2() {
    const [countOfAnalys, setCount] = useState(0);
    const diagnosesArr = [
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
    const diagnosesValuesArr = [
        "B-ОЛЛ",
        "Острый миелобастный лейкоз",
        "Нейробластома",
        "Сверхтяжелая форма аплазии кроветворения",
        "T-ОЛЛ",
        "Ювенильный миеломоноцитарный лейкоз",
        "Wiskott-Aldrich syndrome (WAS)",
        "Лимфома Ходжкина",
        "X-linked Chronic Granulomatous Disease (CGD)",
        "Nijmegen breakage syndrome",
        "Анемия Фанкони",
        "Severe combined immunodeficiencies (SCID)",
        "ОБЛ- острый бифенотипический/билинейный  лейкоз",
        "Саркома Юинга",
        "Иммунодефицит",
        "SCID with Gamma C deficiency",
        "Герминотивноклеточные опухоли",
        "Бета-талассемия",
        "Тяжелая форма аплазии кроветворения",
        "Лимфома Бёркита",
        "FHLH unspecified",
        "Тяжелая постгепатитная форма аплазии кроветворения",
        "SCN1 (ELANE deficiency)",
        "Другая солидная опухоль",
        "Острый лимфобластный лейкоз",
        "Миелодисплатический синдром",
        "Мукополисахаридоз",
        "XLP2 XIAP deficiency",
        "CID with CD40L deficiency (HIGM)",
        "Опухоли центральной нервной системы (включая ЦНС PNET)",
        "Врожденный дискератоз",
        "CID unspecified",
        "Приобретенные аплазии кроветворения",
        "Анапластическая крупноклеточная Т-клеточная лимфома",
        "FHLH3 UNC13D deficiency (Munc 13.4)",
        "Вторичный острый миелоидный лейкоз - трансформация из МДС",
        "Медиастинальная В-клеточная лимфома",
        "Вторичный острый миелоидный лейкоз вследствие предшествующей химиотерапии",
        "Анемия Блекфана-Даймонда",
        "Миелосаркома",
    ]
    const chart1Data = [
        {x: 1, y: 0},
        {x: 2, y: 5},
        {x: 3, y: 15},
        {x: 3, y: 4},
        {x: 3, y: 8}
    ]
    const classes = useStyles();
    return (
        <div className="App">
            <MyNavBar countOfAnalys={countOfAnalys} setCount={setCount}/>
            <br/>
            <br/>
            {/*<HELLOEBAT/>*/}
            <KaplanAnalisys2/>
            {/*<KaplanAnalisys/>*/}
            <br/>
            <CoxAnalisys/>
            {/*<KaplanAnalisys2/>*/}
            <br/>
            <br/>
            <br/>
            <br/>
        </div>
    );

}
function App() {
    const classes = useStyles();
    return (
        <div className="App">
            <MyNavBar />
            <HELLOEBAT/>
            <KaplanAnalisys/>

        </div>
    );

}

function HELLOEBAT() {
    const classes = useStyles();
    return (
        <Container maxWidth='xl'>
            <Typography variant="h4">
                Вас приветствует модуль анализа данных о выживаемости информационной системы управления
                клиническими данными трансплантаций гемопоэтических стволовых клеток
            </Typography>
            <Typography variant="h8">
                С помощью данного программного комплекса вы сможете провести анализ выживаемости с помощью методов
                Каплана-Майера и регрессии Кокса
            </Typography>
        </Container>

    )
}

function KaplanAnalisys2() {
    const [countOfAnalys, setCount] = useState(0);
    const diagnosesArr = [
        "Тип донора",
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
    const diagnosesValuesArr = [
        "Аутологичный","B-ОЛЛ",
        "Острый миелобастный лейкоз",
        "Нейробластома",
        "Сверхтяжелая форма аплазии кроветворения",
        "T-ОЛЛ",
        "Ювенильный миеломоноцитарный лейкоз",
        "Wiskott-Aldrich syndrome (WAS)",
        "Лимфома Ходжкина",
        "X-linked Chronic Granulomatous Disease (CGD)",
        "Nijmegen breakage syndrome",
        "Анемия Фанкони",
        "Severe combined immunodeficiencies (SCID)",
        "ОБЛ- острый бифенотипический/билинейный  лейкоз",
        "Саркома Юинга",
        "Иммунодефицит",
        "SCID with Gamma C deficiency",
        "Герминотивноклеточные опухоли",
        "Бета-талассемия",
        "Тяжелая форма аплазии кроветворения",
        "Лимфома Бёркита",
        "FHLH unspecified",
        "Тяжелая постгепатитная форма аплазии кроветворения",
        "SCN1 (ELANE deficiency)",
        "Другая солидная опухоль",
        "Острый лимфобластный лейкоз",
        "Миелодисплатический синдром",
        "Мукополисахаридоз",
        "XLP2 XIAP deficiency",
        "CID with CD40L deficiency (HIGM)",
        "Опухоли центральной нервной системы (включая ЦНС PNET)",
        "Врожденный дискератоз",
        "CID unspecified",
        "Приобретенные аплазии кроветворения",
        "Анапластическая крупноклеточная Т-клеточная лимфома",
        "FHLH3 UNC13D deficiency (Munc 13.4)",
        "Вторичный острый миелоидный лейкоз - трансформация из МДС",
        "Медиастинальная В-клеточная лимфома",
        "Вторичный острый миелоидный лейкоз вследствие предшествующей химиотерапии",
        "Анемия Блекфана-Даймонда",
        "Миелосаркома",
    ]
    const chart1Data = [
        {x: 1, y: 0},
        {x: 2, y: 5},
        {x: 3, y: 15},
        {x: 3, y: 4},
        {x: 3, y: 8}
    ]
    const resume = "Логранговый критерий равнен 3.113. (Если значение меньше 3.846, то исследование отклоняется)"
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
                    <Button
                        id="basic-button"
                        color={"success"}
                        variant="contained"
                        aria-haspopup="true"
                        style={{marginRight:'10px'}}
                    >
                        Экспорт
                    </Button>
                    <Button variant="contained" color="primary" style={{marginRight: '8px'}}>Рассчитать</Button>
                    <Button variant="contained" color="secondary">Добавить фильтр</Button>
                </Container>
                <Filter fields={diagnosesArr} fieldValues={diagnosesValuesArr}/>
                {/*<Filter2 fields={diagnosesArr} fieldValues={diagnosesValuesArr}/>*/}
                <br/>
                {/*<ChartSection data={chart1Data}/>*/}
                {/*<Container maxWidth={'md'}>*/}
                {/*    {resume}*/}
                {/*</Container>*/}
                <br/>
                <br/>
            </Paper>
        </Container>
    );
}
function KaplanAnalisys() {
    const [countOfAnalys, setCount] = useState(0);
    const diagnosesArr = [
        "Тип донора",
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
    const diagnosesValuesArr = [
        "Аутологичный","B-ОЛЛ",
        "Острый миелобастный лейкоз",
        "Нейробластома",
        "Сверхтяжелая форма аплазии кроветворения",
        "T-ОЛЛ",
        "Ювенильный миеломоноцитарный лейкоз",
        "Wiskott-Aldrich syndrome (WAS)",
        "Лимфома Ходжкина",
        "X-linked Chronic Granulomatous Disease (CGD)",
        "Nijmegen breakage syndrome",
        "Анемия Фанкони",
        "Severe combined immunodeficiencies (SCID)",
        "ОБЛ- острый бифенотипический/билинейный  лейкоз",
        "Саркома Юинга",
        "Иммунодефицит",
        "SCID with Gamma C deficiency",
        "Герминотивноклеточные опухоли",
        "Бета-талассемия",
        "Тяжелая форма аплазии кроветворения",
        "Лимфома Бёркита",
        "FHLH unspecified",
        "Тяжелая постгепатитная форма аплазии кроветворения",
        "SCN1 (ELANE deficiency)",
        "Другая солидная опухоль",
        "Острый лимфобластный лейкоз",
        "Миелодисплатический синдром",
        "Мукополисахаридоз",
        "XLP2 XIAP deficiency",
        "CID with CD40L deficiency (HIGM)",
        "Опухоли центральной нервной системы (включая ЦНС PNET)",
        "Врожденный дискератоз",
        "CID unspecified",
        "Приобретенные аплазии кроветворения",
        "Анапластическая крупноклеточная Т-клеточная лимфома",
        "FHLH3 UNC13D deficiency (Munc 13.4)",
        "Вторичный острый миелоидный лейкоз - трансформация из МДС",
        "Медиастинальная В-клеточная лимфома",
        "Вторичный острый миелоидный лейкоз вследствие предшествующей химиотерапии",
        "Анемия Блекфана-Даймонда",
        "Миелосаркома",
    ]
    const chart1Data = [
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
                <Filter fields={diagnosesArr} fieldValues={diagnosesValuesArr}/>
                <Filter2 fields={diagnosesArr} fieldValues={diagnosesValuesArr}/>
                <br/>
                <ChartSection data={chart1Data}/>
                {/*<Container maxWidth={'md'}>*/}
                {/*    {resume}*/}
                {/*</Container>*/}
                <br/>
                <br/>
            </Paper>
        </Container>
    );
}

function CoxAnalisys() {
    const [countOfAnalys, setCount] = useState(0);
    const diagnosesArr = [
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
    const diagnosesValuesArr = [
        "Аллогенный",
        "B-ОЛЛ",
        "Острый миелобастный лейкоз",
        "Нейробластома",
        "Сверхтяжелая форма аплазии кроветворения",
        "T-ОЛЛ",
        "Ювенильный миеломоноцитарный лейкоз",
        "Wiskott-Aldrich syndrome (WAS)",
        "Лимфома Ходжкина",
        "X-linked Chronic Granulomatous Disease (CGD)",
        "Nijmegen breakage syndrome",
        "Анемия Фанкони",
        "Severe combined immunodeficiencies (SCID)",
        "ОБЛ- острый бифенотипический/билинейный  лейкоз",
        "Саркома Юинга",
        "Иммунодефицит",
        "SCID with Gamma C deficiency",
        "Герминотивноклеточные опухоли",
        "Бета-талассемия",
        "Тяжелая форма аплазии кроветворения",
        "Лимфома Бёркита",
        "FHLH unspecified",
        "Тяжелая постгепатитная форма аплазии кроветворения",
        "SCN1 (ELANE deficiency)",
        "Другая солидная опухоль",
        "Острый лимфобластный лейкоз",
        "Миелодисплатический синдром",
        "Мукополисахаридоз",
        "XLP2 XIAP deficiency",
        "CID with CD40L deficiency (HIGM)",
        "Опухоли центральной нервной системы (включая ЦНС PNET)",
        "Врожденный дискератоз",
        "CID unspecified",
        "Приобретенные аплазии кроветворения",
        "Анапластическая крупноклеточная Т-клеточная лимфома",
        "FHLH3 UNC13D deficiency (Munc 13.4)",
        "Вторичный острый миелоидный лейкоз - трансформация из МДС",
        "Медиастинальная В-клеточная лимфома",
        "Вторичный острый миелоидный лейкоз вследствие предшествующей химиотерапии",
        "Анемия Блекфана-Даймонда",
        "Миелосаркома",
    ]
    const chart1Data = [
        {x: 1, y: 0},
        {x: 2, y: 5},
        {x: 3, y: 15},
        {x: 3, y: 4},
        {x: 3, y: 8}
    ]
    const resume = "Пропорциональность рисков проверена. Модель корректна."
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
                        Регрессионный анализ Кокса
                    </Typography>
                    <Button variant="contained" color="primary" style={{marginRight: '8px'}}>Рассчитать</Button>
                    <Button variant="contained" color="secondary">Добавить фильтр</Button>
                </Container>
                <Filter fields={diagnosesArr} fieldValues={diagnosesValuesArr}/>
                <br/>
                <hr/>
                <Typography variant="h7" className={classes.title}>
                    Выберите предикаты
                </Typography>
                <CoxMenu/>
                <Chart data = {chart1Data}/>
                <Container maxWidth={'md'}>
                    {resume}
                </Container>
                <br/>
                <br/>
            </Paper>
        </Container>
    );
}

export default App;
