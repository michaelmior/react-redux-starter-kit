import React, { Component } from 'react'
import { ButtonInput, Input, Modal } from 'react-bootstrap'
import { fieldTypes } from '../../redux/modules/model'

class AddFieldModal extends Component {
  static propTypes = {
    selectedEntity: React.PropTypes.string,
    addField: React.PropTypes.func.isRequired
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

  newFieldNameChanged () {
    let name = this.refs.newFieldName.getValue()
    this.setState({addDisabled: name.length === 0})
  }

  addField (event) {
    event.preventDefault()

    let name = this.refs.newFieldName.getValue()
    this.props.addField([this.props.selectedEntity, name, fieldTypes.INT])
    this.setState({showAddModal: false})
  }

  render () {
    return (
      <Modal show={this.state.showAddModal} onHide={this.hideAddModal.bind(this)}>
        <form onSubmit={this.addField.bind(this)}>
          <Modal.Header closeButton>
            <Modal.Title>New field on {this.props.selectedEntity}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Input
              ref='newFieldName'
              type='text'
              label='Field name'
              placeholder='Enter a name for the new field'
              onChange={this.newFieldNameChanged.bind(this)} />
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

export default AddFieldModal
