/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsString,
  IsDate,
  IsEnum,
  IsOptional,
  ValidateNested,
} from "class-validator";
import { Type } from "class-transformer";
import { EnumSubscriptionPackageField } from "./EnumSubscriptionPackageField";
import { School } from "../../school/base/School";

@ObjectType()
class Subscription {
  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;

  @ApiProperty({
    required: false,
    enum: EnumSubscriptionPackageField,
  })
  @IsEnum(EnumSubscriptionPackageField)
  @IsOptional()
  @Field(() => EnumSubscriptionPackageField, {
    nullable: true,
  })
  packageField?: "Option1" | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  expirationDate!: Date | null;

  @ApiProperty({
    required: false,
    type: () => School,
  })
  @ValidateNested()
  @Type(() => School)
  @IsOptional()
  school?: School | null;
}

export { Subscription as Subscription };
