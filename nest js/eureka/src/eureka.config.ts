export const eurekaConfig = {
    instance: {
      app: 'YOUR_MICROSERVICE_NAME', // replace with your microservice name
      hostName: 'localhost',
      ipAddr: '127.0.1.100',
      port: {
        '$': 3002, // replace with your microservice port
        '@enabled': 'true',
      },
      vipAddress: 'YOUR_MICROSERVICE_NAME', // replace with your microservice name
      dataCenterInfo: {
        '@class': 'com.netflix.appinfo.InstanceInfo$DefaultDataCenterInfo',
        name: 'MyOwn',
      },
    },
    eureka: {
      host: 'localhost', // replace with your Eureka server host
      port: 8761, // replace with your Eureka server port
      servicePath: '/eureka/apps/',
    },
  };