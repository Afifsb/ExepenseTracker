const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const expenseRoutes = require('./routes/expenses'); // Import the expense routes

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // Parse JSON requests

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/expenses-tracker', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Use expense routes
app.use('/api', expenseRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));
