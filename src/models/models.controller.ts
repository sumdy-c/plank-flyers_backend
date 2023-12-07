import {
  Controller,
  Get,
  Header,
  Logger,
  StreamableFile,
} from '@nestjs/common';
import { createReadStream } from 'fs';
import { join } from 'path';

@Controller('rock')
export class FileController {
  @Get()
  @Header('Content-Type', 'application/zip, application/octet-stream')
  getFile(): StreamableFile {
    const file = createReadStream(join(process.cwd(), './src/assets/rock.zip'));
    Logger.log(file);
    return new StreamableFile(file);
  }
}
