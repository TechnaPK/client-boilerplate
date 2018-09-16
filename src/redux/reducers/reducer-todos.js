let blankTodo = {}

const initialState = {
    todos: [blankTodo],
    error: null,
    isLoading: false,
    currentTodo: blankTodo,
}

const todos = (state = initialState, action) => {

    switch (action.type) {

        case 'SET_TODOS_LOADING':
            return Object.assign( {}, state, { isLoading: true, error: null } )
        
        case 'SET_TODOS_PAYLOAD':
            return Object.assign( {}, state, action.payload, { isLoading: false } )

        case 'PUSH_TODOS':
            return Object.assign({}, state, { todos: [...state.todos, ...action.payload.todos] })

        case 'UNSHIFT_TODOS':
            return Object.assign({}, state, { todos: [...action.payload.todos, ...state.todos] })

        default:
            return state;

    }

}

export default todos;