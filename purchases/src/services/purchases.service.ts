import { Injectable } from '@nestjs/common';
import { PrismaService } from '../database/prisma/prisma.service';

interface CreatePurchaseParams {
  productId: string;
  costumerId: string;
}
@Injectable()
export class PurchasesService {
  constructor(private prisma: PrismaService) {}

  async listAllPurchases() {
    return await this.prisma.purchase.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  async listAllFromCostumer(costumerId: string) {
    return await this.prisma.purchase.findMany({
      where: {
        costumerId,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
  }

  async createPurchase({ costumerId, productId }: CreatePurchaseParams) {
    const product = await this.prisma.product.findUnique({
      where: {
        id: productId,
      },
    });

    if (!product) {
      throw new Error('Product not found.');
    }

    return await this.prisma.purchase.create({
      data: {
        costumerId,
        productId,
      },
    });
  }
}
