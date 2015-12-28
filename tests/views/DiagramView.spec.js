import React from 'react'
import TestUtils from 'react-addons-test-utils'
import { bindActionCreators } from 'redux'
import { DiagramView } from 'views/DiagramView'

function shallowRender (component) {
  const renderer = TestUtils.createRenderer()

  renderer.render(component)
  return renderer.getRenderOutput()
}

function renderWithProps (props = {}) {
  return TestUtils.renderIntoDocument(<DiagramView {...props} />)
}

function shallowRenderWithProps (props = {}) {
  return shallowRender(<DiagramView {...props} />)
}

describe('(View) Diagram', function () {
  let _component, _rendered, _props, _spies

  beforeEach(function () {
    _spies = {}
    _props = {
      entities: [],
      ...bindActionCreators({
        addEntity: (_spies.addEntity = sinon.spy()),
        deleteEntity: (_spies.deleteEntity = sinon.spy())
      }, _spies.dispatch = sinon.spy())
    }

    _component = shallowRenderWithProps(_props)
    _rendered = renderWithProps(_props)
  })

  it('Should render as a <div>.', function () {
    expect(_component.type).to.equal('div')
  })

  it('Should include a toolbar.', function () {
    const tb = TestUtils.findRenderedDOMComponentWithClass(_rendered, 'btn-toolbar')

    expect(tb).to.exist
  })

  describe('An add entity button...', function () {
    let _btn

    beforeEach(() => {
      _btn = TestUtils.scryRenderedDOMComponentsWithTag(_rendered, 'button')
        .filter(a => /Add entity/.test(a.textContent))[0]
    })

    it('should be rendered.', function () {
      expect(_btn).to.exist
    })

    it('should dispatch an action when clicked.', function () {
      _spies.dispatch.should.have.not.been.called
      TestUtils.Simulate.click(_btn)
      _spies.dispatch.should.have.been.called
    })
  })

  describe('A delete entity button...', function () {
    let _btn

    beforeEach(() => {
      _btn = TestUtils.scryRenderedDOMComponentsWithTag(_rendered, 'button')
        .filter(a => /Delete entity/.test(a.textContent))[0]
    })

    it('should be rendered.', function () {
      expect(_btn).to.exist
    })

    it('should dispatch an action when clicked.', function () {
      debugger
      _spies.dispatch.should.have.not.been.called
      TestUtils.Simulate.click(_btn)
      _spies.dispatch.should.have.been.called
    })
  })
})
