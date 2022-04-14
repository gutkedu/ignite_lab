import { UseGuards } from '@nestjs/common';
import { Resolver, Query, Parent, ResolveField } from '@nestjs/graphql';
import { CostumersService } from '../../../services/costumers.service';
import { PurchasesService } from '../../../services/purchases.service';
import { AuthorizationGuard } from '../../auth/authorization.guard';
import { AuthUser, CurrentUser } from '../../auth/currentUser';
import { Costumer } from '../models/costumer';

@Resolver(() => Costumer)
export class CostumersResolver {
  constructor(
    private costumersService: CostumersService,
    private purchasesService: PurchasesService,
  ) {}

  @UseGuards(AuthorizationGuard)
  @Query(() => Costumer)
  me(@CurrentUser() user: AuthUser) {
    return this.costumersService.getCostumerByAuthUserId(user.sub);
  }

  @ResolveField()
  purchases(@Parent() costumer: Costumer) {
    return this.purchasesService.listAllFromCostumer(costumer.id);
  }
}
