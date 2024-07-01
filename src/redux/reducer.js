import { combineReducers } from "redux";

import filtersSlice from "../components/Filters/FiltersSlice";
import todosSlice from "../components/TodoList/TodosSlice";


// const rootReducer = ( state = {}, action ) => {
//     return {
//         filters: filtersReducer(state.filters, action),
//         todoList: todoListReducer(state.todoList, action)
//     };
// };

const rootReducer = combineReducers({
    filters: filtersSlice,
    todoList: todosSlice
});

export default rootReducer;