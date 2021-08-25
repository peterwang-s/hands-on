export default function () {
  return {
    app: {
      port: 3000,
      excluded: 'excluded_path',
    },
    mongodb: {
      url: 'mongodb://hostname:port/server_data_interface',
    },
    mongodbOptions: {
      user: 'admin',
      pass: 'admin',
      useNewUrlParser: true,
      useCreateIndex: true,
    },
  };
}
