import React, {Component,PropTypes} from 'react'
import Button from '../components/Button'

export default class ButtonUse extends Component{
  constructor(props) {
  super(props);
  this.state = {
    message : ''
  };
  this.handleClick = this.handleClick.bind(this)
  // this.onHendleDisable = this.onHendleDisable.bind(this)
}

handleClick(){
//e.preventDefault();
console.log('Button is clicked')
}

  render() {
    return (
      <div>
          <h4>Example Of Button1</h4>
          <Button onClick={this.handleClick}>Priamry Button</Button>
      </div>
    );
  }
}
