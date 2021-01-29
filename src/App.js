import React from 'react'
import './App.css';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core'
import Posts from './Posts/Posts';

function App() {
  return (
    <div className="app">
      <Container maxWidth='lg'>
        <AppBar position='static' color='inherit'>
          <Typography variant='h2' align='center' >
            Memories
          </Typography>
          <img src='https://raw.githubusercontent.com/adrianhajdin/project_mern_memories/master/client/src/images/memories.png?token=AF56X74XONEUGZ4FD2FUIA27UURPI' alt='' height='60' />
        </AppBar>
        <Grow in>
          <Container>
            <Grid container justify='space-between' alignItems='stretch' spacing={3}>
              <Grid item xs={12} sm={7}>
                <Posts />
              </Grid>
              <Grid item xs={12} sm={4}>
                
              </Grid>
            </Grid>
          </Container>

        </Grow>
      </Container>
    </div>
  );
}

export default App;
