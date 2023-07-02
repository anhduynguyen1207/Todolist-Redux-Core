
//Cách chưa tách reducer ra 
/*
    const initState = {
        filter: {
            search: '',
            status: 'All',
            priority: []
        },
        todoList: [
            {
                id: 1,
                name: 'Learn HTML',
                completed: false,
                priority: 'Medium',
            },
            {
                id: 2,
                name: 'Learn CSS',
                completed: true,
                priority: 'Low',
            },
            {
                id: 3,
                name: 'Learn ReactJs',
                completed: false,
                priority: 'High',
            }

        ]
    }

    const rootReducer = (state = initState, action) => {
        console.log({ state, action });
        switch (action.type) {
            case 'todoList/addTodo':
                return {
                    ...state,
                    todoList: [...state.todoList, action.payload]
                }
            case 'filter/searchTodo':
                return {
                    ...state,
                    filter: {
                        ...state.filter,
                        search: action.payload
                    }
                }
            default:
                return state;
        }
    }

    export default rootReducer;
*/
//Cách tách reducer ra và làm cho ngắn gọn 
import { combineReducers } from "redux"
import filtersReducer from "../components/Filters/FiltersSlice"
import todoListReducer from "../components/TodoList/TodosSlice"
// const rootReducer = (state = {}, action) => {
//     return {
//         filter: filtersReducer(state.filter, action),
//         todoList: todoListReducer(state.todoList, action),
//     }
// }
const rootReducer = combineReducers({
    filter: filtersReducer,
    todoList: todoListReducer,
})
export default rootReducer;