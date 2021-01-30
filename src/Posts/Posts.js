import React from 'react'
import PostItem from '../PostItem/PostItem'
import useStyles from'./styles'

function Posts() {
  const classes = useStyles()
  return (
    <div className="posts">
      POSTs
      <PostItem />
    </div>
  )
}

export default Posts
