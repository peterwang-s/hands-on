export default function () {
  return {
    mongodb: {
      url: 'mongodb://localhost:27017/nest-mongo',
    },
    mongodbOptions: {
      useNewUrlParser: true,
      useCreateIndex: true,
    },
  };
}
