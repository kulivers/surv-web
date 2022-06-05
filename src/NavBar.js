import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import LockIcon from "@mui/icons-material/Lock";
import BasicMenu from "./Menu";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    [theme.breakpoints.up("sm")]: {
      fontSize: "1.7rem",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.3rem",
    },
  },
  authButton: {
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.7rem",
    },
  },
}));

export default function MyNavBar() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static" >
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <LockIcon />
          </IconButton>
          <Typography variant="h4" className={classes.title}>
            Анализ выживаемости для системы ТГСК
          </Typography>

          <BasicMenu/>
        </Toolbar>
      </AppBar>
    </div>
  );
}
