export default (state = {currentGroup: {}}, action) => {
    switch (action.type) {
        case 'SET_CURRENT' : {
            const nextCurrent = action.newCurrent;

            return {
                ...state,
                currentGroup: nextCurrent
            }
        }
        default: return state
    }
}
