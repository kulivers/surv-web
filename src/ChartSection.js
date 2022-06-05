import {Chart} from './Chart'
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";

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

export function ChartSection({data}) {
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