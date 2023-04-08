import React from 'react'

const Alert = (props) => {
  return (
    props.error !== null && (
        <div className="container">
            <div className={`alert alert-${props.error.type}`}>
                { props.error.msg }
            </div>
        </div>
    )
  )
}

export default Alert