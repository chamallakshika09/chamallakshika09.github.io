import React from 'react';
import { Grid, Card, CardContent, Typography, CardActions, Button } from '@mui/material';
import { HeaderLayout } from 'layouts';
import { publicationData } from 'data';

export const Publications = () => {
  return (
    <HeaderLayout>
      <Grid container spacing={2} justifyContent="center" sx={{ p: 4 }}>
        {publicationData.map((article) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={article.id}>
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                ':hover': { transform: 'scale(1.05)', transition: '0.3s' },
              }}
            >
              {/* {article.imageUrl && (
                  <CardMedia
                    component="img"
                    image={article.imageUrl}
                    alt={article.title}
                    sx={{ height: 140, width: 'auto' }}
                  />
                )} */}
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {article.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" textAlign="justify">
                  {article.summary}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" onClick={() => window.open(article.readMoreUrl)}>
                  Read More
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </HeaderLayout>
  );
};
