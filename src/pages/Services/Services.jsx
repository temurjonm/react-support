import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Button } from "@material-ui/core";
import "./Services.css";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: theme.spacing(26),
      height: theme.spacing(16),
      
      
    },
  },
}));

export default function SimplePaper() {
  const classes = useStyles();

  return (
      <div className="services">
            <div className={classes.root}>
            <Paper elevation={3}>
            <p>I want to volunteer</p>
            <Button
                    className="sumbit-button"
                    type="submit"
                    variant="contained"
                    color="primary"
                    >
                    Go
                    </Button>
            </Paper>
            <Paper elevation={2}>
            <p>I Need Help</p>
            <Button
                    className="sumbit-button"
                    type="submit"
                    variant="contained"
                    color="primary"
                    >
                    Go
                    </Button>
            </Paper>
            </div>
     </div>
  );
}
