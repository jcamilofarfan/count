import { ApiProperty } from '@nestjs/swagger';
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
  @ApiProperty({ description: 'Identificador unico de la empresa' })
  readonly identificador: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: 'Descripcion de la companya' })
  readonly description: string;

  @IsString()
  @IsPostalCode()
  @ApiProperty({ description: 'Location od company' })
  readonly location: string;
}
