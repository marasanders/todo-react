render(){
  let items = this.state.items.map((item, index) => (
      <div key={index}>
        <h1>{index}</h1>
        <Item index={index} handleDelete={this.onDelete} body={item.body}/>
      </div>
  ))


import React, {Component} from 'react'
import ReactDOM from 'react-dom'

class NewItem extends React {
  constructor(props) {
    super(
    this.state = props
    )
  }
  render()
  return<form>
  <input

}
// data flows down from parent to pass data to children and grandchildren need .props
//create one Component
// would need React.Component if don't use {Component}
// if you don't do create then have to link to React compiler
// esxtends inherits from
class List extends Component {
  // define constructor method to handle an initial state -
  contstructor (props){
    //will call constructor
    super()
    //invent property to attach new input newItem
    // this.state = props
    // this.state.newItem = ""
    this.state = props
  }
  addItem(text{
    // coming from this is equal to props
    let items = this.state.items
    //now have a way to access thing coming in
    items.push(text) // won't finish need to set state
    this.setState({items})
  })
  change(e){
        //e.target target is the element that fired the envent itself then .value to get value
        // properties are immutable but state can be changed - when start set state to be emply
        //string then set state to be key press plus next key press...
    e.target.value
  }
  render(){
    // return<h1>hello</h1> need something this will just make sure working
    return
    <form>
    //all of these components are imutable can't be changed so need a value
    //that changes as you type so put in onChange= need some sort of call call call backet can use a fat arrow
    //to not change the value of this call method so use e - event/argument and return function call change on e

      <input type="text" value='' onChange={e => this.change(e)}/>
    </form>
    <ul>
    // loop through map for each item will return an li that contains item
    //must have a key so add index and make a key
    {this.props.items.map( item, index => {
       return <li key={index}>{item}</li>

       })} //print out whatever is in the items property
    </ul>

  }
}
//this.props is all properties or attributes of this element so add item={items} to <List
let items = [
  "learn react"
  "learn comp sci"
]
//1st argument is an instance of our component and the second is the DOM mount the application in div in index.html called root
// this is actually putting stuff on the page -
ReactDOM.render(
  <List item={items}/>, document.getElementById('root')
)

<NewItem newItem=''> //have to define or uncontrolled
e.preventDefault() //so it doesn't submit to itself
this.state.newitem // attach to state so can type in input otherwise won't allow change

//parent child relationship the child is the form with no way to communicate with
//parent only through properties
//so define new property on create
// this will get the text and trigger //this.props.onCreate called by form submit this.Create which call this.addItem

<NewItem newItem='' onCreate={ text => this.addItem(text))}
