import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import path from 'path';
import helmet from 'helmet';

import express, { Request, Response, NextFunction } from 'express';
import { BAD_REQUEST } from 'http-status-codes';
import * as rutas from './routes/routes';
import 'express-async-errors';

//Importing routes
/* import Ping from './routes/Ping';
import Palindrome from './routes/Palindrome';
import Repeated from './routes/Repeated';
import Anime from './routes/Anime';
import Queue from './routes/Queue';
import Stack from './routes/Stack'; */

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

app.use('/api', rutas.default)

// Export express instance
export default app;
