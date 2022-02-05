import * as actions from './actionTypes.js';

export const bugAdded = description => ({
    type: actions.BUG_ADDED,
    payload: {
        description
    }
})