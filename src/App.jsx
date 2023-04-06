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
import Toggler from "./components/toggler";
import DataTable from "./components/table";

const App = () => {
  const classes = useStyles();
  return (
    <>
      <AppBar position="relative" style={{}}>
        <Toolbar style={{marginBottom: 5}}>
          <PhotoCamera className={classes.icon} />
          <Typography variant="h6" color="inherit" noWrap>
            Photo Album
          </Typography>
        </Toolbar>
      </AppBar>
      <main>

      <Toggler />
        <PhotoCard/>
        <DataTable />
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
      </>
  );
  
};

export default App;

