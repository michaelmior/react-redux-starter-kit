import React from 'react'
import { connect } from 'react-redux'
import { actions as modelActions } from '../redux/modules/model'
import Node from '../components/Node'
import Toolbar from '../components/Toolbar'

const mapStateToProps = (state) => ({
  model: state.model
})
export class DiagramView extends React.Component {
  static propTypes = {
    model: React.PropTypes.object.isRequired
  }

  render () {
    return (
      <div className='container text-center'>
        <Toolbar {...this.props}/>
        <div className='entity-graph'>
          {this.props.model.map((entity, name) =>
            <Node key='entity:{name}' label={name}/>
          ).toIndexedSeq()}
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, modelActions)(DiagramView)
