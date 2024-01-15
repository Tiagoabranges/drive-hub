import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AutomobileUsageService } from './automobile-usage.service';
import { CreateAutomobileUsageDto } from './dto/create-automobile-usage.dto';
import { UpdateAutomobileUsageDto } from './dto/update-automobile-usage.dto';

@Controller('automobile-usage')
export class AutomobileUsageController {
  constructor(private readonly automobileUsageService: AutomobileUsageService) {}

  @Post()
  create(@Body() createAutomobileUsageDto: CreateAutomobileUsageDto) {
    return this.automobileUsageService.create(createAutomobileUsageDto);
  }

  @Get()
  findAll() {
    return this.automobileUsageService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.automobileUsageService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAutomobileUsageDto: UpdateAutomobileUsageDto) {
    return this.automobileUsageService.update(+id, updateAutomobileUsageDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.automobileUsageService.remove(+id);
  }
}
