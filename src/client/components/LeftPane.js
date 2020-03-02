import React, { Fragment, Component } from "react";
import PropTypes from "prop-types";
import { Paper, Typography, withStyles, Slider } from "@material-ui/core";
import "./components.css";

const styles = {
  select: {
    minWidth: 120
  },
  inputCard: {
    display: "flex",
    flexDirection: "column",
    padding: 20,
    marginBottom: 10,
    alignItems: "flex-start"
  },
  slider: {
    marginTop: 30
  }
};

class LeftPane extends Component {
  render() {
    const { servings, ballSize, onUpdate, onSliderChange } = this.props;
    const { classes } = this.props;
    return (
      <Fragment>
        <Paper className="Paper leftpane">
          <Paper className={classes.inputCard}>
            <Typography variant="h5" className="label">
              Doughball Size: {ballSize}
            </Typography>
            <Slider
              defaultValue={150}
              // getAriaValueText={valuetext}
              onChange={onSliderChange("ballSize")}
              aria-labelledby="discrete-slider"
              valueLabelDisplay="auto"
              step={10}
              marks
              min={100}
              max={200}
              className={classes.slider}
            />
          </Paper>
          <Paper className={classes.inputCard}>
            <Typography variant="h5" className="label">
              Number of Servings: {servings}
            </Typography>
            <Slider
              defaultValue={4}
              // getAriaValueText={valuetext}
              onChange={onSliderChange("servings")}
              aria-labelledby="discrete-slider"
              valueLabelDisplay="auto"
              step={1}
              marks
              min={1}
              max={10}
              className={classes.slider}
            />
          </Paper>
        </Paper>
      </Fragment>
    );
  }
}

export default withStyles(styles)(LeftPane);
