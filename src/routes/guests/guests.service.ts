import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Guests } from './guests.schema';
import { UpdateGuestsDto } from './guests.dto';

@Injectable()
export class GuestsService {
  constructor(@InjectModel(Guests.name) private guestsModel: Model<Guests>) {}

  async update(uuid, updateGuestsDto: UpdateGuestsDto): Promise<Guests> {
    return this.guestsModel.findOneAndUpdate({ uuid }, { ...updateGuestsDto, lastUpdated: new Date().toISOString() }, { upsert: true }).exec();
  }

  async findByUuid(uuid: string): Promise<Guests> {
    return this.guestsModel.findOne({ uuid }).select('-_id -__v').exec();
  }

  async findByCode(code: string): Promise<Guests> {
    return this.guestsModel.findOne({ code }).select('-_id -__v').exec();
  }

  async findAll(): Promise<Guests[]> {
    return this.guestsModel.find().exec();
  }

  async findAllAttending(): Promise<Guests[]> {
    return this.guestsModel.find({ lastUpdated: { $exists: true } }).exec();
  }
}
