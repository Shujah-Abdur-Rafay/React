import SidebarMenu from "./SidebarMenu";
import Order from "./Order";



function Admin() {
  return (
    <div className="container-fluid">
      <div
        className="row"
        style={{ border: "3px ", height: "20vh" }}
      >
        {/* <HeaderAdmin/> */}
      </div>
      <div className="row" style={{ border: "3px ", height: "80vh" }}>
        <div
          className="col-md-3"
          style={{ border: "3px ", height: "100%" }}
        >
          <SidebarMenu/>
        </div>
        <div
          className="col-md-9"
          style={{ border: "3px ", height: "100%" }}
        >
          <Order/>
        </div>
      </div>
    </div>
  );
}

export default Admin;
