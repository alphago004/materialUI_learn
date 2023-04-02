import { Switch, Toolbar, Typography } from "@material-ui/core";
import useStyles from "../styles";
export default function Toggler ({change, check}) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Toggler>
                <Toolbar>
                    <Typography variant="h5" className={classes.switch}>
                        Switch
                    </Typography>
                    <Switch defaultChecked
                    color="default"
                    inputProps={{'arial-label': 'checkbox with default color'}}
                    onChange={change}
                    checked={check}/>
                </Toolbar>
            </Toggler>
        </div>
    );
}