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
      // mongodb用户和密码
      user: 'wang',
      pass: 'damowang',
      useNewUrlParser: true,
      useCreateIndex: true,
    },
  };
}
