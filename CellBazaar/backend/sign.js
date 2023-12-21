
import mongoose from 'mongoose';

const SignUpSchema = new mongoose.Schema({
  username: String, 
  password: String,
  phoneNo: String,
});

const SignUpModel = mongoose.model('SignUpModel', SignUpSchema);

export default SignUpModel;
