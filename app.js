// app.js
const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const sharepointRoutes = require('./routes/sharepointRoutes');
dotenv.config();

 
const app = express();
 
// Middleware (if required)
const { authenticate } = require('./middlewares/authMiddleware');
 
app.use(express.json());
//app.get('/api',authenticate,(req,res)=> res.send ('hi')); // Protect routes with auth
app.use('/api/sharepoint', authenticate, sharepointRoutes); // Protect routes with auth
// app.use('/api/ss',  sharepointRoutes); // Protect routes with auth

 
// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});