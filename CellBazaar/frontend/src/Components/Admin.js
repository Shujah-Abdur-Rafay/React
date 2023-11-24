
import React, { useContext } from "react";
import Admnu from "./Admnu";
import Add from "./Add";
import Delete from "./Delete";
import Update from "./Update";
import View from "./View";
import { type } from "../App";

function Admin() {
  const adminType = useContext(type);

  const getViewComponent = () => {
    switch (adminType) {
      case "add":
        return <Add/>;
      case "view":
        return <View />;
      case "update":
        return <Update />;
      case "delete":
        return <Delete/>;
    }
  }

  return (
    <div className="container-fluid">
      <div className="row align-items-end">
        <Admnu />
      </div>
      <div style={{marginTop:'1em'}}  className="row align-items-end">
        {getViewComponent()}
      </div>
    </div>
  );
}

export default Admin;
