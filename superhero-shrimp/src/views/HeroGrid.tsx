/* eslint-disable react/destructuring-assignment */
import * as React from 'react';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import { Hero, HeroListProps } from '../interfaces/hero';
import HeroCard from '../components/HeroCard';

export default function HeroGrid(props: HeroListProps) {
  const { data } = props;

  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      rowSpacing={3}
    >
      {data ? data.map((hero: Hero) => (
        <Grid item xs={4}>
          <HeroCard data={hero} />
        </Grid>
      )) : (
        <Typography variant="h3">
          No heros to display. :(
        </Typography>
      )}
    </Grid>
  );
}
