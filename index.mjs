import store from './customStore.mjs'
import * as actions from './actions.js';

store.subscribe(() => {
    console.log("Store changed: ", store.getState());
})

store.dispatch(actions.bugAdded('Bug 1'));
console.log(store.getState())