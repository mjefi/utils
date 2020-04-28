import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import compress from 'compression';
import cors from 'cors';
import helmet from 'helmet';

const server = express();
const dev = process.env.NODE_ENV !== 'production';

server.disable('x-powered-by');
server.use(morgan(dev ? 'dev' : 'combined')); // request logging. dev: console | production: file
server.use(bodyParser.json()); // parse body params and attache them to req.body
server.use(bodyParser.urlencoded({ extended: true }));
server.use(compress()); // gzip compression
server.use(helmet()); // secure apps by setting various HTTP headers
server.use(cors()); // enable CORS - Cross Origin Resource Sharing

export default server;
