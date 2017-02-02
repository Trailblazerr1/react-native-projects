export const selectMovie = (Id) => {
    return {
        type: 'select_movie',
        payload: Id
    };
};
