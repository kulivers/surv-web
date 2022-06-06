import * as React from 'react';
import Button from '@mui/material/Button';

export default function BasicMenu({setShowSecond}) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
        setShowSecond(true)
    };
    return (
        <div>
            <Button
                id="basic-button"
                color={"success"}
                variant="contained"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                Добавить анализ выживаемости
            </Button>
            {/*<Menu*/}
            {/*    id="basic-menu"*/}
            {/*    anchorEl={anchorEl}*/}
            {/*    open={open}*/}
            {/*    onClose={handleClose}*/}
            {/*    MenuListProps={{*/}
            {/*        'aria-labelledby': 'basic-button',*/}
            {/*    }}*/}
            {/*>*/}
            {/*    /!*<MenuItem onClick={handleClose}>Регрессия Кокса</MenuItem>*!/*/}
            {/*    <MenuItem onClick={handleClose}>Метод Каплана-Майера</MenuItem>*/}
            {/*</Menu>*/}
        </div>
    );
}
