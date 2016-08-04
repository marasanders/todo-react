import React, {Component} from 'react'

class Item extends Component {
  render (){
    let {index} = this.props
    return (
      <div>
         <p>{this.props.body} <button onClick={(e) => this.props.handleDelete(index)}>Mission Accomplished</button></p>
      </div>
    )
  }
}

export default Item
