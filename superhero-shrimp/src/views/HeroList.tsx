/* eslint-disable react/destructuring-assignment */
import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { HeroListProps } from '../interfaces/hero';

export default function HeroList(props: HeroListProps) {
  const { data } = props;

  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {data ? data.map((hero) => (
        <ListItem>
          <ListItemText primary={`${hero.id}: ${hero.name}`} secondary={hero.biography['full-name']} />
        </ListItem>
      )) : (
        <ListItem>
          <ListItemText primary="No heros to display" secondary="Sorry. :(" />
        </ListItem>
      )}
    </List>
  );
}
