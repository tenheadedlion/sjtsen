import { Injectable } from '@nestjs/common';

@Injectable()
export class CatsService {
  hail() {
    return 'hail nestjs!\n';
  }
}
