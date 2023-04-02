//This is one React component

import React, {useState} from "react";
import {
  Typography,
  AppBar,
  Toolbar,
  Paper,
} from "@material-ui/core";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import Button from "@mui/material/Button";
import useStyles from "./styles";
import PhotoCard from "./components/photographCard";
import Footer from "./components/footer";
import SmallPics from "./components/smallPhotos";
import {ThemeProvider, createTheme} from "@mui/material/styles";
import Toggler from "./components/toggler";
import { light } from "@material-ui/core/styles/createPalette";

const App = () => {
  const classes = useStyles();
  const [darkMode, setDarkMode] = useState(false);
  const theme = createTheme({
    palette: {
      type: darkMode? "dark": "light",
    }
  });
  return (
    <ThemeProvider>
     <Paper>
      <AppBar position="relative" style={{}}>
        <Toolbar style={{marginBottom: 5}}>
          <PhotoCamera className={classes.icon} />
          <Typography variant="h6" color="inherit" noWrap>
            Photo Album
          </Typography>
        </Toolbar>
      </AppBar>
      <main>

      <Toggler check = {darkMode} change={()=> setDarkMode(!darkMode)}/> 
        <PhotoCard/>
        <div style={{marginLeft: 165}}>
          <Button
            style={{ marginLeft: 10, backgroundColor: "purple" }}
            variant="contained"
            size="medium"
            gutterBottom
          >
            Small
          </Button>
          <Button style={{ marginLeft: 10 }} variant="contained" size="medium">
            Medium
          </Button>
          <Button
            style={{ marginLeft: 10, backgroundColor: "brown" }}
            color="error"
            variant="contained"
            size="medium"
          >
            Large
          </Button>
        </div>

        <SmallPics />
      </main>
      <Footer />
      </Paper>
      </ThemeProvider>
  );
  
};

export default App;

