//This is one React component
import React from "react";
import useStyles from "../styles";
import {
  Typography,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Container,
} from "@material-ui/core";
import Button from "@mui/material/Button";

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const SmallPics = () => {
const classes = useStyles();
  return (
    <Container
      style={{ marginTop: 20, alignContent: "center" }}
      className={classes.cardGrid}
      maxWidth="md"
    >
      <Grid container spacing={4}>
        {cards.map((card) => (
          <Grid item key={card} xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.cardMedia}
                height="140"
                image="https://source.unsplash.com/random"
                title="Image Title"
              />
              <CardContent className={classes.cardContent}>
                <Typography gutterBottom variant="h5">
                  Heading
                </Typography>
                <Typography>
                  This is a media card. We can use this section to descrbe the
                  content of the card.
                </Typography>
              </CardContent>

              <CardActions>
                <Button size="small" color="primary">
                  {" "}
                  View{" "}
                </Button>
                <Button size="small color" color="primary">
                  {" "}
                  Edit{" "}
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default SmallPics;
