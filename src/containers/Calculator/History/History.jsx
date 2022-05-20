import React from 'react'
import styled from 'styled-components'

const StyledHistory = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 25px;
  border-left: 2px solid #707070;
  padding: 0 53px;
`

const HistoryTitle = styled.div`
  font-size: 32px;
`

const HistoryResultWrap = styled.div`
  font-size: 32px;
  align-self: flex-start;
  margin-top: 50px;
`

const HistoryResult = styled.div`
  padding: 10px;
`

class History extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <StyledHistory>
        <HistoryTitle>History</HistoryTitle>
        <HistoryResultWrap>
          <HistoryResult>2*2</HistoryResult>
        </HistoryResultWrap>
      </StyledHistory>
    )
  }
}

export default History
