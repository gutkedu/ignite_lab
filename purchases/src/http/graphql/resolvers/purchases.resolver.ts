import { UseGuards } from '@nestjs/common';
import {
  Resolver,
  Query,
  ResolveField,
  Parent,
  Mutation,
  Args,
} from '@nestjs/graphql';
import { CostumersService } from '../../../services/costumers.service';
import { ProductsService } from '../../../services/products.service';
import { PurchasesService } from '../../../services/purchases.service';
import { AuthorizationGuard } from '../../auth/authorization.guard';
import { AuthUser, CurrentUser } from '../../auth/currentUser';
import { CreatePurchaseInput } from '../inputs/createPurchaseInput';
import { Purchase } from '../models/purchase';

@Resolver(() => Purchase)
export class PurchasesResolver {
  constructor(
    private purchasesService: PurchasesService,
    private productService: ProductsService,
    private costumersService: CostumersService,
  ) {}

  @Query(() => [Purchase])
  @UseGuards(AuthorizationGuard)
  purchases() {
    return this.purchasesService.listAllPurchases();
  }

  @ResolveField()
  product(@Parent() purchase: Purchase) {
    return this.productService.getProductById(purchase.productId);
  }

  @Mutation(() => Purchase)
  @UseGuards(AuthorizationGuard)
  async createPurchase(
    @Args('data') data: CreatePurchaseInput,
    @CurrentUser() user: AuthUser,
  ) {
    let costumer = await this.costumersService.getCostumerByAuthUserId(
      user.sub,
    );

    if (!costumer) {
      costumer = await this.costumersService.createCostumer({
        authUserId: user.sub,
      });
    }

    return this.purchasesService.createPurchase({
      costumerId: costumer.id,
      productId: data.productId,
    });
  }
}
