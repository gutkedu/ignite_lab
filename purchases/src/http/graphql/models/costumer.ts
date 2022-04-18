import { ObjectType, Field, ID, Directive } from '@nestjs/graphql';
import { Purchase } from './purchase';

@ObjectType('User')
@Directive('@key(fields: "authUserId")')
export class Costumer {
  id: string;

  @Field(() => ID)
  authUserId: string;

  @Field(() => Purchase)
  purchases: Purchase[];
}
