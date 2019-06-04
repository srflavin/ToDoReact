import React, { Component } from 'react'

class TodoItems extends Component {
    constructor(props) {
        super(props);
      }
  createTasks = item => {
    return (
    <div>
      <input 
        ref={this.currentItem}
        key={item.key} 
        defaultValue={item.text}
        onClick={() => this.props.deleteItem(item.key)}
      />
      <button>Edit</button>
    </div>
    )
  }
  render() {
    const todoEntries = this.props.entries
    const listItems = todoEntries.map(this.createTasks)

    return <ul className="theList">{listItems}</ul>
  }
}

export default TodoItems

