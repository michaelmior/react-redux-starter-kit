import React, { Component } from 'react'
import { ButtonToolbar, ButtonGroup, Button } from 'react-bootstrap'

class Toolbar extends Component {
  static propTypes = {
    model: React.PropTypes.object.isRequired,
    addEntity: React.PropTypes.func.isRequired,
    deleteEntity: React.PropTypes.func.isRequired
  }

  render () {
    return (
      <ButtonToolbar>
        <ButtonGroup>
          <Button onClick={() => this.props.addEntity('Test')}>Add entity</Button>
          <Button onClick={() => this.props.deleteEntity('Test')}>Delete entity</Button>
        </ButtonGroup>
      </ButtonToolbar>
    )
  }
}

export default Toolbar
