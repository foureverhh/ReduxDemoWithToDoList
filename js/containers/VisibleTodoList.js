import { connect } from 'redux';
import { toggleTodo } from '../actions';
import { TodoList } from '../components/TodoList';
import { visibilityFilters } from '../global';

const { SHOW_ALL, SHOW_COMPELED, SHOW_ACTIVE } = visibilityFilters;

const getVisibleTodos = (todos, filter) => {
    switch(filter){
        case SHOW_ALL:
            return todos;
        case SHOW_ACTIVE:
            return todos.filter(t => !t.completed);
        case SHOW_COMPELED:
            return todos.filter(t => t.completed);
        default:
            throw new Error ('Unknown filter: '+ filter);
    }
};

const mapStateToProps = state => ({
    todos: getVisibleTodos(state.todos, state.visibilityFilter) 
});

const mapDispatchToProps = dispatch => {
    toggleTodo: id => dispatch(toggleTodo(id))
};

export default connect (
    mapStateToProps,
    mapDispatchToProps
)(TodoList)
