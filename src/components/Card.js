import React, { useEffect } from "react";
import { makeStyles, fade } from "@material-ui/core/styles";
import circle from '../assets/circle.png';
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  item:{
    display:'flex',
    alignItems:'center',
    padding:' 3px',
    borderBottom:'.1px ridge',
   
  },
  paper:{
   display:'flex',
   flexDirection:'column',
   justifyContent:'start',
   marginBottom:"10px"
  },
  icon:{
    marginRight:"10px",
    width:'10px',height:'10px',
  },text:{
    fontWeight:600,
    fontSize:'18px',
    maxWidth:'830px',
    wordBreak:'break-all',
    marginBottom:'0px'
  },subtext:{
    fontSize:'12px',
    color:'#586069',
    textAlign:'left',
    margin:'0px'
  }

}));

function Card({title,id,status}) {
  const classes = useStyles();
    return (
      <div className="">
        <Paper elevation={1} style={{borderBottom:''}} >
          <div className={classes.item}>
          <div   style={{padding:'16px'}}>
          <img className={classes.icon} src={circle} alt=""/>
          </div>
          <div  className={classes.paper}>
          {title && <p className={classes.text}>{title}</p>}
          {id && <p className={classes.subtext}>#{id } {status} on June ,2020 by Mridul Shukla  </p>}
          </div>
          </div>
         
        </Paper>
        
      </div>
    );
  }
  
  export default Card;
  