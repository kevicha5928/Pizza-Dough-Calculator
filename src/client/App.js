import React, { Component, Fragment } from "react";
import { Header, LeftPane, RightPane } from "./components";
import { Grid } from "@material-ui/core";
import "./app.css";

export default class App extends Component {
  state = {
    ballSize: 150,
    servings: 4
  };
  handleChangeUpdate = name => event => {
    const {
      target: { value }
    } = event;
    this.setState({ [name]: value });
  };
  handleSliderChange = name => (e, value) => {
    this.setState({ [name]: value });
  };
  render() {
    const { ballSize, servings } = this.state;
    return (
      <Fragment>
        <Header />
        <Grid container spacing={2}>
          <Grid item sm>
            <LeftPane
              onUpdate={this.handleChangeUpdate}
              onSliderChange={this.handleSliderChange}
              ballSize={ballSize}
              servings={servings}
            />
          </Grid>
          <Grid item sm>
            <RightPane ballSize={ballSize} servings={servings} />
          </Grid>
        </Grid>
      </Fragment>
    );
  }
}
