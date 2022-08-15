import mongoose from 'mongoose';

export class MongoDBDriver {
  private url: string;

  constructor({ config }) {
    const options = config.mongodb;

    if (options.auth) {
      this.url = `mongodb://${options.host}${options.user}:$${options.password}@${options.host}:${options.port}/${options.database}`;
    }

    this.url = `mongodb://${options.host}:${options.port}/${options.database}`;
  }

  connect = async () => {
    try {
      await mongoose.connect(this.url);
      console.log('Connected Mongodb');
    } catch (e) {
      throw new Error(e);
    }
  };
}
