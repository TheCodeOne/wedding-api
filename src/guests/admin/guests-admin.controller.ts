import { Controller, Get } from '@nestjs/common';
import { Guests } from '../guests.schema';
import { GuestsService } from '../guests.service';

@Controller('guests/admin')
export class GuestsAdminController {
  constructor(private readonly guestsService: GuestsService) {}

  @Get('/all')
  async findAll(): Promise<Guests[]> {
    if (process.env.ENV !== 'dev') return [] as Guests[];
    const guests = await this.guestsService.findAll();

    return guests;
  }

  @Get('/all/attending')
  async findAllAttending(): Promise<any[]> {
    if (process.env.ENV !== 'dev') return [];
    const guests = await this.guestsService.findAllAttending();

    return guests.map((guest) => ({ name: concatNames(guest.guests), lastUpdated: guest.lastUpdated }));
  }
}

function concatNames(guests: { name: string; gender: number }[]) {
  return guests.map((guest) => guest.name).join(', ');
}
