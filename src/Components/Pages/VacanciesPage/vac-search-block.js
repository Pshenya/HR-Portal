import React, { Component } from 'react';
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import Divider from "@material-ui/core/Divider";
import WorkIcon from '@material-ui/icons/Work';
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Paper from "@material-ui/core/Paper";
import { withStyles } from "../../HOC/withStyles";


class VacSearchBlock extends Component {
    render() {
        const {stylesHook} = this.props;
        const classes = stylesHook;
        return (
            <div>
                <div className="search-header">
                    <div className="search-header-content d-flex">
                        <div className="search">
                            <Paper component="form" className={classes.root}>
                                <InputBase
                                    className={classes.input}
                                    placeholder="Поиск"
                                    inputProps={{'aria-label': 'Поиск'}}
                                />
                                <IconButton type="submit" className={classes.iconButton} aria-label="search">
                                    <SearchIcon/>
                                </IconButton>
                                <Divider className={classes.divider} orientation="vertical"/>
                                <IconButton color="primary" className={classes.iconButton} aria-label="directions">
                                    <WorkIcon/>
                                    <h3 style={{marginLeft: '5px', fontSize: '1.5rem'}}>Все регионы</h3>
                                    <ExpandMoreIcon/>
                                </IconButton>
                            </Paper>
                        </div>
                        <ul className="header-list">
                            <li className="d-flex">
                                <span>Категории</span>
                                <ExpandMoreIcon style={{paddingBottom: '3px'}}/>
                            </li>
                            <li className="d-flex">
                                <span>Компании</span>
                                <ExpandMoreIcon style={{paddingBottom: '3px'}}/>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default withStyles(VacSearchBlock);