// Developer TODO: add App component
import React, {Component} from 'react'
// import list from './index.js';
import './App.css';
import Item from './item.js'

class List extends Component {
  constructor (props) {
    super ()
    this.state = {
      items: [{
        body: "hello",
      }, {body: "new"}],
      query: ""
    }
  }
  handleClick (e){
    e.preventDefault()
    let enteredItems = this.state.items
    let newItem = this.state.query
    enteredItems.push({body: newItem})
    this.setState({
      items: enteredItems
      })
  }

  onDelete(index) {
    var deleteItem = this.state.items.slice()
    deleteItem.splice(index, 1)
    this.setState({
      items: deleteItem
    })
    // know which todo to delete
    // grab the index of that Todo in this.state.items
    // slice that todo out of this.state.items.\
    // reset the updated state
  }

  handleChange(e){
    this.setState({
      query: e.target.value
    })
  }
  render(){
    let items = this.state.items.map((item, index) => (
        <div key={index}>
          <Item index={index} handleDelete={this.onDelete.bind(this)} body={item.body}/>
        </div>
    ))
    return(
      <div>
      <h1>{this.props.title}</h1>
      <form onSubmit={(e) => this.handleClick(e)}>
      <input type = "text" placeholder="Enter New Comment" onChange={(e) => this.handleChange(e)}/>
        <button>Submit</button>
      </form>
      <h3>To Do List:</h3>
      <ul>
      {items}
      </ul>
      </div>
    )
  }
}
export default List;
