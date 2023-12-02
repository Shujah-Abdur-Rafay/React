// import mongoose from "mongoose";
// {
// const url ="mongodb+srv://shujah:sar123@cluster0.edpwzne.mongodb.net/?retryWrites=true&w=majority"

// mongoose.connect(url)
// .then(() => console.log("connected to db"))
// .catch(() => console.log("NOT connected")) ;

// }
import express from 'express';
import mongoose from 'mongoose';




const app = express();
const port = 5000;

app.use(bodyParser.json({extends:true}));

// Connect to MongoDB
mongoose.connect('mongodb+srv://shujah:sar123@cluster0.edpwzne.mongodb.net/test').then(()=>console.log("connected"));

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Define a schema and model for your messages
const messageSchema = new mongoose.Schema({
  message: String,
});

const Message = mongoose.model('Message', messageSchema);

// Your existing GET route
app.get('/', (req, res) => {
  res.send('Hello from the server!');
});

// New POST route to receive and store data
app.post('/api/sendMessage', async (req, res) => {
  const { message } = req.body;

  // Save message to the database
  try {
    const newMessage = new Message({ message });
    await newMessage.save();
    console.log('Message saved to MongoDB:', message);
    res.status(200).json({ status: 'Message received and saved successfully' });
  } catch (error) {
    console.error('Error saving message to MongoDB:', error.message);
    res.status(500).json({ status: 'Error saving message to MongoDB' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
