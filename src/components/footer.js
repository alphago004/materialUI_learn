import React from "react";
import useStyles from "../styles";
import {Typography,} from "@material-ui/core";


const Footer = () => {
const classes = useStyles();
return (

<footer className={classes.footer}>
<Typography
  variant="h4"
  align="center"
  gutterBottom
  className={classes.footNote}
>
  Footer
</Typography>
<Typography  style={{marginBottom:19}} variant="subtitle1" align="center" color="textSecondary">
  This is a footer. Need to add the pages links, and many more to do.
</Typography>
</footer>
    );
}

export default Footer;