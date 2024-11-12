// src/app.module.ts

import { Module } from '@nestjs/common';
import { EurekaModule } from 'nestjs-eureka';
import { UsersService } from './users/users.service';

@Module({
  imports: [
    EurekaModule.forRoot({
      disable: false,
      disableDiscovery: false,
      eureka: {
          host: process.env.EUREKA_HOST || 'localhost',
          port: process.env.EUREKA_PORT || 8761,
          servicePath: '/eureka/apps',
          maxRetries: 10,
          requestRetryDelay: 10000,
      },
      service: {
          name: 'payment-service',
          port: parseInt(process.env.APP_PORT) || 3002,
      },
  }),
  ],
  controllers: [],
  providers: [UsersService],
})
export class AppModule {}
