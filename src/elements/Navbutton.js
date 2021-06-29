import React, { useEffect, useState } from "react";
import { makeStyles, fade } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { connect } from "react-redux";


const useStyles = makeStyles((theme) => ({
  header: {
    margin: "4px 10px",
  },
  lbutton: {
    backgroundColor: "white",
    color: "#586069",
  },
  rbutton: {
    backgroundColor: "white",
    color: "#586069",
  },
}));

function Navbutton({ icon, text, ...props }) {
  const classes = useStyles();

  useEffect(() => {
    console.log(props.state);
  }, [props.state]);

  const showCount = () => {
    switch (text) {
      case "Watch":
        return props.watchCount;
      case "Unstar":
        return props.starCount;
      case "Fork":
        return props.forkCount;
      default:
        return 0;
    }
  };
  const handleClick = () => {
    switch (text) {
      case "Watch":
        props.watchIncrement();
        break;
      case "Unstar":
        props.starIncrement();
        break;
      case "Fork":
        props.forkIncrement();
        break;
      default:
        return 0;
    }
  };
  return (
    <div className={classes.header}>
      <ButtonGroup
        style={{ height: "40px" }}
        variant="contained"
        color="primary"
        aria-label="split button"
      >
        <Button className={classes.lbutton} onClick={() => handleClick()}>
          <img src={icon} style={{ width: "20px", height: "20px" }} alt="" />
          <p>{text}</p>
        </Button>
        <Button className={classes.rbutton}>{showCount()}</Button>
      </ButtonGroup>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    state: state,
    watchCount: state.counterReducer.watchCount,
    starCount: state.counterReducer.starCount,
    forkCount: state.counterReducer.forkCount,
  };
};

const mapDispatchToProps = (dispatch) => ({
  watchIncrement: () => dispatch({ type: "INCREMENT_WATCH_COUNTER" }),

  starIncrement: () => dispatch({ type: "INCREMENT_STAR_COUNTER" }),

  forkIncrement: () => dispatch({ type: "INCREMENT_FORK_COUNTER" }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbutton);
