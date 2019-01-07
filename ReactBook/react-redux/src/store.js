import { createStore } from 'redux';

import todoApp from './reducers';

import { addTodo, toggleTodo, setVisibilityFilter, VisibilityFilters } from './actions';

const store = createStore(todoApp);

console.log(store.getState());

const unSubscribe = store.subscribe(() => { console.log(store.getState()); });

store.dispatch(addTodo('Buy milk'));
store.dispatch(addTodo('Take dog for walk'));
store.dispatch(addTodo('Sleep'));
store.dispatch(toggleTodo(0));
store.dispatch(toggleTodo(1));
store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED));

unSubscribe();