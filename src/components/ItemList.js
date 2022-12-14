class Boton extends Component {
  render(){
      return(
          <button>CLICK</button>
      )
  }
}

class ItemList extends Component {
  render(){
      return(
          <table>
              <tbody>
                  <tr>
                      <th>NAME</th>
                      <th>BOTON</th>
                      <th>Options</th>
                  </tr>
                      {this.props.data.map((value, index)=> <Row key={index} name={value}></Row> )}
              </tbody>
          </table>
      )
  }
}



class Title extends Component {
  render(){
      return(
          <p>{this.props.name}</p>
      )
  }
}

class Option extends Component {
  render(){
      return(
          <select>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
          </select>
      )
  }
}

class Row extends Component {
  render(){
      return(
          <tr>
              <td>
                  <Title name={this.props.name}></Title>
              </td>
              <td>
                  <Boton ></Boton>
              </td>
              <td>
                  <Option></Option>
              </td>
          </tr>
      )
  }
}

export default ItemList;