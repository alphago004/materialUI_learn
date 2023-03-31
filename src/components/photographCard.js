import React from "react";
import useStyles from "../styles";
import {
  Typography,
  Grid,
  Container,
} from "@material-ui/core";
import Button from "@mui/material/Button";
import { Paper } from '@mui/material';
import { Box } from '@mui/material';


const PhotoCard = () => {
const classes = useStyles();
    return(
<>
<Container
  className={classes.container}
  maxWidth="sm"
  style={{ marginTop: 40 }}
>
  <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
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
    You won't ever be alone, wait for me to come home <br />
    <br />
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


    <Box style={{ marginLeft: 420, marginRight: 20, marginTop: 20, marginBottom: 40, }}
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 128,
          height: 128,
        },
      }}
    >
      <Paper style={{backgroundColor:"#212121"}} elevation={3}>
        <Typography 
        style={{marginTop: 43, color: "white", fontSize: 20}}
        align="center"
        color="textPrimary"
        justifyContent="center"
        > Ed Sheeran</Typography>
        </Paper>

      <Paper style={{backgroundColor:"#263238"}}  elevation={3}>
      <Typography 
        style={{marginTop: 43, color: "white", fontSize: 20}}
        align="center"
        color="textPrimary"
        justifyContent="center"
        > John Denver</Typography>
        </Paper>

      <Paper style={{backgroundColor:"#5d4037"}}  elevation={3} >
      <Typography 
        style={{marginTop: 43, color: "white", fontSize: 20}}
        align="center"
        color="textPrimary"
        justifyContent="center"
        > Willie Nelson</Typography>
        </Paper>
    </Box>
</>


);
}

export default PhotoCard;