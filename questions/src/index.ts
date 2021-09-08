import DotEnv from 'dotenv';
import Express from 'express';

import chatListener  from './chat-listener';

const app = Express()
 
app.get('/', function (req, res) {
  res.send('Hello World')
})

chatListener();

app.listen(3000)