const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb+srv://nihed:nihed@cluster0.96dnb.mongodb.net/', {
    useUnifiedTopology: true,
}).then(() => {
    console.log('MongoDB connected');
}).catch((err) => {
    console.error('Connection error:', err);
});
// Routes
app.get('/', (req, res) => {
  res.send('Hello, MEAN stack!');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
