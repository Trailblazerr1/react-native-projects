export default (state = null, action) => {
    console.log(action);
    switch (action.type) {
        case 'select_movie':
            return action.payload;
        default:
            return state;
    }
};
