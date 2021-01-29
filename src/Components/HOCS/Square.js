import React from 'react'
import withStyles from './withStyles'
import withAuth from './withAuth'

const Square = props => {
  return (
    <div {...props} style={{ ...props.style, width: '100px', height: '100px' }}>
      HELLO I AM A SQUARE
    </div>
  )
}
export default withAuth(withStyles(Square))
