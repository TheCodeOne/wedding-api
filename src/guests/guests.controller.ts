import { BadRequestException, Body, Controller, Get, Param, Put } from '@nestjs/common';
import { Guests } from 'src/guests/guests.schema';
import { GuestsService } from 'src/guests/guests.service';
import { UpdateGuestsDto } from './guests.dto';

@Controller('guests')
export class GuestsController {
  constructor(private readonly guestsService: GuestsService) {}

  @Put('/:uuid')
  async update(@Param('uuid') uuid: string, @Body() updateGuestsDto: UpdateGuestsDto) {
    const { uuid: bodyUUID } = updateGuestsDto;

    if (bodyUUID !== uuid) {
      throw new BadRequestException(getRandomPhrase());
    }

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

const phrases = [
  'Almost there, keep it up! 🚀',
  'A for effort! 😄',
  "You're on the right track! 🛤️",
  'Good effort, better luck next time! 🍀',
  'Nice attempt, high-five! 🙌',
  'Well played, but not quite! 🎮',
  'Almost nailed it! 🔨',
  "You're getting warmer! 🔥",
  'A valiant effort, my friend! ⚔️',
  'Great hustle, try again! 💪',
  'So close, yet so far! 🌟',
  "You're in the ballpark! ⚾",
  'Nice shot, aim a bit higher! 🎯',
  'Good try, keep the momentum! 🚴‍♂️',
  "You're inching closer! 📏",
];

const getRandomPhrase = () => {
  const randomIndex = Math.floor(Math.random() * phrases.length);
  return phrases[randomIndex];
};
