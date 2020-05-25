import {userConstants} from "../CONSTANTS";
import {userService} from "../Services";

describe('users-actions', () => {
    it('getUserData(): should attach user data', () => {
        const action = {
            type: userConstants.GETUSER_SUCCESS,
            userData: {
                name: 'Pavlo'
            }
        };

        expect(userService.getUserData()).toEqual(action);
    })
})