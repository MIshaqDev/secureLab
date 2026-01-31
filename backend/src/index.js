import express from 'express';
import CeaserRouter from './routes/ceaser.route.js';
import MonoRouter from './routes/mono.route.js';
import VigenerRouter from './routes/vigener.route.js';
import RTRouter from './routes/rowTrans.router.js';
import corsMiddleware from './Middleware/cors.middleware.js';
import helmet from 'helmet';


const app = express();
app.use(corsMiddleware);
app.use(helmet());
app.use(express.json());
app.use('/ceaser', CeaserRouter);
app.use('/mono', MonoRouter);
app.use('/vigener', VigenerRouter);
app.use('/rowTrans', RTRouter);
app.listen(3000, ()=> {
    console.log('Server is running on port 3000');
})