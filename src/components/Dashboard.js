import React from "react";
import Header from "./Header";
import Subnav  from "./Subnav";
import Issue from './Issue';
import Search from './Search';
function Dashboard() {
    return (
      <div >
        <Header/>
        <Subnav/>
        <Search/>
        <Issue/>
      </div>
    );
  }
  
  export default Dashboard;
  