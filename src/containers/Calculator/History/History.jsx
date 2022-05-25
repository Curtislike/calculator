import React from 'react'
import uniqid from 'uniqid'
import { connect } from 'react-redux'

import {
  StyledHistory,
  HistoryTitle,
  HistoryResultWrap,
  HistoryResult,
  CloseBtn,
  TitleWrap,
} from './components'
import { getHistory } from '@/selectors/hitory.selectors'

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
            <HistoryResultWrap className="history">
              {!!this.props.history.length &&
                this.props.history.map(item => (
                  <HistoryResult key={uniqid()}>
                    {item[0]}
                  </HistoryResult>
                ))}
            </HistoryResultWrap>
          </StyledHistory>
        )}
      </>
    )
  }
}

const mapStateToProps = props => ({
  history: getHistory(props),
})

export default connect(mapStateToProps)(History)
