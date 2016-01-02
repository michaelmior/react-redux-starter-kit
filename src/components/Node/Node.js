import React, { Component } from 'react'
import classNames from 'classnames'
import styles from './Node.scss'

class Node extends Component {
  static propTypes = {
    entity: React.PropTypes.bool,
    field: React.PropTypes.bool,
    selected: React.PropTypes.bool,
    label: React.PropTypes.node.isRequired,
    onClick: React.PropTypes.func.isRequired
  }

  render () {
    return (
      <div className={classNames({
        [styles['node']]: true,
        [styles['node--entity']]: this.props.entity === true,
        [styles['node--field']]: this.props.field === true,
        [styles['node--selected']]: this.props.selected
      })}
           onClick={this.props.onClick}>
        {this.props.label}
      </div>
    )
  }
}

export default Node
