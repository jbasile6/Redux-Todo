import React from 'react';
import { connect } from 'react-redux';


class Todo extends React.Component {
    constructor() {
        super();
        this.state = {
            todos: [
                {
                    value: '',
                    completed: ''
                }
            ]
        }
    }
}


const mapStateToProps = (state) => {
    return {
        todos: state.todos
    };
};

export default connect(mapStateToProps, {})(Todo);