import { Controller, Get } from '@nestjs/common';
import packageJson from '../../package.json';

@Controller('version')
export class VersionController {
  constructor() {}

  @Get('/')
  async findByCode(): Promise<{ version: string }> {
    const version = packageJson.version;
    return { version };
  }
}
