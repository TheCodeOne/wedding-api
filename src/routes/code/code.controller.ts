import { BadRequestException, Controller, Get, Param } from '@nestjs/common';
import { GuestsService } from 'src/routes/guests/guests.service';
import { getRandomPhrase } from 'src/utils';

@Controller('code')
export class CodeController {
  constructor(private readonly guestsService: GuestsService) {}

  @Get('/:code')
  async findByCode(@Param('code') code: string): Promise<{ uuid: string }> {
    const guests = await this.guestsService.findByCode(code.toUpperCase());
    if (!guests) {
      throw new BadRequestException(getRandomPhrase());
    }
    return { uuid: guests.uuid };
  }
}
