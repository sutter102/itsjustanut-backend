const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const apiRoutes = require('./routes/api');

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', apiRoutes);

app.get('/', (req, res) => {
res.send('Welcome to the ItsJustANut API! Visit /api/videos to get content.');

});


mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected')).catch(err => console.log(err));

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
