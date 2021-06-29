import React from "react";
import { makeStyles, fade } from "@material-ui/core/styles";

import git from "../assets/github.svg";
import Card from "./Card";
const useStyles = makeStyles((theme) => ({
  head: {
    width: "100%",
    background: "#24292e",
    height: "60px",
  },
  nav: {
    width: "100%",
    background: "#eee",
    height: "20px",
    lineHeight: "18px",
    color: "#000",
  },
  text: {
    display: "block",
    height: "65px",
    width: "570px",
    textAlign: "center",
    cursor: "pointer",
    margin: "auto",
    fontSize: "64px",
    fontFamily: '"Merriweather", serif',
  },
  card: {
    width: "500px",
    height: "340px",

    float: "left",
    margin: "30px",
  },
  button: {
    position: "absolute",
    float: "right",
    right: "10%",
    margin: "20px",
    backgroundColor: "green",
    color: "white",
    borderRadius: "30px",
    cursor: "pointer",
    padding: "10px 2px",
  },
}));

function Header() {
  const classes = useStyles();

  return (
    <div className="Header">
      <div className={classes.head}>
        <img
          style={{ height: "60px", width: "60px", background: "white" }}
          src={git}
          alt="imh"
        />
      </div>
    </div>
  );
}

export default Header;
