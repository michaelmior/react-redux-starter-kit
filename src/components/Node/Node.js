import React, { Component } from 'react'

class Node extends Component {
  static propTypes = {
    label: React.PropTypes.node.isRequired
  }

  render () {
    return (
      <div>{this.props.label}</div>
    )
  }
}

export default Node
