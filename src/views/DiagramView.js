import React from 'react'
import { connect } from 'react-redux'
import { actions as modelActions } from '../redux/modules/model'
import Node from '../components/Node'
import Toolbar from '../components/Toolbar'

const mapStateToProps = (state) => ({
  entities: state.model.entities
})
export class DiagramView extends React.Component {
  static propTypes = {
    entities: React.PropTypes.object.isRequired
  }

  render () {
    return (
      <div className='container text-center'>
        <Toolbar {...this.props}/>
        <div className='entity-graph'>
          {this.props.entities.map((entity, name) =>
            <Node key='entity:{name}' label={name}/>
          )}
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, modelActions)(DiagramView)
