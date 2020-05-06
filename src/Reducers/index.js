import { combineReducers } from 'redux';

import { auth } from './auth-reducer';
import { registration } from './registration-reducer';
import { users } from './users-reducer';
import { alert } from './alert-reducer';

const rootReducer = combineReducers({
    auth,
    registration,
    users,
    alert
});

export default rootReducer;