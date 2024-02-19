import { Controller, Get } from '@nestjs/common';
import { isDevMode } from 'src/utils';
import { Guests } from '../guests.schema';
import { GuestsService } from '../guests.service';
import { AttendingResponse } from './admin.types';
import { getAmounts, getGuests } from './admin.utils';

@Controller('guests/admin')
export class GuestsAdminController {
  constructor(private readonly guestsService: GuestsService) {}

  @Get('/all')
  async findAll(): Promise<Guests[]> {
    if (!isDevMode()) return [] as Guests[];

    const guests = await this.guestsService.findAll();

    return guests;
  }

  @Get('/all/replied')
  async findAllAttending(): Promise<AttendingResponse> {
    if (!isDevMode()) return {} as AttendingResponse;

    const guests = await this.guestsService.findAll();
    const attending = getGuests(guests, true);
    const notAttending = getGuests(guests, false);
    const notReplied = getGuests(guests, undefined);
    const amounts = getAmounts(attending, notAttending, notReplied);

    return { amounts, attending, notAttending, notReplied };
  }
}
