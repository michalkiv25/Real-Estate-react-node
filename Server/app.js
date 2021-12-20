const users = require('./routes/users');
const auth = require('./routes/auth');
const cards = require('./routes/cards');
const express = require('express');
const app = express();
const http = require('http').Server(app);
const mongoose = require('mongoose');
const { User } = require('./models/user');
const cors= require('cors');

mongoose.connect('mongodb://localhost/my_rest_api', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  
}).then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...'));

app.use(cors());//No information security, you can access the server for free
app.use(express.json());
app.use('/api/users', users);
app.use('/api/auth', auth);
app.use('/api/cards', cards);

app.get('/',(req,res)=>{//Displays a clock on the server's browser page
  res.send(new Date().toLocaleTimeString());
});

app.get('/allusers', (req,res)=>{
  const users= User.find({});
  console.log(users.length);
   res.send(users[0]);
});

const port = 3000;
http.listen(port, () => console.log(`Listening on port ${port}...`));