import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { HeroProps } from '../interfaces/hero';

export default function MediaCard(hero: HeroProps) {
  const { data } = hero;

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={data.image.url}
        alt={data.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {data.name}
        </Typography>
      </CardContent>
    </Card>
  );
}
