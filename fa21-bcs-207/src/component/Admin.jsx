
import HeaderAdmin from "./HeaderAdmin";
import SidebarMenu from "./SidebarMenu";
import Signup from "./Signup";


function Admin() {
  return (
    <div className="container-fluid">
      <div
        className="row"
        style={{ border: "3px solid green", height: "20vh" }}
      >
        <HeaderAdmin/>
      </div>
      <div className="row" style={{ border: "3px solid red", height: "80vh" }}>
        <div
          className="col-md-3"
          style={{ border: "3px solid red", height: "100%" }}
        >
          <SidebarMenu/>
        </div>
        <div
          className="col-md-9"
          style={{ border: "3px solid blue", height: "100%" }}
        >
          <Signup/>
        </div>
      </div>
    </div>
  );
}

export default Admin;
