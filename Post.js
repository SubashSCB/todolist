import React from 'react'
import data from './Country .json'

function Post() {
  return (
    <div>
      <div className='do'>
       {data.map(post => {
            return(
                <>
                <h1>{post.first_name}</h1>
                </>
                
            )
        })
      }

      </div>
    </div>
  )
}

export default Post
