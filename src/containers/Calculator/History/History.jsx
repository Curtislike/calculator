import React from 'react'
import uniqid from 'uniqid'

import {
  StyledHistory,
  HistoryTitle,
  HistoryResultWrap,
  HistoryResult,
  CloseBtn,
  TitleWrap,
} from './components'

class History extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <>
        {this.props.isHistoryVisible && (
          <StyledHistory>
            <TitleWrap>
              <HistoryTitle>History</HistoryTitle>
              <CloseBtn
                className="closeHistoryBtn"
                onClick={this.props.handleHistoryClick}>
                <div className="bar1"></div>
                <div className="bar2"></div>
                <div className="bar3"></div>
              </CloseBtn>
            </TitleWrap>
            <HistoryResultWrap>
              {!!this.props.history.length &&
                this.props.history.map(item => (
                  <HistoryResult key={uniqid()}>
                    {item[0] + item[1] + item[2]}
                  </HistoryResult>
                ))}
            </HistoryResultWrap>
          </StyledHistory>
        )}
      </>
    )
  }
}

export default History
