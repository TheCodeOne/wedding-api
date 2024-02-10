import { BadRequestException, Controller, Get, Param } from '@nestjs/common';
import { GuestsService } from 'src/guests/guests.service';
import { getRandomPhrase } from 'src/utils';

interface PrivateData {
  maidOfHonor: Data;
  bestMan: Data;
}

interface Data {
  phone: string;
  email: string;
}

@Controller('private-data')
export class PrivateDataController {
  constructor(private readonly guestsService: GuestsService) {}

  @Get('/:uuid')
  async findOne(@Param('uuid') uuid: string): Promise<PrivateData> {
    const guests = await this.guestsService.findOne(uuid);
    if (!guests) {
      throw new BadRequestException(getRandomPhrase());
    }
    const privateData = JSON.parse(process.env.PRIVATE_DATA) as unknown as PrivateData;
    return privateData;
  }
}
