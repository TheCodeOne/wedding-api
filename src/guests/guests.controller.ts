import { BadRequestException, Body, Controller, Get, Param, Patch } from '@nestjs/common';
import { Guests } from 'src/guests/guests.schema';
import { GuestsService } from 'src/guests/guests.service';
import { UpdateGuestsDto } from './guests.dto';
import { getRandomPhrase } from 'src/utils';

@Controller('guests')
export class GuestsController {
  constructor(private readonly guestsService: GuestsService) {}

  @Patch('/:uuid')
  async update(@Param('uuid') uuid: string, @Body() updateGuestsDto: UpdateGuestsDto) {
    const guests = await this.guestsService.findOne(uuid);
    if (!guests) {
      throw new BadRequestException(getRandomPhrase());
    }

    this.guestsService.update(uuid, updateGuestsDto);
    return updateGuestsDto;
  }

  @Get('/:uuid')
  async findOne(@Param('uuid') uuid: string): Promise<Guests> {
    const guests = await this.guestsService.findOne(uuid);
    if (!guests) {
      throw new BadRequestException(getRandomPhrase());
    }

    return guests;
  }
}
