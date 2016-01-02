import React from 'react'
import { connect } from 'react-redux'
import { actions as modelActions } from '../redux/modules/model'
import { actions as selectedEntityActions } from '../redux/modules/selectedEntity'
import { actions as selectedFieldActions } from '../redux/modules/selectedField'
import Node from '../components/Node'
import Toolbar from '../components/Toolbar'

const mapStateToProps = (state) => ({
  selectedEntity: state.selectedEntity,
  selectedField: state.selectedField,
  model: state.model
})
export class DiagramView extends React.Component {
  static propTypes = {
    selectedEntity: React.PropTypes.string,
    selectEntity: React.PropTypes.func.isRequired,
    deselectEntity: React.PropTypes.func.isRequired,
    selectedField: React.PropTypes.string,
    selectField: React.PropTypes.func.isRequired,
    deselectField: React.PropTypes.func.isRequired,
    addField: React.PropTypes.func.isRequired,
    model: React.PropTypes.object.isRequired
  }

  handleSelect (entityName, fieldName) {
    if (this.props.selectedEntity === entityName) {
      if (this.props.selectedField === fieldName) {
        this.props.deselectEntity()
        this.props.deselectField()
      } else if (fieldName) {
        this.props.selectField(fieldName)
      } else {
        this.props.deselectEntity()
      }
    } else {
      this.props.selectEntity(entityName)

      if (fieldName) {
        this.props.selectField(fieldName)
      } else {
        this.props.deselectField()
      }
    }
  }

  render () {
    var nodes = []
    this.props.model.forEach((entity, entityName) => {
      nodes.push(
        <Node key={'entity:' + entityName}
              label={entityName}
              entity
              selected={this.props.selectedEntity === entityName}
              onClick={this.handleSelect.bind(this, entityName, null)}/>)

      entity.get('fields').forEach((field, fieldName) =>
        nodes.push(
          <Node key={'field:' + entityName + ':' + fieldName}
                label={fieldName}
                field
                onClick={this.handleSelect.bind(this, entityName, fieldName)}/>))
    })

    return (
      <div className='container text-center'>
        <Toolbar {...this.props}/>
        <div className='entity-graph'>
          {nodes}
        </div>
      </div>
    )
  }
}

const actions = Object.assign({}, modelActions, selectedEntityActions, selectedFieldActions)
export default connect(mapStateToProps, actions)(DiagramView)
