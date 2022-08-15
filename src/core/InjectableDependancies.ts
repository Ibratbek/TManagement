import { ConfigurationOptions } from '../config/configurationOptions';
import { MongoDBDriver } from '../infrastructure/mongo/index';
import { HttpServer } from '../interfaces/http/server';
import { Application } from '../app/application';

export interface AwlixContainer {
  mongoDB: MongoDBDriver;
  config: ConfigurationOptions;
  httpServer: HttpServer;
  application: Application;
}
