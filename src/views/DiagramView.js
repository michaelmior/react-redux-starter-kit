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
      <Toolbar {...this.props}/>
    )
  }
}

export default connect(mapStateToProps, erdActions)(DiagramView)
