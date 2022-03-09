import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateCompanyDto, UpdateCompanyDto } from '../dtos/company.dto';
import { CompanyService } from '../services/company.service';

@ApiTags('company')
@Controller('company')
export class CompanyController {
  constructor(private companyService: CompanyService) {}

  @Get()
  @ApiOperation({ summary: 'Get all companies' })
  getProducts() {
    return this.companyService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get company by id' })
  getProduct(id: number) {
    return this.companyService.findOne(id);
  }

  @Post()
  @ApiOperation({ summary: 'Create a new company' })
  createProduct(@Body() payload: CreateCompanyDto) {
    return this.companyService.create(payload);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update a company' })
  updateProduct(@Param('id') id: number, @Body() payload: UpdateCompanyDto) {
    return this.companyService.update(id, payload);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a company' })
  deleteProduct(@Param('id') id: number) {
    return this.companyService.remove(id);
  }
}
