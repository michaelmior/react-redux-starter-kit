import React, { Component } from 'react'

class Node extends Component {
  static propTypes = {
    selected: React.PropTypes.bool.isRequired,
    label: React.PropTypes.node.isRequired,
    onClick: React.PropTypes.func.isRequired
  }

  render () {
    return (
      <div style={{
        borderWidth: this.props.selected ? 1 : 0,
        borderStyle: 'solid'
      }}
           onClick={this.props.onClick}>
        {this.props.label}
      </div>
    )
  }
}

export default Node
