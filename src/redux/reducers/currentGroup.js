export default (state = {}, action) => {
    switch (action.type) {
        case 'SET_CURRENT' : {
            const currentGroup = action.payload;
// debugger;
            return {
                ...state,
                currentGroup
            }
        }
        default: return state
    }
}
