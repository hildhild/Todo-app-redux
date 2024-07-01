//!Redux core
// import { createStore } from 'redux';
// import filtersReducer from '../components/Filters/FiltersSlice';
// import todoListReducer from '../components/TodoList/TodosSlice';
// import { composeWithDevTools} from 'redux-devtools-extension';

// const store = createStore(rootReducer);

// export default store;


//!Redux toolkit
import { configureStore } from '@reduxjs/toolkit';
import filtersSlice from '../components/Filters/filtersSlice';
import todosSlice from '../components/TodoList/todosSlice';

const store = configureStore({
    reducer: {
        filters: filtersSlice.reducer,
        todoList: todosSlice.reducer,
    },
});

export default store;