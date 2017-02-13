import React, {Component,PropTypes} from 'react'

export default class Button extends Component {

  render(){
      let {className} = this.props;
    return (
      <Button
        type="button"
        className={className}
        onClick={this.props.onClick}
        >
        {this.props.children}
      </Button>
    )
  }
}
//
// const { string, bool, number, func } = PropTypes;
// Button.propTypes = {
//   className: string,
//   disabled: bool,
//   primary: string,
//   secondary: string,
//   onClick: func
// };
