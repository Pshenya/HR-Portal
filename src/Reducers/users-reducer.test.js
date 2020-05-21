import {users} from "./users-reducer";
import ReactDOM from "react-dom";
import App from "../App";
import React from "react";
import { userActions } from "../Actions";

it('user should be received', () => {
    // Test data
    let action = userActions.getUserData();
    let initialState = {
        userData: {},
        loading: false,
        error: null
    };

    // Action
    let newState = users(initialState, action);

    // Expectations
    expect(Object.keys(newState.userData).length).not.toBe(0);
});


