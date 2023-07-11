import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const port = process.env.PORT || 5000;

const app = express();

app.get('/', (req, res) => res.send('server is ready'));

app.listen(3000, () => {
  console.log(`App is running on port ${port}`);
});
