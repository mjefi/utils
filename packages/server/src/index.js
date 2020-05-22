import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import compress from 'compression';
import cors from 'cors';
import helmet from 'helmet';
import csp from 'helmet-csp';

const app = express();
const dev = process.env.NODE_ENV !== 'production';

const router = express.Router();

app.use(csp({ directives: { defaultSrc: ["'self'"] } }));
app.disable('x-powered-by');
app.use(morgan(dev ? 'dev' : 'combined')); // request logging. dev: console | production: file
app.use(bodyParser.json()); // parse body params and attache them to req.body
app.use(bodyParser.urlencoded({ extended: true }));
app.use(compress()); // gzip compression
app.use(helmet()); // secure apps by setting various HTTP headers
app.use(cors()); // enable CORS - Cross Origin Resource Sharing

export { app as default, router };
