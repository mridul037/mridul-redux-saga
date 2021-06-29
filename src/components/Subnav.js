import React, { useEffect, useState } from "react";
import { makeStyles, fade } from "@material-ui/core/styles";
import Navbutton from "../elements/Navbutton";
import Card from "./Card";
import code from '../assets/code.png';
import book from "../assets/book2.png";
import circle from '../assets/circle.png';
import play from '../assets/play.png';
import pr from '../assets/pr.png';
import settings from '../assets/settings.png';
import project from '../assets/project.png';
import view from '../assets/view.png';
import fork from '../assets/fork.png';
import star from '../assets/star.png';

const useStyles = makeStyles((theme) => ({
  nav: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

  },
  headerText: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  buttonSpacer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    margin: "20px 20px",
    minWidth: "300px",
  },
  img: {
    width: "22px",
    height: "20px",
    margin: "auto 12px 16px",
  },
  title: {
    fontSize: "20px",
    fontWeight: "400",
    color: "#0366d6",
  },
  content:{
     fontWeight:400,
     fontSize:'18px',
     '&:hover':{
      fontWeight:600,
      cursor:'pointer',
      borderBottomColor: '#f9826c',
   borderBottom:'1px'
     }
  },
  icon:{
     width:'16px',
     height:"16px",
     marginRight: '6px',
  },
  cont:{
    display:'flex',
    alignItems: 'center'
  },
  list: {
    display: "flex",
  },
  listElement: {
    display: "flex",
    fontSize: "14px",
    lineHeight: "30px",
    padding: '8px 16px',
    textAlign:'center'
  },
}));

function Subnav() {
  const classes = useStyles();
  const data = [
    {icon:code,text:"Code"},
    {icon:circle,text:"Issue"},
    {icon:pr,text:"Pull Request"},
    {icon:play,text:"Actions"},
    {icon:project,text:"Project"},
    {icon:settings,text:"Settings"},
  ];

  return (
    <div style={{borderBottom:'ridge'}}>
      <div className={classes.nav}>
        <div className={classes.headerText}>
          <img className={classes.img} src={book} alt="" />{" "}
          <h1 className={classes.title}>
            <span>facebook</span> / <strong>create-react-app</strong>
          </h1>
        </div>
        <div>
          <div className={classes.buttonSpacer}>
            <Navbutton icon={view} text="Watch" />
            <Navbutton icon={star} text="Unstar" />
            <Navbutton icon={fork} text="Fork"/>
          </div>
        </div>
      </div>
      <nav>
        <ul className={classes.list}>
          {data.map((val) => {
            return (
              <li className={classes.listElement}>
                <a href className={classes.cont}>
                  <img className={classes.icon} src={val.icon} alt="" />
                 <span class={classes.content}>{val.text}</span>
                 <span classes={classes.under}></span>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}

export default Subnav;
