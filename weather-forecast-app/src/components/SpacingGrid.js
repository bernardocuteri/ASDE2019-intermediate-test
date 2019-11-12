import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

export default function SpacingGrid(props) {
  console.log(props);
  const [spacing] = React.useState(2);
  const classes = useStyles();

  if( props.temperatures === undefined|| props.weathers === undefined) {
      return(
          <div></div>
      )
  } else {

      return (
        <Grid container className={classes.root} spacing={2}>
          <Grid item xs={12}>
            <Grid container justify="center" spacing={spacing} className="slotSquare">
            {props.weathers.map(value => (
                <Grid item>
                    <Paper className="paperImage">{value}</Paper>
                </Grid>
             ))}
            </Grid>
          </Grid>
        </Grid>
      );

  }
}
// <Paper>{props.slotNumbers[value]}</Paper>
// <Paper><img alt="" src={require('../resources/' + icons[props.slotNumbers[value]] + '_icon.png')}}/></Paper>
/*
{[0, 1, 2].map(value => (
    <Grid key={value} item>
      <Paper className="paperImage"><img className="slotImage" alt="" src={require('../resources/' + icons[props.slotNumbers[value]] + '_icon.png')}/></Paper>
    </Grid>
  ))}*/