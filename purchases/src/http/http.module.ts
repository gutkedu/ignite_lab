import path from 'node:path';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver } from '@nestjs/apollo';

import { ProductsResolver } from './graphql/resolvers/products.resolver';
import { ProductsService } from '../services/products.service';
import { PurchasesResolver } from './graphql/resolvers/purchases.resolver';
import { PurchasesService } from '../services/purchases.service';
import { DatabaseModule } from '../database/database.module';
import { CostumersService } from '../services/costumers.service';
import { CostumersResolver } from './graphql/resolvers/costumers.resolver';
@Module({
  imports: [
    ConfigModule.forRoot(),
    DatabaseModule,
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      autoSchemaFile: path.resolve(process.cwd(), 'src.schema.gql'),
    }),
  ],
  providers: [
    //Resolver
    ProductsResolver,
    PurchasesResolver,
    CostumersResolver,
    //Services
    ProductsService,
    PurchasesService,
    CostumersService,
  ],
})
export class HttpModule {}
