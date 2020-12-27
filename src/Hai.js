import './App.css';
import React from 'react'
import { state } from './state'
export class Bed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      diamonds: state.diamonds
    };
    this.hello = this.hello.bind(this);
    window['board'] = this;

  }
  shouldComponentUpdate(nextProps) {
    console.log('updated hai comp', nextProps)
    this.state = {
      squares: state.diamonds
    };
    return true;
    // return nextProps.changedProp !== this.state.changedProp;
  }
  hello() {
    console.log('in hello');
    state.diamonds[0] = 10;
    this.setState({ diamonds: state.diamonds })
  }
  render() {
    console.log('werwere')
    return (
      <div>
        <div >
          {this.state.diamonds.map((item, index) => (
            <span className='indent' key={index}>{item}</span>
          ))}
        </div>
        <button onClick={this.hello}>werwe</button>
      </div>

    );
  }
}

// export default App;
