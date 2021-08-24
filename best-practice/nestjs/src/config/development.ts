export default function () {
  return {
    mongodb: {
      url: 'mongodb://localhost:27017/server_data_interface',
    },
    mongodbOptions: {
      useNewUrlParser: true,
      useCreateIndex: true
    },
  }
}
