import React from 'react'
import PropTypes from 'prop-types'

import { StyledPanel } from './components'
import ErrorBoundary from '@/components/ErrorBoundary/ErrorBoundary'

class ControlPanel extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <>
        {!this.props.isHistoryVisible && (
          <ErrorBoundary>
            <StyledPanel
              onClick={() => {
                this.props.handleHistoryClick()
              }}>
              <div className="item"></div>
              <div className="item"></div>
              <div className="item"></div>
            </StyledPanel>
          </ErrorBoundary>
        )}
      </>
    )
  }
}

ControlPanel.propTypes = {
  isHistoryVisible: PropTypes.bool,
  handleHistoryClick: PropTypes.func,
}

export default ControlPanel
