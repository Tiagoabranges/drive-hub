import { Injectable } from '@nestjs/common';
import { CreateAutomobileUsageDto } from './dto/create-automobile-usage.dto';
import { UpdateAutomobileUsageDto } from './dto/update-automobile-usage.dto';

@Injectable()
export class AutomobileUsageService {
  create(createAutomobileUsageDto: CreateAutomobileUsageDto) {
    return 'This action adds a new automobileUsage';
  }

  findAll() {
    return `This action returns all automobileUsage`;
  }

  findOne(id: number) {
    return `This action returns a #${id} automobileUsage`;
  }

  update(id: number, updateAutomobileUsageDto: UpdateAutomobileUsageDto) {
    return `This action updates a #${id} automobileUsage`;
  }

  remove(id: number) {
    return `This action removes a #${id} automobileUsage`;
  }
}
