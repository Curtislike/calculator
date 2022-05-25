import React from 'react'
import uniqid from 'uniqid'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import {
  StyledHistory,
  HistoryTitle,
  HistoryResultWrap,
  HistoryResult,
  CloseBtn,
  TitleWrap,
} from './components'
import { getHistory } from '@/selectors/hitory.selectors'
import ErrorBoundary from '@/components/ErrorBoundary/ErrorBoundary'

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
              <ErrorBoundary>
                <CloseBtn
                  className="closeHistoryBtn"
                  onClick={this.props.handleHistoryClick}>
                  <div className="bar1"></div>
                  <div className="bar2"></div>
                  <div className="bar3"></div>
                </CloseBtn>
              </ErrorBoundary>
            </TitleWrap>
            <HistoryResultWrap className="history">
              {!!this.props.history.length &&
                this.props.history.map(item => (
                  <ErrorBoundary key={uniqid()}>
                    <HistoryResult>{item[0]}</HistoryResult>
                  </ErrorBoundary>
                ))}
            </HistoryResultWrap>
          </StyledHistory>
        )}
      </>
    )
  }
}

History.propTypes = {
  isHistoryVisible: PropTypes.bool,
  handleHistoryClick: PropTypes.func,
}

const mapStateToProps = props => ({
  history: getHistory(props),
})

export default connect(mapStateToProps)(History)
