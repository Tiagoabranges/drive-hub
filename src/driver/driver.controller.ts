import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
  Query,
} from '@nestjs/common';
import { DriverService } from './driver.service';
import { Driver } from './entities/driver.entity';
import { CreateDriverDto } from './dto/create-driver.dto';
import { UpdateDriverDto } from './dto/update-driver.dto';

@Controller('driver')
export class DriverController {
  constructor(private readonly driverService: DriverService) {}

  @Get('filtered')
  async getFilteredAutomobiles(
    @Query('name') name?: string,
  ): Promise<Driver[]> {
    const filters = { name };
    return this.driverService.getFilteredAutomobiles(filters);
  }

  @Get(':id')
  getDriver(@Param('id') id: string): Promise<Driver> {
    return this.driverService.getDriverById(Number(id));
  }

  @Get()
  getAllDrivers(): Promise<Driver[]> {
    return this.driverService.getAllDrivers();
  }

  @Post()
  createDriver(@Body() data: CreateDriverDto): Promise<Driver> {
    return this.driverService.createDriver(data);
  }

  @Put(':id')
  updateDriver(
    @Param('id') id: string,
    @Body() data: UpdateDriverDto,
  ): Promise<Driver> {
    return this.driverService.updateDriver(Number(id), data);
  }

  @Delete(':id')
  deleteDriver(@Param('id') id: string): Promise<void> {
    return this.driverService.deleteDriver(Number(id));
  }
}
