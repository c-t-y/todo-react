import React from 'react';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newItem: '',
      list: [],
    }
    this.handleInput = this.handleInput.bind(this)
    this.addToDo = this.addToDo.bind(this)
    this.deleteToDo = this.deleteToDo.bind(this)
  }
  handleInput(e) {
    let value = e.target.value
    this.setState({newItem: value})
  }
  addToDo() {
    const newItem = this.state.newItem;
    const copiedList = this.state.list;
    copiedList.push(newItem);
    this.setState({
      list: copiedList,
      newItem: ''
    })
  }

  deleteToDo(index){
    const copiedList = this.state.list;
    copiedList.splice(index, 1);
    this.setState({
      list: copiedList
    })
  }
  render() {

    return (
      <div className="App">
        <h1>To Do List</h1>
          <input
            type='text'
            placeholder='type item here...' 
            value={this.state.newItem}
            onChange={this.handleInput}
          />
          <button onClick={this.addToDo}>add</button>
          <ul>
          {this.state.list.map((item, index) => {
            return (
            <div key={'item'+index} className="list">
              <li key={"li"+index} onClick={this.deleteToDo}>{item}</li>
            </div>
            )
          })}
          </ul>


        
      </div>
    );
  }
}

export default App;
