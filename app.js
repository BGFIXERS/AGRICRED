const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const { authenticate, authorizeRoles } = require('./middlewares/authMiddleware');

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);

// Protected Routes Example
app.get('/api/farmer/dashboard', authenticate, authorizeRoles('farmer'), (req, res) => {
  res.json({ message: 'Welcome to the Farmer Dashboard' });
});

app.get('/api/investor/dashboard', authenticate, authorizeRoles('investor'), (req, res) => {
  res.json({ message: 'Welcome to the Investor Dashboard' });
});

app.get('/api/admin/dashboard', authenticate, authorizeRoles('admin'), (req, res) => {
  res.json({ message: 'Welcome to the Admin Dashboard' });
});

// Connect to MongoDB and Start Server
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  app.listen(process.env.PORT, () => {
    console.log(Server running on port ${process.env.PORT});
  });
}).catch((error) => {
  console.error('MongoDB connection error:', error);
});