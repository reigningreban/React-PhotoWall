import React, {Component} from 'react';

class List extends Component{
    constructor(props) {
      super(props);
        this.state = {
          taskList: ['Write your notes', 'Book the flight', 'Clean the gutter'],
        }
    }
    render() {
      return (
        <div>
          <ol>
            {this.state.taskList.map((task, index) => <li key = {index}>{task}</li>)}
          </ol>
        </div>
      );
    }
  }

export default List