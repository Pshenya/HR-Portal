import React, { Component } from "react";

import SearchPageItem from "./search-page-item";
import { withStyles } from "../../HOC/withStyles";

import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import Divider from "@material-ui/core/Divider";
import WorkIcon from '@material-ui/icons/Work';
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Paper from "@material-ui/core/Paper";


class SearchPage extends Component {
    constructor(props) {
        super(props);

        this.onSearch = this.onSearch.bind(this);
        this.state = {
            searchInput: ''
        }
    }

    onSearch(e){
        this.setState({
            searchInput: e.target.value
        });
    }
    render() {
        const {stylesHook} = this.props;
        const classes = stylesHook;

        const {profilesList} = this.props;
        let filteredProfiles = profilesList.filter(
            (profile) => {
                return (profile.name.toLowerCase().includes(this.state.searchInput.toLowerCase())) || (profile.lastName.toLowerCase().includes(this.state.searchInput.toLowerCase())) ;
            }
        );
        return (
            <div className="sp">
                <div className="search-header">
                    <div className="search-header-content d-flex">
                        <div className="search">
                            <Paper component="form" className={classes.root}>
                                <InputBase
                                    className={classes.input}
                                    placeholder="Поиск"
                                    inputProps={{'aria-label': 'Поиск'}}
                                    value={this.state.searchInput}
                                    onChange={this.onSearch}
                                />
                                <IconButton className={classes.iconButton} aria-label="search">
                                    <SearchIcon/>
                                </IconButton>
                                <Divider className={classes.divider} orientation="vertical"/>
                                <IconButton color="primary" className={classes.iconButton} aria-label="directions">
                                    <WorkIcon/>
                                    <h3 style={{marginLeft: '5px', fontSize: '1.5rem'}}>Все компании</h3>
                                    <ExpandMoreIcon/>
                                </IconButton>
                            </Paper>
                        </div>
                        <ul className="header-list">
                            <li className="d-flex">
                                <span>Должность</span>
                                <ExpandMoreIcon style={{paddingBottom: '3px'}}/>
                            </li>
                            <li className="d-flex">
                                <span>Рейтинг</span>
                                <ExpandMoreIcon style={{paddingBottom: '3px'}}/>
                            </li>
                        </ul>
                    </div>
                </div>
                {
                    filteredProfiles.map((user, idx) => {
                        return <div className="sp-item" key={user._id}>
                            <SearchPageItem user={user} idx={idx}/>
                        </div>
                    })
                }
            </div>
        );
    };
}

export default withStyles(SearchPage);