import { Injectable } from '@nestjs/common';
import { PrismaService } from '../database/prisma/prisma.service';

interface CreateCostumerParams {
  authUserId: string;
}

@Injectable()
export class CostumersService {
  constructor(private prisma: PrismaService) {}

  async getCostumerByAuthUserId(authUserId: string) {
    return await this.prisma.costumer.findUnique({
      where: {
        authUserId,
      },
    });
  }

  async createCostumer({ authUserId }: CreateCostumerParams) {
    return this.prisma.costumer.create({
      data: {
        authUserId,
      },
    });
  }
}
