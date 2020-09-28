import Ping from './Ping';
import Palindrome from './Palindrome';
import Repeated from './Repeated';
import Anime from './Anime';
import Queue from './Queue';
import Stack from './Stack';
import express from 'express'

let app = express();

app.use('/ping', Ping);
app.use('/palindrome', Palindrome);
app.use('/repeated', Repeated);
app.use('/anime', Anime);
app.use('/queue', Queue);
app.use('/stack', Stack);

export default app;