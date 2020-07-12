import React from 'react';
import {
  Container, Grid, TextField, Typography,
} from '@material-ui/core';

function App() {
  return (
    <Container>
      <Grid alignContent="center" container direction="column">
        <Grid item>
          <Typography variant="h1">Virtual Keyboard</Typography>
        </Grid>
        <Grid item>
          <TextField fullWidth variant="outlined" />
        </Grid>
        <Grid item>
          Keyboard
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
