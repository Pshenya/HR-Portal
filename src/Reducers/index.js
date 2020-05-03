import { combineReducers } from 'redux';

import { auth } from './auth-reducer';
import { registration } from './registration-reducer';
import { getUser } from './users-reducer';
import { alert } from './alert-reducer';

const rootReducer = combineReducers({
    auth,
    registration,
    getUser,
    alert
});

export default rootReducer;