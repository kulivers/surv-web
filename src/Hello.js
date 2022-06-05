import {Container} from "@mui/material";
import Typography from "@material-ui/core/Typography";

export function Hello() {
    return (
        <Container maxWidth='xl'>
            <Typography variant="h4">
                Вас приветствует модуль анализа данных о выживаемости информационной системы управления
                клиническими данными трансплантаций гемопоэтических стволовых клеток
            </Typography>
            <Typography variant="h8">
                С помощью данного программного комплекса вы сможете провести анализ выживаемости с помощью метода
                Каплана-Майера
            </Typography>
            <br/>
            <br/>
        </Container>

    )
}