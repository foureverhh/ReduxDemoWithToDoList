import React, { Component } from 'react';
import {
    Text,
    TouchableOpacity
} from 'react-native';
import PropTypes from 'prop-types';

class Todo extends Component {

    static PropTypes = {
        onClick: PropTypes.func.isRequired,
        completed: PropTypes.bool.isRequired,
        text: PropTypes.string.isRequired
    }

    render(
        let {onClick, completed, text} = this.props;
        return (
            <TouchableOpacity
                style = {{
                    flexDirection: 'row',
                    flex: 1,
                    height: 50,
                    alignItems: 'center',
                    justifyItems: 'center',
                    backgroundColor: '#cccccc',
                    margin: 10}},
                    onPress={onClick}>
                <Text style={{textDecorationLine: completed ? 'line-through' : 'none'}}>
                {text}
                </Text>
            </TouchableOpacity>
        );
    )
}

export default Todo;