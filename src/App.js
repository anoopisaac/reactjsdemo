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
  shouldComponentUpdate(nextProps) {
    console.log('updated insurance')
    this.state = {
      squares: state.squares
    };
    return true;
    // return nextProps.changedProp !== this.state.changedProp;
  }
  hello() {
    console.log('in hello');
    state.squares[0] = 10;
    state.name = Math.random();
    this.setState({ squares: state.squares })
  }
  render() {
    console.log('werwere', this.props.name)
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
