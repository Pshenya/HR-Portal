const inititalState = {
    isLoggedIn: false,
};

const authReducer = (state = inititalState, action) => {
    const {type} = action;
    switch (type) {
        case 'USER_LOGGED_IN':
            return{
                isLoggedIn: true
            };
        default:
            return state;
    }
};

export default authReducer;