const initialState = {
  todos: [
    {id: 1, text: 'Create static UI', completed: true},
    {id: 2, text: 'Initialise state', completed: true},
    {id: 3, text: 'Render based on state', completed: false}
  ],
  currentTodo: ''
};

export default function Todo(state = initialState, action) {
  switch(action.type) {
    case "TODO_ADD":
      return {...state, todos: state.todos.concat(action.payload)};
    case "CURRENT_UPDATE":
      return {...state, currentTodo: action.payload};
    default:
      return state;
  }
}
