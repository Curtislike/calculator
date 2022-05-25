import React from 'react'
import PropTypes from 'prop-types'

import { StyledDisplay, DisplayValue } from './components'
import ErrorBoundary from '@/components/ErrorBoundary/ErrorBoundary'

class Display extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <StyledDisplay>
        <ErrorBoundary>
          <DisplayValue className="display">
            {this.props.value}
          </DisplayValue>
        </ErrorBoundary>
      </StyledDisplay>
    )
  }
}

Display.propTypes = {
  value: PropTypes.string,
}

export default Display
