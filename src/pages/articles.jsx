import React from 'react';
import { Grid, Card, CardActionArea, CardMedia, CardContent, Typography } from '@mui/material';
import { HeaderLayout } from 'layouts';
import { articleData } from 'data';

export const Articles = () => {
  return (
    <HeaderLayout>
      <Grid container spacing={2} sx={{ padding: '1rem' }}>
        {articleData.map((article) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={article.id}>
            <Card>
              <CardActionArea onClick={() => window.open(article.readMoreUrl)}>
                <CardMedia
                  component="img"
                  image={article.imageUrl}
                  alt={article.title}
                  sx={{ height: 140, width: 'auto' }}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {article.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" textAlign="justify">
                    {article.summary}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </HeaderLayout>
  );
};
