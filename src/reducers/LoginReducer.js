const initialState = {
    login: true,
    isError: false,
    signIn: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'LOGGED_IN':
            return {
                ...state,
                ...action.payload,
                login: false,
                isError: false,
                signIn: action.signIn,
            };
        default:
            return state
    }
}