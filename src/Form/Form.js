import React, { useState } from 'react'
import {TextField, Button, Typography, Paper} from '@material-ui/core'

import useStyles from'./styles'

const handleSubmit = (e) => {
  e.preventDefault()
  console.log(e)
}


function Form() {
  const [postData, setPostData] = useState({
    creator:'', title:'', message:'', tags: '', selectedFile:''
  })
  const classes = useStyles()
  return (
    <div className="form">
      <Paper className={classes.paper}>
        <form autoComplete='off' noValidate className={classes.form} onSubmit={handleSubmit} >
        <Typography variant='h6'>
          Creating a Memory
        </Typography>
        <TextField name="creator" variant='outlined' label = 'Creator' fullWidth value={postData.creator} onChange={console.log('')}/>
        </form>
      </Paper>
    </div>
  )
}

export default Form
