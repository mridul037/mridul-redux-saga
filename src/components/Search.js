import React, { useEffect } from "react";
import { makeStyles, fade } from "@material-ui/core/styles";
import Label from "../elements/Label";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
const useStyles = makeStyles((theme) => ({
  row: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    margin: "30px 2px",
  },
  butt: {
    backgroundColor: "green",
    color: "white",
    textTransform: "capitalize",
    padding: "0px 40px",
    fontSize: "14px",
    margin: "0px 30px",
    height: "44px",
  },
  input: {
    width: "300px",
  },
  select: {
    width: "100px",
    textAlign: "center",
  },
  label: {
    width: "100px",
  },
  contain: {
    display: "flex",
  },
}));

function Search() {
  const classes = useStyles();

  return (
    <div className={classes.row}>
      <Paper style={{ marginLeft: "30px" }}>
        <FormControl className={classes.select}>
          <InputLabel
            className={classes.label}
            id="demo-customized-select-label"
          >
            Filters
          </InputLabel>
          <Select
            labelId="demo-customized-select-label"
            id="demo-customized-select"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>OPTION 1</MenuItem>
            <MenuItem value={20}>OPTION 2</MenuItem>
            <MenuItem value={30}>OPTION 3</MenuItem>
          </Select>
        </FormControl>
        <IconButton
          type="submit"
          className={classes.iconButton}
          aria-label="search"
        >
          <SearchIcon />
        </IconButton>
        <InputBase
          className={classes.input}
          placeholder="is: issue is:open"
          inputProps={{ "aria-label": "is: issue is:open" }}
        />
      </Paper>
      <div className={classes.contain}>
        <Label />
        <Button variant="contained" className={classes.butt}>
          New issue
        </Button>
      </div>
    </div>
  );
}

export default Search;
