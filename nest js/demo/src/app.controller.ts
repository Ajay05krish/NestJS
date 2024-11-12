// app.controller.ts in demo service
import { Controller, Post, Body, Get } from '@nestjs/common';
import { ClientProxy, ClientProxyFactory, Transport } from '@nestjs/microservices';

@Controller()
export class AppController {
  private readonly paymentServiceClient: ClientProxy;
  appService: any;

  constructor() {
    this.paymentServiceClient = ClientProxyFactory.create({
      transport: Transport.TCP,
      options: {
        host: 'localhost', // Update with payment-service host
        port: 3002, // Port for payment-service, adjust accordingly
      },
    });
  }
  @Post('payment/process')
  async processPayment(@Body() paymentData: any): Promise<any> {
    try {
      const paymentResult = await this.paymentServiceClient.send<any>('payment.processPayment', paymentData).toPromise();
      return { message: 'Payment processed successfully', paymentResult };
    } catch (error) {
      return { message: 'Failed to process payment', error };
    }

   
  }
 

}


