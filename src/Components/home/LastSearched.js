import React from 'react'

const LastSearched = ({ lastSearch }) => {
  return (
    <div className='card' style={{width: "28rem", height: '30rem'}}>
          <img src={lastSearch} class="card-img-top" alt="last searched video"/>
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Description of last searched exercise card will display here.</p>
              <a href="/" class="btn btn-primary">See Exercise</a>
      </div>
    </div>
  )
}

export default LastSearched