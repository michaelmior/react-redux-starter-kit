import React, { Component } from 'react'
import { Button, ButtonGroup, ButtonInput, ButtonToolbar, Input, Modal } from 'react-bootstrap'

class Toolbar extends Component {
  static propTypes = {
    model: React.PropTypes.object.isRequired,
    addEntity: React.PropTypes.func.isRequired,
    deleteEntity: React.PropTypes.func.isRequired,
    deselectEntity: React.PropTypes.func.isRequired,
    selectedEntity: React.PropTypes.string
  }
  state = {
    showAddModal: false,
    addDisabled: true
  }

  showAddModal () {
    this.setState({showAddModal: true})
  }

  hideAddModal () {
    this.setState({showAddModal: false})
  }

  newEntityNameChanged () {
    let name = this.refs.newEntityName.getValue()
    this.setState({addDisabled: name.length === 0})
  }

  addEntity (event) {
    event.preventDefault()

    let name = this.refs.newEntityName.getValue()
    this.props.addEntity(name)
    this.setState({showAddModal: false})
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
              onClick={this.showAddModal.bind(this)}>Add entity</Button>
            <Button
              disabled={!this.props.selectedEntity}
              onClick={this.deleteEntity.bind(this)}>
              Delete entity
            </Button>
          </ButtonGroup>
        </ButtonToolbar>

        <Modal show={this.state.showAddModal} onHide={this.hideAddModal.bind(this)}>
          <form onSubmit={this.addEntity.bind(this)}>
            <Modal.Header closeButton>
              <Modal.Title>New entity</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Input
                ref='newEntityName'
                type='text'
                label='Entity name'
                placeholder='Enter a name for the new entity'
                onChange={this.newEntityNameChanged.bind(this)} />
            </Modal.Body>
            <Modal.Footer>
              <ButtonInput
                type='submit'
                bsStyle='primary'
                disabled={this.state.addDisabled}>Add</ButtonInput>
            </Modal.Footer>
          </form>
        </Modal>
      </div>
    )
  }
}

export default Toolbar
