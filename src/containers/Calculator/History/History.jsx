import React from 'react'
import uniqid from 'uniqid'

import {
  StyledHistory,
  HistoryTitle,
  HistoryResultWrap,
  HistoryResult,
} from './components'

class History extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <StyledHistory>
        <HistoryTitle>History</HistoryTitle>
        <HistoryResultWrap>
          {!!this.props.history.length &&
            this.props.history.map(item => (
              <HistoryResult key={uniqid()}>
                {item[0] + item[1] + item[2]}
              </HistoryResult>
            ))}
        </HistoryResultWrap>
      </StyledHistory>
    )
  }
}

export default History
