import { Router } from 'express';
import * as ClinicController from './controllers/ClinicController';


const routes = new Router();

routes.get('/', (_, res) => res.json({ message: 'All systems normal.' }));

routes.post('/store', ClinicController.store);
routes.get('/index', ClinicController.index);
routes.get('/sort', ClinicController.sort);

export default routes;
