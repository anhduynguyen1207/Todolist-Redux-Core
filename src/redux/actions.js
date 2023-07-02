
export const addTodo = (data) => {
    return {
        type: 'todoList/addTodo',
        payload: data,
    }
}

export const updateTodo = (id) => {
    return {
        type: 'todoList/updateTodo',
        payload: id,
    }
}

export const searchTodo = (text) => {
    return {
        type: 'filter/searchTodo',
        payload: text,
    }
}

export const filterStatusTodo = (status) => {
    return {
        type: 'filter/Status',
        payload: status,
    }
}

export const filterPriorityTodo = (priorities) => {
    return {
        type: 'filter/Priorities',
        payload: priorities,
    }
}


