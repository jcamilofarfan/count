import { ApiProperty, PartialType } from '@nestjs/swagger';
import {
  IsAlphanumeric,
  IsNotEmpty,
  IsString,
  IsPostalCode,
} from 'class-validator';

export class CreateCompanyDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'Name of company' })
  readonly name: string;

  @IsAlphanumeric()
  @IsNotEmpty()
  @ApiProperty({ description: 'Company code' })
  readonly identificador: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'Description of company' })
  readonly description: string;

  @IsString()
  @IsPostalCode()
  @ApiProperty({ description: 'Company postal code' })
  readonly location: string;
}

export class UpdateCompanyDto extends PartialType(CreateCompanyDto) {}
