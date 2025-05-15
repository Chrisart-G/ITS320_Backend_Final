import express, {json} from 'express';
import connectDB from './config/db.js';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 3000;
app.use(cors())
app.use(json());

connectDB();

app.get('/api/hello', (req, res) => {
  res.send('Hello World');
});

app.listen(port, () => {
  console.log(`Server is active on port ${port}`);
});
