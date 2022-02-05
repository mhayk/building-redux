import reducer from "./reducer.js";

function createStore(reducer) {
    let state;
    let listeners = [];

    function subscribe(listener) {
        listeners.push(listener);
    }

    function dispatch(ation) {
        // Call the reducer to get the new state
        state = reducer(state, ation);

        for (let i = 0; i < listeners.length; i++) {
            listeners[i]();
        }

    }

    function getState() {
        return state;
    }

    return {
        subscribe,
        getState,
        dispatch
    }
}

export default createStore(reducer)