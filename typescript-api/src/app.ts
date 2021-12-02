import * as express from 'express';
import * as cors from 'cors';
import * as logger from 'morgan';

import { connection } from './config/db';
import userRoutes from './routes/userRoutes';

export const app = express();

app.use(cors());
app.use(express.json());
app.use(logger('dev'));

connection();

app.use('/usuario', userRoutes);
app.use('/', (req, res) => res.send('API typeScript') )
