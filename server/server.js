
import app from './app';
import mongoose from 'mongoose';

const PORT = process.env.PORT || '3000';
const DB_URL = process.env.DB_URL || 'mongodb://mongo:27017/magicAd'

const connectDb = () => {
  console.log(`Connectiong to MongoDB at ${DB_URL}`);
  return mongoose.connect(DB_URL, {useNewUrlParser: true});
};

connectDb().then(async () => {
  app.listen(PORT, () => {
    console.log(`Server run at http://localhost:${PORT}`);
  })
}).catch(err => {
  console.log('Unable to connect to DB. Error:');
  console.log(err);
});

