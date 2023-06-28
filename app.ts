import {Resolver, Query, Mutation, ObjectType, Field, ID} from "type-graphql";


@ObjectType()
export class Product {
    @Field(() => ID)
    id: number;

    @Field()
    name: string;
}
