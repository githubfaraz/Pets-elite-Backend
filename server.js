const express = require('express');
const mongoose = require('mongoose');
const MONGO_URI = 'mongodb+srv://wesleywaka2:wesleywaka2@clusterztm.kle9fqo.mongodb.net/Pets-Elite?retryWrites=true&w=majority'
const Pet =require('./models/petModel')
const app = express();
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser')
const cors = require('cors');

// Middlewares
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(
    cors({
        origin: ["http://localhost:3000","http://localhost:3001", "https://pinvent-app.vercel.app"],
        credentials: true,
    })
);

// Connect to MongoDB
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});


// const Pet = mongoose.model('User', PetSchema);

// Define API routes
app.get('/api/bully-sticks', async (req, res) => {
  try {
    const users = await Pet.find();
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
  }
});


app.get('/api/bully-sticks/:id', async (req, res) => {
  const furnitureId = req.params.id

  let furniture;

  try {
      furniture = await Pet.findById(furnitureId);
  } catch (error) {
      res.status(404)
      // throw new Error('Furniture does not exist')
  }

  res.status(200).json(furniture);
});

// Start the server
app.listen(5000, () => {
  console.log('Server is running on port 3001');
});
