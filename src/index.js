import express from 'express';
import cors from 'cors';

import fio from './fio';

const app = express();


app.use(cors());

app.get('/', (req, res) => {
  const fullName = req.query.fullname;
  res.send(fio(fullName));
});



app.listen(3000, () => {
});
