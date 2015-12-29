import React, { Component } from 'react'
import classNames from 'classnames'
import styles from './Node.scss'

class Node extends Component {
  static propTypes = {
    entity: React.PropTypes.bool.isRequired,
    selected: React.PropTypes.bool.isRequired,
    label: React.PropTypes.node.isRequired,
    onClick: React.PropTypes.func.isRequired
  }

  render () {
    return (
      <div className={classNames({
        [styles['node']]: true,
        [styles['node--entity']]: this.props.entity,
        [styles['node--selected']]: this.props.selected
      })}
           onClick={this.props.onClick}>
        {this.props.label}
      </div>
    )
  }
}

export default Node
