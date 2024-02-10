import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type SubscriptionDocument = HydratedDocument<Subscription>;

@Schema()
export class Keys {
  @Prop()
  p256dh: string;

  @Prop()
  auth: string;
}
export const OptionsSchema = SchemaFactory.createForClass(Keys);

@Schema()
export class Subscription {
  _id: any;
  __v: any;

  @Prop()
  endpoint: string;

  @Prop()
  expirationTime: number;

  @Prop()
  keys: Keys;
}

export const SubscriptionSchema = SchemaFactory.createForClass(Subscription);
