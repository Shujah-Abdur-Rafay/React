import mongoose from "mongoose";

const LogSchema = new mongoose.Schema({



  email: String,
  password: String,
  


  
});

const LogSchemaModel = mongoose.model("LogModel", LogSchemaModel);

export default LogSchemaModel;


