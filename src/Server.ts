import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import path from 'path';
import helmet from 'helmet';

import express, { Request, Response, NextFunction } from 'express';
import { BAD_REQUEST } from 'http-status-codes';
import 'express-async-errors';

//Importing routes
import Ping from './routes/Ping';
import Palindrome from './routes/Palindrome';
import Repeated from './routes/Repeated';
import Anime from './routes/Anime';

import logger from '@shared/Logger';

// Init express
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

/* // Show routes called in console during development
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

// Security
if (process.env.NODE_ENV === 'production') {
    app.use(helmet());
} */

app.use('/ping', Ping);
app.use('/palindrome', Palindrome);
app.use('/repeated', Repeated);
app.use('/anime', Anime);

// Export express instance
export default app;
