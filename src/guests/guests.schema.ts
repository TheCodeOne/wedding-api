import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type GuestsDocument = HydratedDocument<Guests>;

@Schema()
export class Guests {
  _id: any;
  __v: any;

  @Prop()
  uuid: string;

  @Prop()
  guests: {
    name: string;
    gender: number;
    willAttend: boolean;
  }[];

  @Prop()
  isPlusOneEligable: boolean;
}

export const GuestsSchema = SchemaFactory.createForClass(Guests);
