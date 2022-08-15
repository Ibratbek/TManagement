import { createContainer, asClass, asValue } from 'awilix';
import Config from '../config/index';

import { AwlixContainer } from '../core/InjectableDependancies';

import { MongoDBDriver } from '../infrastructure/mongo/index';
import { HttpServer } from '../interfaces/http/server';
import { Application } from './application';

const container = createContainer<AwlixContainer>();

export default container.register({
  mongoDB: asClass(MongoDBDriver),
  httpServer: asClass(HttpServer).singleton(),
  application: asClass(Application).singleton(),
  config: asValue(Config),
});
