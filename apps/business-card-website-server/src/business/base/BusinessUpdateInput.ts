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
import {
  IsString,
  MaxLength,
  IsOptional,
  ValidateNested,
} from "class-validator";
import { IsJSONValue } from "../../validators";
import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../../types";
import { ServiceUpdateManyWithoutBusinessesInput } from "./ServiceUpdateManyWithoutBusinessesInput";
import { Type } from "class-transformer";
import { ContactUpdateManyWithoutBusinessesInput } from "./ContactUpdateManyWithoutBusinessesInput";

@InputType()
class BusinessUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  description?: string | null;

  @ApiProperty({
    required: false,
  })
  @IsJSONValue()
  @IsOptional()
  @Field(() => GraphQLJSON, {
    nullable: true,
  })
  logo?: InputJsonValue;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  location?: string | null;

  @ApiProperty({
    required: false,
    type: () => ServiceUpdateManyWithoutBusinessesInput,
  })
  @ValidateNested()
  @Type(() => ServiceUpdateManyWithoutBusinessesInput)
  @IsOptional()
  @Field(() => ServiceUpdateManyWithoutBusinessesInput, {
    nullable: true,
  })
  services?: ServiceUpdateManyWithoutBusinessesInput;

  @ApiProperty({
    required: false,
    type: () => ContactUpdateManyWithoutBusinessesInput,
  })
  @ValidateNested()
  @Type(() => ContactUpdateManyWithoutBusinessesInput)
  @IsOptional()
  @Field(() => ContactUpdateManyWithoutBusinessesInput, {
    nullable: true,
  })
  contacts?: ContactUpdateManyWithoutBusinessesInput;
}

export { BusinessUpdateInput as BusinessUpdateInput };
