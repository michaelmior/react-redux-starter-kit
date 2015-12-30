import React, { Component } from 'react'
import { Button, ButtonGroup, ButtonToolbar } from 'react-bootstrap'
import AddEntityModal from '../AddEntityModal'

class Toolbar extends Component {
  static propTypes = {
    addEntity: React.PropTypes.func.isRequired,
    deleteEntity: React.PropTypes.func.isRequired,
    selectedEntity: React.PropTypes.string,
    deselectEntity: React.PropTypes.func.isRequired
  }

  deleteEntity () {
    this.props.deleteEntity(this.props.selectedEntity)
    this.props.deselectEntity()
  }

  render () {
    return (
      <div>
        <ButtonToolbar>
          <ButtonGroup>
            <Button
              onClick={(e) => this.refs.addModal.showAddModal(e)}>Add entity</Button>
            <Button
              disabled={!this.props.selectedEntity}
              onClick={this.deleteEntity.bind(this)}>
              Delete entity
            </Button>
          </ButtonGroup>
        </ButtonToolbar>

        <AddEntityModal ref='addModal' addEntity={this.props.addEntity}/>
      </div>
    )
  }
}

export default Toolbar
