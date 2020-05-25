import {users} from "../Reducers/users-reducer";
import {userConstants} from "../CONSTANTS";

describe('users-reducer', () => {
    let initialState = {
        userData: {},
        loading: false,
        error: null
    };
    it('GETUSER_REQUEST after situation without error', () => {
        // Test data
        const action = {
            type: userConstants.GETUSER_REQUEST
        };

        // Expectations
        expect(users(initialState, action)).toEqual({
            ...initialState,
            loading: true
        });
    });

    it('GETUSER_REQUEST after error', () => {
        initialState = {
            userData: {},
            loading: true,
            error: 'Unknown error'
        };

        // Test data
        const action = {
            type: userConstants.GETUSER_REQUEST
        };

        // Expectations
        expect(users(initialState, action)).toEqual({
            ...initialState,
            loading: true,
            error: null
        });
    });

    it('GET_USER_SUCCESS', () => {
        initialState = {
            userData: null,
            loading: true,
            error: null
        };

        const action = {
            type: userConstants.GETUSER_SUCCESS,
            userData: [1,2,3]
        };

        expect(users(initialState, action)).toEqual({
            ...initialState,
            loading: false,
            userData: action.userData
        })
    })

    it('GET_USER_FAILURE', () => {
        initialState = {
            userData: null,
            loading: true,
            error: null
        };

        const action = {
            type: userConstants.GETUSER_FAILURE,
            error: 'Unknown error'
        };

        expect(users(initialState, action)).toEqual({
            ...initialState,
            loading: false,
            error: action.error
        })

    })
});



