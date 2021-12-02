import * as express from 'express';
import * as cors from 'cors';
import * as logger from 'morgan';

import { connection } from './config/db';
import userRoutes from './routes/userRoutes';
import lauchRoutes from './routes/launchRoutes';

export const app = express();

app.use(cors());
app.use(express.json());
app.use(logger('dev'));

connection();

app.use('/usuario', userRoutes);
app.use('/lancamento', lauchRoutes);
app.use('/', (req, res) => res.send('API typeScript') )
