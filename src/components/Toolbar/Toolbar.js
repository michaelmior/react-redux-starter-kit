import React, { Component } from 'react'
import { Button, ButtonGroup, ButtonToolbar } from 'react-bootstrap'
import AddEntityModal from '../AddEntityModal'
import AddFieldModal from '../AddFieldModal'

class Toolbar extends Component {
  static propTypes = {
    addEntity: React.PropTypes.func.isRequired,
    deleteEntity: React.PropTypes.func.isRequired,
    addField: React.PropTypes.func.isRequired,
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
            <Button
              disabled={!this.props.selectedEntity}
              onClick={(e) => this.refs.addFieldModal.showAddModal(e)}>
              Add field
            </Button>
          </ButtonGroup>
        </ButtonToolbar>

        <AddEntityModal ref='addModal'
                        addEntity={this.props.addEntity}/>

        <AddFieldModal ref='addFieldModal'
                       selectedEntity={this.props.selectedEntity}
                       addField={this.props.addField}/>
      </div>
    )
  }
}

export default Toolbar
