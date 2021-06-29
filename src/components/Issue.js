import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { issueDataRequest } from "../store/action/issueDataAction";
import down from "../assets/down.png";
import InfiniteLoading from 'react-simple-infinite-loading'
import Card from "./Card";
import CircularProgress from "@material-ui/core/CircularProgress";
const useStyles = makeStyles((theme) => ({
  container: {
    minWidth: "544px",
  },
  list: {
    display: "flex",
    marginBottom: "0px",
    cursor:'pointer',
  },
  cont: {
    display: "flex",
    alignItems: "center",
    color: "#586069",
  },
  listElement: {
    display: "flex",
    fontSize: "16px",
    lineHeight: "30px",
    padding: "8px 16px",
    textAlign: "center",
    marginRight: "30px",
  },
  img: {
    width: "12px",
    height: "18px",
    margin: "auto 2px",
  },
  header: {
    borderLeftWidth: "1px",
    borderRightWidth: "1px",
    backgroundColor: "#f6f8fa",
  },
}));

function Issue(props) {

  const data_list = ["Author", "Label", "Project", "Settings"];

  useEffect(() => {
    props.issueSummary();
  }, []);

  const classes = useStyles();
  if (props.loading) {
    return <CircularProgress />;
  }

  return (
    <div className="">
      {!props.loading && (
        <Container className={classes.container}>
          <Paper className={classes.header} elevation={0}>
            <ul className={classes.list}>
              {data_list.map((val) => {
                return (
                  <li className={classes.listElement}>
                    <a href className={classes.cont}>
                      <span class={classes.content}>{val}</span>
                      <img className={classes.img} src={down} alt="" />
                    </a>
                  </li>
                );
              })}
            </ul>
          </Paper>

          <div>
         
      
            {props.data &&
              props.data.map((val) => {
                return <Card title={val.title} id={val.number} status={val.state} key={val} />;
              })}
       
          </div>
        </Container>
      )}
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    state: state.issueReducer.data,
    dataLoading: state.issueReducer.loading,
    data: state.issueReducer.data,
  };
};
const mapDispatchToProps = (dispatch) => ({
  issueSummary: () => {
    dispatch(issueDataRequest());
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(Issue);
