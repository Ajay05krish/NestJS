// payment.controller.ts in payment-service
import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class PaymentController {

  @MessagePattern('payment.processPayment')
  processPayment(data: any): string {
    console.log('Received payment data:', data);
    return data;
    // return 'Payment processed successfully from payment ajay';:
  }
}
