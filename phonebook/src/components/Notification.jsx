import React from 'react'

const NotificationStyle = {
  color: 'green',
  fontStyle: 'italic',
  fontSize: 20,
  borderStyle: 'solid',
  borderRadius: 5,
  padding: 10,
  marginBottom: 10
}

const Notification = ({ errorMessage }) => {
  if (errorMessage === null) {
    return null
  } else {
    return (
        <div style={NotificationStyle}>{errorMessage}</div>
    )
  }
}

export default Notification
