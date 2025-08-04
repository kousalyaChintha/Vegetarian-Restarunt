// server.js
const express = require("express");
const app = express();
const cors = require('cors');

const mongoose = require("mongoose")
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://kousalyachinta:test@kousalya.wuro3.mongodb.net/restaurantDB', ).then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Define schema
const FormSchema = new mongoose.Schema({
  name: String,
  mno: String,
  mail: String,
  msg: String
});

const FormModel = mongoose.model('Form', FormSchema);

// Route to save form data
app.post('/submit', async (req, res) => {
  try {
    const formData = new FormModel(req.body);
    await formData.save();
    res.status(200).send({ message: 'Form submitted successfully' });
  } catch (err) {
    res.status(500).send({ message: 'Error submitting form', error: err });
  }
});

app.listen(3000, () => console.log("Server running on http://localhost:3000"));
