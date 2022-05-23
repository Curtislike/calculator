import React from 'react'

import { StyledPanel } from './components'

class ControlPanel extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <>
        {!this.props.isHistoryVisible && (
          <StyledPanel
            onClick={() => {
              this.props.handleHistoryClick()
            }}>
            <div className="item"></div>
            <div className="item"></div>
            <div className="item"></div>
          </StyledPanel>
        )}
      </>
    )
  }
}

export default ControlPanel
