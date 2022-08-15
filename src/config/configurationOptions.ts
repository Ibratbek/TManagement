type HttpOptions = {
  port: number;
};

type ApplicationOptions = {
  http: HttpOptions;
};

type MongoOptions = {
  auth: boolean;
  port: number;
  user: string;
  password: string;
  database: string;
  host: string;
};

export type ConfigurationOptions = {
  application: ApplicationOptions;
  mongodb: MongoOptions;
};
