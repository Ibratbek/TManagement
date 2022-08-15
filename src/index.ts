import Application from './app/index';

const application = Application.cradle.application;

application
  .start()
  .then(() => {
    console.log('Application started');
  })
  .catch((err) => console.log(err));
