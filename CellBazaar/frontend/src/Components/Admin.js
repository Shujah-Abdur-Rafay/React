import React, { useContext } from "react";
import Admnu from "./Admnu";
import Add from "./Add";
import Delete from "./Delete";
import Update from "./Update";
import View from "./View";
import { type } from "../App";
import Menubar from "./Navbr";

function Admin() {
  const adminType = useContext(type);

  const getViewComponent = () => {
    switch (adminType) {
      case "add":
        return <Add />;
      case "view":
        return <View />;
      case "update":
        return <Update />;
      case "delete":
        return <Delete />;
      default:
        return null;
    }
  }

  return (
    <div className="container-fluid">
      <Menubar/>
      <div className="row">
        <div className="col-md-3 d-flex flex-column">
          <Admnu />
        </div>
        <div className="col-md-9" style={{ marginTop: '6em',marginLeft:'-2rem' }}>
          {getViewComponent()}
        </div>
      </div>
    </div>
  );
}

export default Admin;
