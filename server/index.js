const express = require('express');
const cors = require('cors');
require('dotenv').config();
const connectDB = require('./config/db'); // <-- added

const app = express();
connectDB(); // <-- added

const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

const foodRoutes = require('./routes/foodRoutes');
app.use('/api/food', foodRoutes);

const shelterRoutes = require('./routes/shelterRoutes');
app.use('/api/shelters', shelterRoutes);

const beggarRoutes = require('./routes/beggarRoutes');
app.use('/api/beggars', beggarRoutes);




app.get('/', (req, res) => {
  res.send('API is running...');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
