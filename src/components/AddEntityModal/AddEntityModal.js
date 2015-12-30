import React, { Component } from 'react'
import { ButtonInput, Input, Modal } from 'react-bootstrap'

class AddEntityModal extends Component {
  static propTypes = {
    addEntity: React.PropTypes.func.isRequired
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

  render () {
    return (
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
    )
  }
}

export default AddEntityModal
