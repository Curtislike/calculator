import React from 'react'
import propTypes from 'prop-types'

import { StyledDisplay, DisplayValue } from './components'

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
//   value: PropTypes.shape({
//     previous: PropTypes.string,
//     operator: PropTypes.string,
//     current: PropTypes.string,
//   }),
// }

export default Display
