import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import price from "../assets/price.png";
const useStyles = makeStyles((theme) => ({
  header: {
    margin: "4px 10px",
  },
  lbutton: {
    backgroundColor: "white",
    color: "#586069",
    width: "200px",
  },
  rbutton: {
    backgroundColor: "white",
    width: "200px",
    color: "#586069",
  },
  text: {
    fontWeight: 600,
  }
}));

function Label() {
  const classes = useStyles();

  return (
    <div className={classes.header}>
      <ButtonGroup
        style={{ height: "40px" }}
        variant="contained"
        color="primary"
        aria-label="split button"
      >
        <Button className={classes.lbutton}>
          <img style={{ width: "16px", margin: "10px" }} src={price} alt="" />
          <p className={classes.text}>Labels</p>{" "}
        </Button>

        <Button className={classes.rbutton}>
          <img style={{ width: "16px", margin: "10px" }} src={price} alt="" />
          <p className={classes.text}>Milestones</p>
        </Button>
      </ButtonGroup>
    </div>
  );
}

export default Label;
