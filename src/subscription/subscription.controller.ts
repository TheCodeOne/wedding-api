import { Body, Controller, Get, Post } from '@nestjs/common';
import { SubscriptionDto } from './subscription.dto';
import { SubscriptionService } from './subscription.service';
import * as webPush from 'web-push';

@Controller('subscription')
export class SubscriptionController {
  constructor(private readonly subscriptionService: SubscriptionService) {}

  @Post('/')
  async addSubscription(@Body() subscription: SubscriptionDto): Promise<void> {
    console.log('New subscription!');
    console.log(subscription);
    await this.subscriptionService.add(subscription);

    return;
  }

  @Get('/uh-oh')
  async testSend(): Promise<void> {
    const publicKey = process.env.VAPID_PUBLIC_KEY;
    const privateKey = process.env.VAPID_PRIVATE_KEY;
    const subscriptions = await this.subscriptionService.findAll();

    webPush.setVapidDetails('mailto:dimi.kokkonias@gmail,.com', publicKey, privateKey);
    const notificationPayload = {
      notification: {
        title: 'Achtung!',
        body: 'Wer hat noch nicht, wer will nochmal!',
        icon: 'https://wedding-frontend-3a53ef0974fe.herokuapp.com/assets/icon-144x144.png',
        vibrate: [100, 50, 100],
        data: {
          dateOfArrival: Date.now(),
          primaryKey: 1,
        },
        actions: [
          {
            action: 'explore',
            title: 'Go to the site',
          },
        ],
      },
    };
    try {
      await Promise.all(subscriptions.map((sub) => webPush.sendNotification(sub, JSON.stringify(notificationPayload))));
    } catch (error) {
      throw new Error(error);
    }
  }
}
