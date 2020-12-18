import './App.css';
import React from 'react'
import { state } from './state'
export class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: state.squares
    };
    this.hello = this.hello.bind(this);
    window['board'] = this;

  }
  hello() {
    console.log('in hello');
    state.squares[0] = 10;
    this.setState({ squares: state.squares })
  }
  render() {
    console.log('werwere')
    return (
      <div>
        <div >
          {this.state.squares.map((item, index) => (
            <span className='indent' key={index}>{item}</span>
          ))}
        </div>
        <button onClick={this.hello}>werwe</button>
      </div>

    );
  }
}

// export default App;
