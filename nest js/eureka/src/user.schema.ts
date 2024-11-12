// src/schemas/user.schema.ts

import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class User extends Document {
  @Prop()
  name: string;

  @Prop()
  email: string;

  // Add more properties as needed
}

export const UserSchema = SchemaFactory.createForClass(User);
