import React from 'react'
import { connect } from 'react-redux'
import { actions as erdActions } from '../redux/modules/erd'
import Toolbar from '../components/Toolbar'

const mapStateToProps = (state) => ({
  entities: state.erd.entities
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

export default connect(mapStateToProps, erdActions)(DiagramView)
