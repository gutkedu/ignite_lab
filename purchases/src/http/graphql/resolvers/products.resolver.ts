import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ProductsService } from '../../../services/products.service';
import { CreateProductInput } from '../inputs/createProductInput';
import { Product } from '../models/product';

@Resolver(() => Product)
export class ProductsResolver {
  constructor(private productsService: ProductsService) {}

  @Query(() => [Product])
  products() {
    return this.productsService.listAllProducts();
  }

  @Mutation(() => Product)
  createProduct(@Args('data') data: CreateProductInput) {
    return this.productsService.createProduct(data);
  }
}
