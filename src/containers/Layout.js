import React from "react";
import Navigation from "../components/Navigation";
import Articles from "../components/Articles";
import SideBar from "../components/SideBar";

import './Layout.css';

class Layout extends React.Component {
  render() {
    return <div className="main-container">
        <Navigation />
        <Articles />
        <SideBar />
    </div>;
  }
}

export default Layout;
