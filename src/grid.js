import * as React from 'react';
import Box from '@mui/system/Box';
import Grid from '@mui/system/Unstable_Grid';
import BasicCard from './colorcard';

export default function FullWidthGrid({ colors, answers, colorSequenceMatch }) {
  return (
    <Box sx={{ flexGrow: 1 }} marginLeft={30} marginRight={30}>
      <Grid container spacing={2}>
        {answers.map((color, index) => (
          <Grid item xs={4} key={index}>
            <BasicCard color={color} resetColor={!colorSequenceMatch} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
