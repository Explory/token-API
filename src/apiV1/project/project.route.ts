import { Router } from 'express';
import Controller from './project.controller';

const project: Router = Router();
const controller = new Controller();

project.get('/', controller.getProjects);
project.post('/create', controller.createProject);

export default project;
