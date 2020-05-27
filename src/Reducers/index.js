import { combineReducers } from 'redux';

import { auth } from './auth-reducer';
import { registration } from './registration-reducer';
import { users } from './users-reducer';
import { alert } from './alert-reducer';
import { assets } from "./assets-reducer";

const rootReducer = combineReducers({
    auth,
    registration,
    users,
    alert,
    assets
});

export default rootReducer;