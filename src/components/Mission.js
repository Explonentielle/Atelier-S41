import React from 'react'

const Mission = ({ title, content }) => {
  return (
    <div className='mission'>
        <hr />
        <h3>{title}</h3>
        <p>{content}</p>
    </div>
  )
}

export default Mission