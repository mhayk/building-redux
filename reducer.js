import * as actions from './actionTypes.js'
let lastId = 0;

// switch
export default function reducer(state = [], action) {
    switch (action.type) {
        case actions.BUG_ADDED:
            return [
                ...state,
                {
                    id: ++lastId,
                    description: action.payload.description,
                    resolver: false
                }
            ];
        case actions.BUG_REMOVED:
            return state.filter(bug => bug.id !== action.payload.id)
        default:
            return state;
    }
}
