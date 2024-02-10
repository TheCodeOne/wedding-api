import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Subscription } from './subscription.schema';

@Injectable()
export class SubscriptionService {
  constructor(@InjectModel(Subscription.name) private subscriptionModel: Model<Subscription>) {}

  async add(newSubscription): Promise<Subscription> {
    const newSubscriptionKey = newSubscription.keys.p256dh;
    return await this.subscriptionModel.findOneAndUpdate({ keys: { p256dh: newSubscriptionKey } }, newSubscription, { upsert: true }).exec();
  }

  async findAll(): Promise<Subscription[]> {
    return this.subscriptionModel.find({}, '-_id -__v -keys._id').exec();
  }
}
