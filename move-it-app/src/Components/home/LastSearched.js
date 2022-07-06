import React from 'react'

const LastSearched = ({ lastSearch }) => {
  return (
    <div className='carousel last-searched card'>
        <img src='' alt='last searched card'/>

        <p>Show results for <strong>{lastSearch}</strong></p>
    </div>
  )
}

export default LastSearched