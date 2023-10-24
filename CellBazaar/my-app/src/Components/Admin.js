import Admnu from "./Admnu";
import Add from "./Add";
import Delete from "./Delete";
import Update from "./Update";
import View from "./View";
import { useContext } from "react";
import {type} from "../App";


function Admin() {

  const typ=useContext(type);
  return (
    <div>
<div className="container-fluid" style={{border: "3px", height: "100vh" }}>


<div className="row align-items-end" style={{ border: "3px", height: "25vh" }}>
  <Admnu />
</div>




{/* Starting tag */}
<div className="row align-items-end" style={{ borderTop: "6px solid black ", height: "75vh" }}>

{typ==="add" &&<Add/>}
{typ==="view" &&<View/>}
{typ==="update" &&<Update/>}
{typ==="delete" &&<Delete/>}



</div>
{/* Ending tag */}



</div>
    </div>
  );
}

export default Admin;
