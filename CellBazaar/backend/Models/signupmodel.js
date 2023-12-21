import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const SignUpSchema = new mongoose.Schema({
  username: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  phoneNo: { type: String, required: true },
});

SignUpSchema.pre('save', async function (next) {
  const user = this;

  if (!user.isModified('password')) return next();

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(user.password, salt);
  user.password = hash;
  next();
});

SignUpSchema.methods.comparePassword = async function (candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password);
};

const SignUpModel = mongoose.model('SignUpModel', SignUpSchema);

export default SignUpModel;
