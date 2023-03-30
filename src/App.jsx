//This is one React component

import React from "react";
import {
  Typography,
  AppBar,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CssBaseline,
  Grid,
  Toolbar,
  Container,
  makeStyles,
  StylesProvider,
} from "@material-ui/core";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import Button from "@mui/material/Button";
import useStyles from "./styles";
import { style } from "@mui/system";

const cards =  [1,2,3,4,5,6,7,8,9]

const App = () => {
    const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <PhotoCamera className={classes.icon} />
          <Typography variant="h6" color="inherit" noWrap>
            Photo Album
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
          <Container
            className={classes.container}
            maxWidth="sm"
            style={{ marginTop: 40 }}
          >
            <Typography
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Photograph
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              justifyContent="center"
              paragraph
            >
              We keep this love in a photograph <br />
              We made these memories for ourselves <br />
              Where our eyes are never closing <br />
              Hearts are never broken <br />
              And time's forever frozen, still <br />
              So you can keep me Inside the <br />
              pocket of your ripped jeans <br />
              Holding me closer 'til our eyes meet <br />
              You won't ever be alone, wait for me to come home <br/><br/>

              {"\n"}- This is a lyrics from Photograph 
            </Typography>
            <div className={classes.button}>
              <Grid container spacing={2} justifyContent="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    See Full Lyrics
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    Listen to song
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>

          <div>
            <Button
              style={{ marginLeft: 10, backgroundColor: "purple" }}
              variant="contained"
              size="medium"
              gutterBottom
            >
              Small
            </Button>
            <Button
              style={{ marginLeft: 10 }}
              variant="contained"
              size="medium"
            >
              Medium
            </Button>
            <Button
              style={{ marginLeft: 10, backgroundColor: "brown"}}
              color="error"
              variant="contained"
              size="medium"
            >
              Large
            </Button>         
        </div>

        <Container style={{marginTop:20, alignContent:"center",}} className={classes.cardGrid} maxWidth="md">
            <Grid container spacing={4}>
            {cards.map((card) => (
            <Grid item key = {card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                <CardMedia 
                    className={classes.cardMedia}
                    height = "140"
                    image="https://source.unsplash.com/random"
                    title="Image Title"
                />
                <CardContent 
                className={classes.cardContent} >
                    <Typography gutterBottom variant="h5">
                        Heading
                    </Typography>
                    <Typography>
                        This is a media card. We can use this section to descrbe the content of the card.
                    </Typography>
                </CardContent>    

                  <CardActions>
                  <Button size="small" color="primary"> View </Button>
                  <Button size="small color" color="primary"> Edit </Button>  
                  </CardActions>  

                </Card>                                   
            </Grid> ))}
               
            </Grid> 

        </Container>

      </main>

      <footer className={classes.footer}>
         <Typography variant="h4" align="center" gutterBottom className={classes.footNote}>
            Footer
        </Typography>   
        <Typography variant="subtitle1" align="center" color="textSecondary">
        This is a footer. Need to add the pages links, and many more to do. 
        </Typography>    

      </footer>
    </>
  );
};

export default App;
