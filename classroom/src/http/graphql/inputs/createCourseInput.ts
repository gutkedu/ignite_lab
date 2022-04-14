import { InputType, Field } from '@nestjs/graphql';

@InputType()
class CreateCourseInput {
  @Field()
  title: string;
}
