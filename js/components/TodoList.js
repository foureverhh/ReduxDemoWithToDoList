import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { FlatList } from 'react-native';
import Todo from './Todo';

class TodoList extends Component {

    static PropTypes = {
        todos: PropTypes.arrayOf(
            PropsTypes.shape({
                id: PropTypes.number.isRequired,
                completed: PropTypes.bool.isRequired,
                text: PropTypes.string.isRequired
            }).isRequired
        ).isRequired,
        toggleTodo: PropTypes.bool.isRequired
    };

    _renderItem = (data) => {

        let dataItem = data.item;
        let { id } = dataItem;
        let { toggleTodo } = this.props; //这里为什么是props？

        return (
            <Todo 
               { ...dataItem }
               onClick={()=>toggleTodo(id)}
            />
        );
    }

    render(
        return (
            let {todos} = this.props;
            <FlatList
                data={todos}
                keyExtractor={(item)=>{item.id.toString()}}
                renderItem={this._renderItem}/> //为什么这里要写this？
        );
    )
}

export default TodoList;