/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsJSONValue } from "../../validators";
import { IsOptional, ValidateNested } from "class-validator";
import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../../types";
import { FeeCreateNestedManyWithoutStudentsInput } from "./FeeCreateNestedManyWithoutStudentsInput";
import { Type } from "class-transformer";

@InputType()
class StudentCreateInput {
  @ApiProperty({
    required: false,
  })
  @IsJSONValue()
  @IsOptional()
  @Field(() => GraphQLJSON, {
    nullable: true,
  })
  customProfile?: InputJsonValue;

  @ApiProperty({
    required: false,
  })
  @IsJSONValue()
  @IsOptional()
  @Field(() => GraphQLJSON, {
    nullable: true,
  })
  documents?: InputJsonValue;

  @ApiProperty({
    required: false,
  })
  @IsJSONValue()
  @IsOptional()
  @Field(() => GraphQLJSON, {
    nullable: true,
  })
  photos?: InputJsonValue;

  @ApiProperty({
    required: false,
    type: () => FeeCreateNestedManyWithoutStudentsInput,
  })
  @ValidateNested()
  @Type(() => FeeCreateNestedManyWithoutStudentsInput)
  @IsOptional()
  @Field(() => FeeCreateNestedManyWithoutStudentsInput, {
    nullable: true,
  })
  fees?: FeeCreateNestedManyWithoutStudentsInput;
}

export { StudentCreateInput as StudentCreateInput };
