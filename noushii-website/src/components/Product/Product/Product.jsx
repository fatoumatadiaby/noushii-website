import React from 'react'
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
} from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";

const Product = () => {
    return (
      <div>
        <Card className={classes.root}>
          <CardMedia
            className={classes.media}
            image={product.media.source}
            title={product.name}
          />
          <CardContent>
            <div className={classes.cardContent}>
              <Typography gutterBottom variant="h5" component="h2">
                {product.name}
              </Typography>
              <Typography gutterBottom variant="h5" component="h2">
                ${product.price.formatted}
             
            />
          </CardContent>
        </Card>
      </div>
    );
}

export default Product
