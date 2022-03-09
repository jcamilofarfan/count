import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsAlphanumeric, IsNotEmpty, IsString } from 'class-validator';

export class CreateCompanyDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'Name of company' })
  readonly name: string;

  @IsAlphanumeric()
  @IsNotEmpty()
  @ApiProperty({ description: 'Company code' })
  readonly identifier: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'Description of company' })
  readonly description: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'Country of company' })
  readonly location: string;
}

export class UpdateCompanyDto extends PartialType(CreateCompanyDto) {}
