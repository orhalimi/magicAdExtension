import express from 'express';
import bodyParser from 'body-parser';
import routes from './routes/index.route';
import cors from 'cors';

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use('/api', routes);

app.use((err, req, res, next) => {
  console.log(err);
  return next(err);
});

export default app;

