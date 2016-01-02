import React from 'react'
import { connect } from 'react-redux'
import { actions as modelActions } from '../redux/modules/model'
import { actions as selectedEntityActions } from '../redux/modules/selectedEntity'
import Node from '../components/Node'
import Toolbar from '../components/Toolbar'

const mapStateToProps = (state) => ({
  selectedEntity: state.selectedEntity,
  model: state.model
})
export class DiagramView extends React.Component {
  static propTypes = {
    selectedEntity: React.PropTypes.string,
    selectEntity: React.PropTypes.func.isRequired,
    deselectEntity: React.PropTypes.func.isRequired,
    addField: React.PropTypes.func.isRequired,
    model: React.PropTypes.object.isRequired
  }

  handleSelect (name) {
    if (this.props.selectedEntity === name) {
      this.props.deselectEntity()
    } else {
      this.props.selectEntity(name)
    }
  }

  render () {
    return (
      <div className='container text-center'>
        <Toolbar {...this.props}/>
        <div className='entity-graph'>
          {this.props.model.map((entity, name) =>
            <Node key={'entity:' + name}
                  label={name}
                  entity
                  selected={this.props.selectedEntity === name}
                  onClick={this.handleSelect.bind(this, name)}/>
          ).toIndexedSeq()}
        </div>
      </div>
    )
  }
}

const actions = Object.assign({}, modelActions, selectedEntityActions)
export default connect(mapStateToProps, actions)(DiagramView)
