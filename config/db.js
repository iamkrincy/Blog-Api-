// const mongoose = require('mongoose');

// mongoose.connect('mongodb+srv://krincy:krincy22@cluster0.ywzpz.mongodb.net/apiproject');

// const db = mongoose.connection;

// db.on('connected' ,(err) =>{
//     if(err){
//         console.log(err);
//         return false; 
//     }
//     console.log('DB is connected');const mongoose = require('mongoose');
// });


// module.exports = {db}

require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;

db.on('connected', () => {
  console.log('✅ MongoDB Atlas connected');
});

db.on('error', (err) => {
  console.error('❌ MongoDB connection error:', err);
});

module.exports = db;
