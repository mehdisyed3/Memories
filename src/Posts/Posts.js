import React from 'react'
import PostItem from '../PostItem/PostItem'
import useStyles from'./styles'
import {useSelector} from 'react-redux'

function Posts() {
  const posts =  useSelector(state => state.posts)
  const classes = useStyles()
  return (
    <div className="posts">
      POSTs
      <PostItem />
    </div>
  )
}

export default Posts
