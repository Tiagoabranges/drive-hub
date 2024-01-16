// src/automobile/validators/unique-license-plate.validator.ts

import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class UniqueLicensePlateValidator {
  constructor(private readonly prismaService: PrismaService) {}

  async isLicensePlateUnique(licensePlate: string): Promise<boolean> {
    try {
      const existingAutomobile = await this.prismaService.automobile.findFirst({
        where: { licensePlate },
      });

      return !existingAutomobile;
    } catch (error) {
      throw error;
    }
  }
}
