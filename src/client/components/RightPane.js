import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { Paper, Typography } from "@material-ui/core";
import "./components.css";

function RightPane({ ballSize, servings }) {
  // console.log(exercise);
  //   recipe ={
  //       breadFlour: .5983,
  //       water: .383,
  //       salt: .0135,
  //       yeast: .0052
  //   }
  var gross = ballSize * servings;
  var bread = [
    {
      id: "flour",
      desc: "Bread Flour",
      units: "g",
      value: (0.5983 * gross).toFixed(1)
    },
    {
      id: "water",
      desc: "Water",
      units: "mL",
      value: (0.383 * gross).toFixed(1)
    },
    {
      id: "salt",
      desc: "Salt",
      units: "g",
      value: (0.0135 * gross).toFixed(1)
    },
    {
      id: "yeast",
      desc: "Yeast",
      units: "g",
      value: (0.0052 * gross).toFixed(1)
    }
  ];
  return (
    <Fragment>
      <Paper className="Paper">
        {bread.map(({ id, desc, units, value }) => (
          <Paper className="inputPaper" key={id}>
            <Typography variant="h5">
              {desc}: {value} {units}
            </Typography>
          </Paper>
        ))}
      </Paper>
    </Fragment>
  );
}

export default RightPane;
