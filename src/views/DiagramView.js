import React from 'react'
import { connect } from 'react-redux'
import { actions as modelActions } from '../redux/modules/model'
import Toolbar from '../components/Toolbar'

const mapStateToProps = (state) => ({
  entities: state.model.entities
})
export class DiagramView extends React.Component {
  render () {
    return (
      <div className='container text-center'>
        <Toolbar {...this.props}/>
      </div>
    )
  }
}

export default connect(mapStateToProps, modelActions)(DiagramView)
