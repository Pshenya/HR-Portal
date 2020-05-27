import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
        padding: '2px 10px',
        marginRight: '24px',
        display: 'flex',
        alignItems: 'center',
        width: 900,
    },
    input: {
        fontSize: '1.5rem',
        marginLeft: theme.spacing(1),
        flex: 1,
    },
    iconButton: {
        padding: 10,
    },
    divider: {
        height: 28,
        margin: 4,
    },
}));

export function withStyles(Component) {
    return function WrappedComponent(props) {
        const stylesHook = useStyles();
        return <Component {...props} stylesHook={stylesHook} />;
    }
}

