import React from "react";
import { Navbar } from "react-bootstrap";
import { makeStyles } from "@material-ui/core/styles";
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';



const useStyles = makeStyles((theme) => ({
    root: {
        padding: '2px 2px',
        display: 'flex',
        alignItems: 'center',
        width: 300,
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
    },
    iconButton: {
        padding: 5,
    },
}));

    const TopBar = () => {
        const classes = useStyles();

        return (
            <React.Fragment>
                <Navbar className="nav-logo" collapseOnSelect expand="sm" variant={"light"}>
                    <Navbar.Brand href="/">
                        <h1 className="d-inline-block align-top logo">LOGO</h1>
                    </Navbar.Brand>
                    <Paper component="form" className={classes.root}>
                        <InputBase
                            className={classes.input}
                            placeholder="Поиск"
                            inputProps={{'aria-label': 'search'}}
                        />
                        <IconButton type="submit" className={classes.iconButton} aria-label="search">
                            <SearchIcon/>
                        </IconButton>
                    </Paper>
                </Navbar>

            </React.Fragment>
        )
    }

export default TopBar;