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
        <DisplayValue>{this.props.value}</DisplayValue>
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
