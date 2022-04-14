import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Purchase } from './purchase';

@ObjectType()
export class Costumer {
  @Field(() => ID)
  id: string;

  @Field(() => Purchase)
  purchases: Purchase[];
}
