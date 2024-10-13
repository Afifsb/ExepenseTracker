const express = require('express');
const Expense = require('../models/Expense'); // Import the Expense model

const router = express.Router();

// POST route to add a new expense
router.post('/expenses', async (req, res) => {
  try {
    const { date, category, amount, description } = req.body;
    const newExpense = new Expense({ date, category, amount, description });
    await newExpense.save();
    res.status(201).json(newExpense); // Respond with the created expense
  } catch (error) {
    res.status(500).json({ message: 'Error saving expense', error });
  }
});

// GET route to get all expenses
router.get('/expenses', async (req, res) => {
  try {
    const expenses = await Expense.find();
    res.status(200).json(expenses);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching expenses', error });
  }
});

module.exports = router;
