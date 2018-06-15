import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

// routes
import routes from './routes';

dotenv.config();

const app = express();
const port = process.env.PORT || 7777;

// Parse incoming requests data (https://github.com/expressjs/body-parser)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.set('port', process.env.PORT || 7777);

routes(app);

// Setup a default catch-all route that sends back a welcome message in JSON format.
app.get('*', (req, res) => res.status(200).send({
  message: 'Welcome to the beginning of nothingness.',
}));

app.listen(port, err => {
  err ? console.log(err) : console.log(`App is running on port ${port}`);
});
