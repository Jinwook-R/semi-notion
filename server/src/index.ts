import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import * as dotenv from 'dotenv';

dotenv.config();

import post from './routes/post';
import AppDataSource from '../data-source';

AppDataSource.initialize().then(() => {
    console.log('데이터베이스가 연결되었습니다.');
}).catch((err) => {
    console.log('데이터베이스 연결에 실패했습니다.');
    console.log(err);
});

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/post', post);

app.route('/').get((req: Request, res: Response) => {
    res.send('Hello World!!');
});

app.listen(process.env.PORT, () => {
    console.log(`서버가 실행됩니다. http://localhost:${process.env.PORT}`);
});