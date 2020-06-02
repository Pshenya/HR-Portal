import configureMockStore from 'redux-mock-store'

import thunk from 'redux-thunk'
import {userConstants} from "../CONSTANTS";
import {userActions} from "../Actions";
import fetchMock from 'fetch-mock'

const _apiURL = "http://localhost:3000/api";

const middlewares = [thunk];
// Створюємо фейковий стор, для зберігання даних
const mockStore = configureMockStore(middlewares);

describe('Users Actions', () => {
    afterEach(() => {
        fetchMock.reset();
        fetchMock.restore();
    });
    it('creates GET_USER_SUCCESS when fetching users has been done', async () => {
        fetchMock.getOnce(`${_apiURL}/posts`, {
            headers: {'content-type': 'application/json'},
            body: {name: 'Pavel', lastName: 'Pshenya', age: 21}
        });
        // очікуємо, що у нас буде викликано 2 екшена
        const expectedActions = [
            {
                type: userConstants.GETUSER_REQUEST,
            },
            {
                type: userConstants.GETUSER_SUCCESS,
                userData: {name: 'Pavel', lastName: 'Pshenya', age: 21}
            },
        ];
        const store = mockStore({});
        // Очікуємо результат, та порівнюємо його з очікуваним результатом
        await store.dispatch(userActions.getUserData()).then(() => {
            expect(store.getActions()).toEqual(expectedActions)
        })
    })
    it('creates GET_USER_FAILURE when fetching users has been done', async () => {

    })
});