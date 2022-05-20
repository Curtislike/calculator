import React from 'react'
import styled from 'styled-components'
import propTypes from 'prop-types'

const StyledDisplay = styled.div`
  margin: 0 auto;
  border-bottom: 2px solid #707070;
  display: flex;
  justify-content: flex-end;
`

const DisplayValue = styled.div`
  color: #000000;
  font-size: 64px;
  padding: 0 48px;
`

class Display extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <StyledDisplay>
        <DisplayValue>
          {this.props.value.previous}{' '}
          {this.props.value.operator}
        </DisplayValue>
        <DisplayValue>
          {this.props.value.current}
        </DisplayValue>
      </StyledDisplay>
    )
  }
}

// Display.propTypes = {
//   displayValue: PropTypes.string,
// }

export default Display
